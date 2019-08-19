/*
 * @Author: web_XL
 * @Date: 2019-08-05 21:50:11
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-08-11 22:11:59
 */
interface FooValue {
  name: string
}
// function foo(fooObj: { name: string }) {
//   console.log(fooObj.name)
// }
function foo(fooObj: FooValue) {
  console.log(fooObj.name)
}
let obj = {
  name: 'XL',
  age: 24
}
foo(obj)



// --------
// 可选属性
// interface Square {
//   color: string,
//   area: number
// }
// interface SquareConfig {
//   color?: string, // 可选属性
//   width?: number
// }
// function createSquare(config: SquareConfig): Square {
//   let res = { color: 'red', area: 100 }
//   if (config.color) {
//     res.color = config.color
//   }
//   if (config.width !== void 0) {
//     res.area = config.width * config.width
//   }
//   return res// 该函数接收SquareConfig类型的参数 返回 Square类型的数据
// }

// createSquare({ color: 'yellow', width: 32 })


// -------
// 只读属性
interface Point {
  readonly x: number // 只读属性创建之后不能被修改
  readonly y: number
}

let point: Point = { x: 1, y: 2 }
// point.x = 2  // Cannot assign to 'x' because it is a read-only property

// 泛型只读数组
let a: number[] = [1, 3, 32, 3]
let arr: ReadonlyArray<number> = a
// arr[0] = 1 // 类型“readonly number[]”中的索引签名仅允许读取  报错
// a = arr // 两者类型不一样 无法直接赋值
a = arr as number[];// 使用类型断言

// const 变量
// readonly 属性

// 额外属性检查
interface Person {
  name: string

  [propName: string]: any // 方法二添加 索引签名
}
function getPeron(per: Person) {
}
getPeron({ name: 'XL', age: 23 }) // 对象自变量的形式传入 会有额外的属性检查 age 不在 Person中

// 两种方式绕过
// 方法1
// let obj1 = { name: 'XL', age: 23 }
// getPeron(obj)



// 接口除了描述带有属性的对象 还可以描述函数类型
interface SearchFunc {
  (source: string, substring: string): boolean
}
let func: SearchFunc
func = function (src, sub): boolean {
  let result = src.search(sub) // 返回第一个匹配结果的下标 没有则返回-1
  return result > -1
}

// 索引签名-------

interface StringArr {
  [index: number]: string
}
let strArr: StringArr = ['x', 'l']

// 接口描述类------
interface ClockInterface {// 实例类型
  currentTime: Date | null
  setTime(d: Date): void
}

class Clock implements ClockInterface { // implements 实现接口
  currentTime: Date | null
  constructor(h: number, m: number) {
    this.currentTime = null
  }
  setTime(d: Date) {
    this.currentTime = d
  }
}

// 接口的相互继承

interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}

interface Square1 extends Shape, PenStroke {
  name: string
}

let square1: Square1 = {
  color: 'wq',
  penWidth: 231,
  name: 'xl'
}

let square2 = {} as Square1
square2.color = 'red'


// 接口 混合类型
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCount(): Counter {
  // 方法1
  let counter = (function (star: number) {
    // return star.toString() // toString 返回的是一个对象类型
    return 'xl'
  }) as Counter

  // 方法2
  // let counter: Counter
  // counter = (function (star: number) {
  //   // return star.toString() // toString 返回的是一个对象类型
  //   return 'xl'
  // }) as Counter

  counter.interval = 1
  counter.reset = function () {

  }

  return counter

}
// let c = getCount()
// c(10)

// 接口继承类
class Control {
  private state: Boolean
  constructor(state: Boolean) {
    this.state = state
  }
}

interface selectControl extends Control {
  select(): any
}

class Button extends Control implements selectControl {
  select() {

  }
}
// 当 接口继承了一个类 而且该类有自己的私有属性
// 那么这个 接口被其他类实现是 该类 需要先继承 原始类
// class Button1 implements selectControl {//报错
//   //  Property 'state' is missing in type 'Button1' but required in type 'selectControl'
//   select() {

//   }
// }