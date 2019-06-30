//小球类
class Ball {
	constructor(options) {
		this.x = 0;//小球x坐标
		this.y = 0;//小球y坐标
		this.r = 20;//小球半径
		this.scaleX = 1;//小球x轴的缩放
		this.scaleY = 1;//小球y轴的缩放
		this.strokeStyle = 'rgba(0,0,0,0)';//小球的描边颜色
		this.fillStyle = '#abcdef';//小球填充颜色
		this.opacity = 1;//小球透明度

		this.g  = 3;//小于的重力加速度

		this.vx = 0;
		this.vy = 0;
		Object.assign(this, options);//将实例化的参数覆盖默认参数

		return this;//返回当前对象，以实现链式调用
	}

	render(context,pointX,pointY) {
		let { x, y, r, scaleX, scaleY, fillStyle, strokeStyle, opacity} = this;
		context.save();
		context.strokeStyle = strokeStyle;
		context.fillStyle = fillStyle;
		context.translate(x, y);
		context.globalAlpha = opacity;
		context.scale(scaleX, scaleY);
		context.beginPath();
		context.arc(0, 0, r, 0, Math.PI * 2, false);
		if(pointX && pointY){
			this.isPointInPath = context.isPointInPath(pointX,pointY);
		}
		context.fill();
		context.stroke();
		context.restore();

		return this;
	}

}


