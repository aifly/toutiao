/* interface IPerson {
	firstName: string;
	lastName: string;
	age?:number
}

function greeter(person: IPerson) {
	person.age =123;
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
 */

interface IAnimal{
	walk():void;
	weight:number;
}

class Animal implements IAnimal{

    public name:string;
	private age:number;

	public weight:number;
	
	constructor(name:string,age:number){
		this.name = name;
		this.age = age;
	}      
	walk(){
		
	}
}

