"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function foo(fooObj: { name: string }) {
//   console.log(fooObj.name)
// }
function foo(fooObj) {
    console.log(fooObj.name);
}
var obj = {
    name: 'XL',
    age: 24
};
foo(obj);
var point = { x: 1, y: 2 };
// point.x = 2  // Cannot assign to 'x' because it is a read-only property
// 泛型只读数组
var a = [1, 3, 32, 3];
var arr = a;
// arr[0] = 1 // 类型“readonly number[]”中的索引签名仅允许读取  报错
// a = arr // 两者类型不一样 无法直接赋值
a = arr; // 使用类型断言
function getPeron(per) {
}
getPeron({ name: 'XL', age: 23 }); // 对象自变量的形式传入 会有额外的属性检查 age 不在 Person中
var func;
func = function (src, sub) {
    var result = src.search(sub); // 返回第一个匹配结果的下标 没有则返回-1
    return result > -1;
};
var strArr = ['x', 'l'];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = null;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square1 = {
    color: 'wq',
    penWidth: 231,
    name: 'xl'
};
var square2 = {};
square2.color = 'red';
function getCount() {
    // 方法1
    var counter = (function (star) {
        // return star.toString() // toString 返回的是一个对象类型
        return 'xl';
    });
    // 方法2
    // let counter: Counter
    // counter = (function (star: number) {
    //   // return star.toString() // toString 返回的是一个对象类型
    //   return 'xl'
    // }) as Counter
    counter.interval = 1;
    counter.reset = function () {
    };
    return counter;
}
// let c = getCount()
// c(10)
// 接口继承类
var Control = /** @class */ (function () {
    function Control(state) {
        this.state = state;
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
    };
    return Button;
}(Control));
// 当 接口继承了一个类 而且该类有自己的私有属性
// 那么这个 接口被其他类实现是 该类 需要先继承 原始类
// class Button1 implements selectControl {//报错
//   //  Property 'state' is missing in type 'Button1' but required in type 'selectControl'
//   select() {
//   }
// }
