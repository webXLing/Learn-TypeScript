let decLiteral: number = 20; // 10进制
let hexLiteral: number = 0x14; // 16进制
let bingryLiteral: number = 0b10100; // 2进制
let octalLiteral: number = 0o24;  // 8进制

let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3] // 数组泛型

// 元组 Tuple 
// 已知元素类型 和数量的 数组
let x: [string, number] = ['', 1]

// 枚举
enum Color {
  Red = 1,   // 默认从0 开始
  Blue,
  Green
}
console.log(Color['Red']) // 1
console.log(Color[0])  // Red

// any  任何类型
let anyArr: any[] = [1, 'sada']

//void  没有任何类型
function voidFn(str: string): void {
  console.log(str)
}

// let unusable: void = 'str' // 不能将类型“"str"”分配给类型“void”
let unusable: void = undefined

// 默认情况下null和undefined是所有类型的子类型
let num: number = 3
// num = null // 开启 strictNullChecks  null和undefined只能赋值给void和它们各自

// 联合类型
let num1: number | null = 3
num1 = null


// Never never类型是任何类型的子类型 
// 那些总是会抛出异常或根本就不会有返回值的函数表达式 或箭头函数表达式的返回值类型
function err(msg: string): never {
  throw new Error(msg)
}
function fail(msg: string) {
  return err(msg)
}
fail('请求失败')

// object
declare function create(o: object): void
create({ a: 1 })
// create(1)  // 类型“1”的参数不能赋给类型“object”的参数

// 断言
let str: any = true
let strnum: number = (str as string).length
let strnum1: number = (<string>str).length


