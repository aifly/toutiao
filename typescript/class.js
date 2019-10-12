var Person = /** @class */ (function () {
    function Person(name) {
        //private定义私有变量
        this._age = 18;
        this.name = name;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            console.log('getter trigger');
            return this._age;
        },
        set: function (age) {
            console.log('setter trigger');
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());

var p = new Person('畅哥聊技术..');

console.log(p.age);
p.age = 100;
