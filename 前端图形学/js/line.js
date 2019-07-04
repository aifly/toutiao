//直线类
class Line {
	constructor(options) {
		this.x = 0;//x坐标
		this.y = 0;//y坐标
		
		this.x1 = 0;//线条起点X坐标
		this.y1 = 0;//线条起点Y坐标

		this.x2 = 0;//线条终点X坐标
		this.y2 = 0;//线条终点Y坐标

		this.rotation = 0;//旋转角度
		this.lineWidth = 1;//线条粗细

		this.strokeStyle = 'rgba(0,0,0,1)';//直线的描边颜色
		 
		Object.assign(this, options);//将实例化的参数覆盖默认参数
		
		return this;//返回当前对象，以实现链式调用
	}

	render(context) {
		let { x, y, x1, y1, x2, y2, lineWidth, strokeStyle, rotation } = this;
		context.save();
		context.translate(x, y);
		context.rotate(rotation);
		context.lineWidth = lineWidth;
		context.strokeStyle = strokeStyle;
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
		context.restore();
		return this;
	}
}


