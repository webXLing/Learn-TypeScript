"use strict";
/*
 * @Author: web_XL
 * @Date: 2019-08-19 22:24:43
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-08-19 23:01:43
 */
//  泛型
function loginIdentity(arg) {
    // console.log(arg.length) // Property 'length' does not exist on type 'T'
    if (typeof arg === 'string') {
        console.log(arg.length);
    }
    return arg;
}
function loginIdentity1(arg) {
    console.log(arg.length); // Property 'length' does not exist on type 'T'
    return arg;
}
loginIdentity1(['we']);
function identify(arg) {
    return arg;
}
var output = identify('is');
var output1 = identify;
// 或者 对象自变量的形式
var output2 = identify;
var output3 = identify; // 泛型接口
var output4 = identify; // 泛型接口
function getProperty(obj, key) {
    return obj[key];
}
getProperty({ a: 1, b: 2 }, 'b');
// getProperty({ a: 1, b: 2 }, 'c') // 没有c
// 合并两个对象
// function extend<T, U>(first: Test1, second: U): T & U {
//   let res = {} as T & U
//   for (let id1 in first) {
//     res[id1] = first[id1] as any
//   }
//   for (let id in second) {
//     if (!res.hasOwnProperty(id)) {
//       res[id] = first[id] as any
//     }
//   }
//   return res
// }
