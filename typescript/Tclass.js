var Person1 = /** @class */ (function () {
    function Person1() {
        this.list = [];
    }
    Person1.prototype.add = function (val) {
        this.list.push(val);
        return this;
    };
    Person1.prototype.delete = function (index) {
    };
    return Person1;
}());
