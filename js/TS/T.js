"use strict";
/*
 * @Author: web_XL
 * @Date: 2019-08-19 22:24:43
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-08-19 22:34:35
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
