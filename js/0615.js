"use strict";
// function test(num: Number) {//编辑器 会把同一个文件夹的同名变量进行警告
//   console.log(num)
// }
// test(1);
// interface:接口只声明成员 方法，不做实现。
// class:类声明并实现方法。
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
// 你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }
// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//       this.currentTime = d;
//   }
//   constructor(h: number, m: number) { }
// }
