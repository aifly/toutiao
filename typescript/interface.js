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
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.walk = function () {
    };
    return Animal;
}());
