//矩形类
class Rect {
	constructor(options) {
		this.x = 0;//x坐标
		this.y = 0;//y坐标
		this.w = 100;//半径
		this.h = 50;//半径
		this.strokeStyle = 'rgba(0,0,0,0)';//的描边颜色
		this.fillStyle = '#abcdef';//填充颜色
		this.opacity = 1;//透明度
		Object.assign(this, options);//将实例化的参数覆盖默认参数
		return this;//返回当前对象，以实现链式调用
	}

	render(context, pointX, pointY) {
		let { x, y, w,h, scaleX, scaleY, fillStyle, strokeStyle, opacity } = this;
		context.save();
		context.strokeStyle = strokeStyle;
		context.fillStyle = fillStyle;
		context.translate(x, y);
		context.globalAlpha = opacity;
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(w,0);
		context.lineTo(w,h);
		context.lineTo(0,h);
		context.closePath();
		if (pointX && pointY) {
			this.isPointInPath = context.isPointInPath(pointX, pointY);
		}
		context.fill();
		context.stroke();
		context.restore();
		return this;
	}
}


