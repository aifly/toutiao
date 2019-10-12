function Path(path: string) {
	return function (target: Function) {
		!target.prototype.$Meta && (target.prototype.$Meta = {})
		target.prototype.$Meta.baseUrl = path;
	};
}

@Path('/hello')
class HelloService {
	constructor() { }
}