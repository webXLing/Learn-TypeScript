/*
 * @Author: web_XL
 * @Date: 2019-08-11 22:13:10
 * @Last Modified by: web_XL
 * @Last Modified time: 2019-08-19 22:35:07
 */
// 公共 私有 受保护 只读
class Animal {
  // 静态属性 Animal.type
  static type = 'class'
  // 下面都是 成员属性
  name: string // 默认为public 类中 类外都能访问
  private age: number // 只能在类“Animal”中访问
  protected job: string // 只能在类“Animal”及其子类中访问
  readonly act: string //只读属性必须在声明时或构造函数里被初始化
  constructor(name: string, age: number = 24, job: string = 'web', act: string) {
    this.name = name
    this.age = age
    this.job = job
    this.act = act
  }

  move(distance: number = 0) {
    console.log(`Animal: ${this.name},move ${distance}`)
  }
}
class Dog extends Animal {
  constructor(name: string, age: number = 24, job: string = 'web', act: string) {
    super(name, age, job, act)
  }

  move(distance: number = 10) {
    console.log(`Dog: ${this.name},move ${distance}`)
    super.move()
  }
}

let animal = new Animal('Animal', 23, 'web', '2')
// animal.act // 可读
// animal.act = '' // 不能修改
animal.move()
let dog = new Dog('Dog', 23, 'web', '2')
dog.move()
// dog.age  只能在类“Animal”中访问
// dog.job 只能在类“Animal”及其子类中访问

// 如果给constructor 加上 protected 那么该类只能在派生类中访问
class Test1 {
  protected constructor() {
    console.log('Test1')
  }
}
class Test2 extends Test1 {
  constructor() {
    super()
  }
}
// let test1 = new Test1() // 如果给constructor 加上 protected 那么该类只能在派生类中访问
let test2 = new Test2()



/**
 * 存取器
 *  */
let passcode = 'passCode1'
class Test3 {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  get Name() {
    return this._name
  }

  set Name(newName: string) {
    if (passcode && passcode === 'passCode') {
      this._name = newName
    } else {
      console.log('验证失败，无法设置')
    }
  }
}

let test3 = new Test3('XL')
test3.Name = 'XL?'
if (test3.Name) {
  console.log(test3.Name)
}

/**
 * 静态属性
 *  */