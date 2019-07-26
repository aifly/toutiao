var Tween = {
	linear: function (t, b, c, d) {
		return c * t / d + b;
	},
	easeIn: function (t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOut: function (t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeBoth: function (t, b, c, d) {
		if ((t /= d / 2) < 1) {
			return c / 2 * t * t + b;
		}
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInStrong: function (t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutStrong: function (t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeBothStrong: function (t, b, c, d) {
		if ((t /= d / 2) < 1) {
			return c / 2 * t * t * t * t + b;
		}
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	elasticIn: function (t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ((t /= d) == 1) {
			return b + c;
		}
		if (!p) {
			p = d * 0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	elasticOut: function (t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ((t /= d) == 1) {
			return b + c;
		}
		if (!p) {
			p = d * 0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	elasticBoth: function (t, b, c, d, a, p) {
		if (t === 0) {
			return b;
		}
		if ((t /= d / 2) == 2) {
			return b + c;
		}
		if (!p) {
			p = d * (0.3 * 1.5);
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		}
		else {
			var s = p / (2 * Math.PI) * Math.asin(c / a);
		}
		if (t < 1) {
			return - 0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
				Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		}
		return a * Math.pow(2, -10 * (t -= 1)) *
			Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
	},
	backIn: function (t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	backOut: function (t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 2.70158;  //回缩的距离
		}
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	backBoth: function (t, b, c, d, s) {
		if (typeof s == 'undefined') {
			s = 1.70158;
		}
		if ((t /= d / 2) < 1) {
			return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		}
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	bounceIn: function (t, b, c, d) {
		return c - Tween['bounceOut'](d - t, 0, c, d) + b;
	},
	bounceOut: function (t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
		}
		return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
	},
	bounceBoth: function (t, b, c, d) {
		if (t < d / 2) {
			return Tween['bounceIn'](t * 2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
	}
};
 
var util = {
	xTween(props){
		var el = props.el;
		var self = this;
		if (el.xTween) return;
		var duration = props.duration || 400,
			fx = props.fx || 'easeOut',
			cb = props.cb,
			attrs = props.attrs || {};
		var s = props.s
		var beginData = {}, changeData = {};
		var maxDis = 0;
		for (var key in attrs) {
			beginData[key] =self.css(el, key);
			changeData[key] = attrs[key] - beginData[key];
			maxDis = Math.max(Math.abs(changeData[key]), maxDis);
		}
		if (typeof duration == "object") {
			var durationPorps = duration;
			duration = durationPorps.multiple !== undefined ? maxDis * durationPorps.multiple : maxDis * 1.2;
			if (durationPorps.min !== undefined) {
				duration = duration < durationPorps.min ? durationPorps.min : duration;
			}
			if (durationPorps.max !== undefined) {
				duration = duration > durationPorps.max ? durationPorps.max : duration;
			}

		}

		var startTime = Date.now();

		(function startMove() {
			el.xTween = window.requestAnimationFrame(startMove);
			var time = Date.now() - startTime;
			if (time > duration) {
				time = duration;
				window.cancelAnimationFrame(el.xTween);
				el.xTween = null;
			}


			for (var key in attrs) {
				var currentPos = Tween[fx](time, beginData[key], changeData[key], duration, s);
				self.css(el, key, currentPos);
			}

			if (time === duration && typeof cb === 'function') {
				cb.call(el);
			}
		})();
	},
	cssTransform(el, attr, val) {
		el.transform = el.transform || {}
		if (typeof val == "undefined") {
			if (typeof el.transform[attr] == "undefined") {
				switch (attr) {
					case "scale":
					case "scaleX":
					case "scaleY":
						el.transform[attr] = 100;//为了预防小数的精度问题，这里直接转成100
						break;
					default:
						el.transform[attr] = 0;
				}
			}
			return el.transform[attr];
		} else {
			var transformVal = "";el.transform[attr] = Number(val);
			for (var s in el.transform) {
				switch (s) {
					case "rotate":
					case "rotateX":
					case "rotateY":
					case "rotateZ":
					case "skewX":
					case "skewY":
						transformVal += " " + s + "(" + el.transform[s] + "deg)";
						break;
					case "translateX":
					case "translateY":
					case "translateZ":
						transformVal += " " + s + "(" + el.transform[s] + "px)";
						break;
					case "scale":
					case "scaleX":
					case "scaleY":
						transformVal += " " + s + "(" + el.transform[s] / 100 + ")";
						break;
				}
			}
			el.style.WebkitTransform = el.style.transform = transformVal;
		}
	},
	css(element, attr, val) {
		if (attr == "rotate" || attr == "rotateX"
			|| attr == "rotateY" || attr == "rotateZ"
			|| attr == "scale" || attr == "scaleX"
			|| attr == "scaleY" || attr == "skewX"
			|| attr == "skewY" || attr == "translateX"
			|| attr == "translateY" || attr == "translateZ") {
			return this.cssTransform(element, attr, val);
		}
		if (arguments.length == 2) {
			var val = getComputedStyle(element)[attr];
			if (attr == 'opacity') {
				val = Math.round(val * 100);
			}
			return parseFloat(val);
		}
		if (attr == "opacity") {
			element.style.opacity = val / 100;
		} else {
			element.style[attr] = val + "px";
		}
	},
};

util.xTween.stop = function (el) {
	window.cancelAnimationFrame(el.xTween);
	el.xTween = null;
};
