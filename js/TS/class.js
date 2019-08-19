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
/*
 * @Author: web_XL
 * @Date: 2019-08-11 22:13:10
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-08-19 22:35:07
 */
// 公共 私有 受保护 只读
var Animal = /** @class */ (function () {
    function Animal(name, age, job, act) {
        if (age === void 0) { age = 24; }
        if (job === void 0) { job = 'web'; }
        this.name = name;
        this.age = age;
        this.job = job;
        this.act = act;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal: " + this.name + ",move " + distance);
    };
    // 静态属性 Animal.type
    Animal.type = 'class';
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, job, act) {
        if (age === void 0) { age = 24; }
        if (job === void 0) { job = 'web'; }
        return _super.call(this, name, age, job, act) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 10; }
        console.log("Dog: " + this.name + ",move " + distance);
        _super.prototype.move.call(this);
    };
    return Dog;
}(Animal));
var animal = new Animal('Animal', 23, 'web', '2');
// animal.act // 可读
// animal.act = '' // 不能修改
animal.move();
var dog = new Dog('Dog', 23, 'web', '2');
dog.move();
// dog.age  只能在类“Animal”中访问
// dog.job 只能在类“Animal”及其子类中访问
// 如果给constructor 加上 protected 那么该类只能在派生类中访问
var Test1 = /** @class */ (function () {
    function Test1() {
        console.log('Test1');
    }
    return Test1;
}());
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        return _super.call(this) || this;
    }
    return Test2;
}(Test1));
// let test1 = new Test1() // 如果给constructor 加上 protected 那么该类只能在派生类中访问
var test2 = new Test2();
/**
 * 存取器
 *  */
var passcode = 'passCode1';
var Test3 = /** @class */ (function () {
    function Test3(name) {
        this._name = name;
    }
    Object.defineProperty(Test3.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (passcode && passcode === 'passCode') {
                this._name = newName;
            }
            else {
                console.log('验证失败，无法设置');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Test3;
}());
var test3 = new Test3('XL');
test3.Name = 'XL?';
if (test3.Name) {
    console.log(test3.Name);
}
/**
 * 静态属性
 *  */ 
