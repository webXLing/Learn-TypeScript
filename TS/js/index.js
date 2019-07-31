"use strict";
var decLiteral = 20; // 10进制
var hexLiteral = 0x14; // 16进制
var bingryLiteral = 20; // 2进制
var octalLiteral = 20; // 8进制
var list = [1, 2, 3];
var list1 = [1, 2, 3]; // 数组泛型
// 元组 Tuple 
// 已知元素类型 和数量的 数组
var x = ['', 1];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
console.log(Color['Red']); // 1
console.log(Color[0]); // Red
// any  任何类型
var anyArr = [1, 'sada'];
//void  没有任何类型
function voidFn(str) {
    console.log(str);
}
// let unusable: void = 'str' // 不能将类型“"str"”分配给类型“void”
var unusable = undefined;
// 默认情况下null和undefined是所有类型的子类型
var num = 3;
// num = null // 开启 strictNullChecks  null和undefined只能赋值给void和它们各自
// 联合类型
var num1 = 3;
num1 = null;
// Never never类型是任何类型的子类型 
// 那些总是会抛出异常或根本就不会有返回值的函数表达式 或箭头函数表达式的返回值类型
function err(msg) {
    throw new Error(msg);
}
function fail(msg) {
    return err(msg);
}
fail('请求失败');
create({ a: 1 });
// create(1)  // 类型“1”的参数不能赋给类型“object”的参数
// 断言
var str = true;
var strnum = str.length;
var strnum1 = str.length;
