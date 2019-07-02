var util = {
	dis(x1, y1, x2, y2) {
		return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
	},
	range(min, max){
		return min + Math.random() * (max - min);
	}
};