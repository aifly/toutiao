class Person{
	//private定义私有变量
	private _age:number = 18;
	//public定义公共变量
	public name :string ;
	get age() :number{
		console.log('getter trigger');
		return this._age;
	}
	set age(age:number){
		console.log('setter trigger');
		this._age = age;
	}
	constructor(name:string){
		this.name = name;
	}
}

var p = new Person('畅哥聊技术..');

console.log(p.age);

p.age = 100;



