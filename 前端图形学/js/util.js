var util = {
	dis(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
	},
	range(min, max){
		return min + Math.random() * (max - min);
	},
	decodePolygon(coordinate,encodeOffsets,encodeScale){
		const result = [];
		let prevX = encodeOffsets[0];
		let prevY = encodeOffsets[1];

		for(let i =0 ; i < coordinate.length; i++){
			let x = corrdinate.charCodeAt(i) - 64;
			let y = corrdinate.charCodeAt(i+1) - 64;

			x = x >> 1 ^ - (x & 1);
			x = y >> 1 ^ - (y & 1);

			x += prevX;
			y += prevY;

			result.push([x / encodeScale,y / encodeScale])
		}

		return result;
	},
	decode(json){
		if(!json.UFT8Encoding){
			return json;
		}
		let encodeScale = json.UTF8Scale;
		if(!encodeScale){
			encodeScale = 1024;

		}

		let features = json.features;

		features.forEach(feature=>{
			let geometry = feature.geometry;
			let coordinates =  geometry.coordinates;
			let encodeOffsets = geometry.encodeOffsets;
			coordinates.forEach((coordinate,i)=>{
				if(geometry.type === 'Polygon'){
					coordinates[i] = this.decodePolygon(coordinate,encodeOffsets[i],encodeScale);
				}else if(geometry.type === 'MultiPolygon'){
					coordinate.forEach((ploygon,k)=>{
						coordinate[k] = this.decodePolygon(ploygon,encodeOffsets[i][k],encodeScale);
					})
				}
			})
		})

		json.UTF8coding = false;

		return json;
	}
};