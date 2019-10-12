"use strict";
var anything = '1234';
var anything1 = 1234;
function alertName() {
    alert('My name is Tom');
}
//通过void来定义的变量
var unusable = undefined;
var unusable1 = null;
var num1 = unusable; //报错
var num2 = unusable1;
var un = undefined;
var num3 = un; //不报错
