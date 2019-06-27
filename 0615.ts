// function test(num: Number) {//编辑器 会把同一个文件夹的同名变量进行警告
//   console.log(num)
// }
// test(1);

// let list: number[] = [1, 23, 4]
// // 泛型
// let list1: Array<number> = [1, 3, 4]
// console.log(list, list1)

// 元组 Tuple
// let x: [string, number];
// x = ['nihao',1,1] //error
// x = [1,'nihao',1] //error
// x = ['nihao', 1]
// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
// console.log(Color)
// console.log(c)

// enum Color { Red = 1, Green, Blue = '1232' }
// let colorName: string = Color[2];
// console.log(colorName)
// console.log(Color);  // 显示'Green'因为上面代码里它的值是2
// { "1": "Red", "2": "Green", "Red": 1, "Green": 2, "Blue": "1232" }

// Any
// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean
// console.log(notSure)

// 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;

// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// console.log(prettySure)

// let list: any[] = [1, 'e23e3']
// console.log(list)

// Void
// function VoidFunc(): void {
//   console.log('当一个函数没有返回值的时候，它的返回值类型就是void')
// }

// let unusable: void = undefined;//申明一个void类型的变量 只能讲null、undefined赋值给它
// let u: undefined = null  // 很奇怪 设置undefined 和 null 是可以 相互写的 默认情况下null和undefined是所有类型的子类型
// let u1: null = undefined  // 很奇怪 设置undefined 和 null 是可以 相互写的

// console.log(u)

// Never never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回错误的函数 或者是不返回任何东西的函数
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message);
// }

// // 推断的返回值类型为never
// function fail() {
//   return error("Something failed");
// }

// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//   while (true) {
//   }
// }

// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

// 使用object类型，就可以更好的表示像Object.create这样的API。例如：
// declare function create(o: object | null): void;

// function myobj(o: object | string | number): void {
// }

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;

// let someValue: any = "this is a string";
// let someValue: any = '2312';

// let strLength: number = (someValue as string).length;
// function sumMatrix(matrix: number[][]) {
//   var sum = 0;
//   for (var i = 0; i < matrix.length; i++) {
//     var currentRow = matrix[i];
//     for (var i = 0; i < currentRow.length; i++) {
//       sum += currentRow[i];
//     }
//   }

//   return sum;
// }
// sumMatrix([[1231], [3232]])

// for (var i = 0; i < 10; i++) {
//   // (function (i) {
//   //   setTimeout(function () { console.log(i); }, 100 * i)
//   // })(i)
//   setTimeout(function () { console.log(i); }, 100 * i)
// }

// try {
//   throw "oh no!";
// }
// catch (e) {
//   var a = '1'
//   console.log("Oh well.");
// }

// // Error: 'e' doesn't exist here
// console.log(e);

// function foo() {
//   // okay to capture 'a'
//   return a;
// }

// // 不能在'a'被声明前调用'foo'
// // 运行时应该抛出错误
// foo();

// let a; // 和var 不同    let是不具有变量提升的  这也是它出现暂时性死区的原因 

// function f(x) {
//   var x;
//   var x;

//   if (true) {
//     var x;
//   }
// }

// function f(x) {
//   // let x = 100; // error: interferes with parameter declaration
//   // Parameter 'x' implicitly has an 'any' type, but a better type may be inferred from usage
//   // implicitly 隐式的 含蓄的 
// }

// function g() {
//   let x = 100;
//   var x = 100; // error: can't have both declarations of 'x'
// }

// 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
// function f(condition, x) {
//   if (condition) {
//     let x = 100;
//     return x;
//   }

//   return x;
// }

// f(false, 0); // returns 0
// f(true, 0);  // returns 100

// function(a = 1) {
//   var a = 1
// }

// 块级作用域变量的获取
// 在我们最初谈及获取用var声明的变量时，我们简略地探究了一下在获取到了变量之后它的行为是怎样的。 直观地讲，每次进入一个作用域时，它创建了一个变量的 环境。 就算作用域内代码已经执行完毕，这个环境与其捕获的变量依然存在。


// function theCityThatAlwaysSleeps() {
//   let getCity;

//   if (true) {
//       let city = "Seattle";
//       getCity = function() {
//           return city;
//       }
//   }

//   return getCity();
// }
// 因为我们已经在city的环境里获取到了city，所以就算if语句执行结束后我们仍然可以访问它。

// 回想一下前面setTimeout的例子，我们最后需要使用立即执行的函数表达式来获取每次for循环迭代里的状态。 实际上，我们做的是为获取到的变量创建了一个新的变量环境。 这样做挺痛苦的，但是幸运的是，你不必在TypeScript里这样做了。

// let o = {
//   a: "foo",
//   b: 12,
//   c: "bar"
// };
// // let { a, b } = o;
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
// console.log('passthrough', passthrough)

// let { a: newName1, b: newName2 } = o;
// console.log(newName1, newName2)
// 这里的语法开始变得混乱。 你可以将 a: newName1 读做 "a 作为 newName1"。 方向是从左到右，好像你写成了以下样子：
// let newName1 = o.a;
// let newName2 = o.b;

// 令人困惑的是，这里的冒号不是指示类型的。 如果你想指定它的类型， 仍然需要在其后写上完整的模式。
// let { a: new1, b: new2 }: { a: string, b: number } = o;
// console.log(new1)
// console.log(new2)

// 默认值
// 默认值可以让你在属性为 undefined 时使用缺省值：
// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//   let { a: xl, b: nihao = 1001 } = wholeObject;
//   console.log(xl)
//   console.log(nihao)
// }

// keepWholeObject({ a: 'nihao' })
// 现在，即使 b 为 undefined ， keepWholeObject 函数的变量 wholeObject 的属性 a 和 b 都会有值。

// 函数声明
// type C = { a: string, b?: number }
// function f({ a, b }: C): void {
//   console.log(a)
//   console.log(b)
//   // ...
// }
// f({ a: 'string' })

// 通常情况下更多的是指定默认值，解构默认值有些棘手。 首先，你需要在默认值之前设置其格式。
// function f({ a = "", b = 0 } = {}): void {
//   console.log(a, b)
//   // ...
// }
// f();

// 其次，你需要知道在解构属性上给予一个默认或可选的属性用来替换主初始化列表。 要知道 C 的定义有一个 b 可选属性：
// function f({ a, b = 0 } = { a: "" }): void {
//   // ...
// }
// f({ a: "yes" }); // ok, default b = 0
// f(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument

// 要小心使用解构。 从前面的例子可以看出，就算是最简单的解构表达式也是难以理解的。 尤其当存在深层嵌套解构的时候，就算这时没有堆叠在一起的重命名，默认值和类型注解，也是令人难以理解的。 解构表达式要尽量保持小而简单。 你自己也可以直接使用解构将会生成的赋值表达式。

// 展开
// 展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。 例如：
// let first = [1, 2];
// let second = [3, 4];
// let bothPlus = [0, ...first, ...second, 5];
// 这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。

// 你还可以展开对象：

// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { ...defaults, food: "rich" };

// search的值为{ food: "rich", price: "$$", ambiance: "noisy" }。 对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性。 因此，如果我们修改上面的例子，在结尾处进行展开的话：
// 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：
// class C {
//   p = 12;
//   m() {
//   }
// }
// let c = new C();
// console.log(c)
// let clone = { ...c };
// console.log(clone)
// clone.p; // ok
// clone.m(); // error!

// 接口初探


// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// 类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。 然而，有些时候TypeScript却并不会这么宽松，我们下面会稍做讲解。

// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj);
// }

// let myObj = {size: 10, label: "Size 10 Object"};
// printLabel(myObj);

// LabelledValue接口就好比一个名字，用来描述上面例子里的要求。 它代表了有一个 label属性且类型为string的对象。 需要注意的是，我们在这里并不能像在其它语言里一样，说传给 printLabel的对象实现了这个接口。我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。

// 还有一点值得提的是，类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。


// 可选属性
// 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。

// 下面是应用了“option bags”的例子：

// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   console.log('newSquare', newSquare)
//   return newSquare;
// }

// let mySquare = createSquare({ color: "black" });
// let mySquare1 = createSquare({ area: 100 });

// 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。

// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误。 比如，我们故意将 createSquare里的color属性名拼错，就会得到一个错误提示：

// question
// interface SquareConfig {  
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = { color: "white", area: 100 };
//   if (config.color) {
//     // Error: Property 'clor' does not exist on type 'SquareConfig'
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   console.log('config', config)
//   return newSquare;
// }
// let obj = { width: 1, area: 1 }
// let mySquare = createSquare({ color: "black" });
// let mySquare1 = createSquare(obj);
// let mySquare2 = createSquare({ width: 1, area: 1 });

// 只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:

// interface Point {
//   readonly x: number;
//   readonly y: number;
// }
// 你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
// let a: number[] = [1, 2, 3, 4];
// // let astr: ReadonlyArray<string> = ['wqe', 'ew', 'fdf']
// // astr[0] = 1
// let ro: ReadonlyArray<number> = a;
// // ro[0] = 12; // error!
// // ro.push(5); // error!
// // ro.length = 100; // error!
// // a = ro; // error!

// // 上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
// a = ro as number[];
// console.log('ro', ro)
// console.log('a', a)

// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

// 额外的属性检查
// 我们在第一个例子里使用了接口，TypeScript让我们传入{ size: number; label: string; }到仅期望得到{ label: string; }的函数里。 我们已经学过了可选属性，并且知道他们在“option bags”模式里很有用。

// 然而，天真地将这两者结合的话就会像在JavaScript里那样搬起石头砸自己的脚。 比如，拿 createSquare例子来说：
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   console.log(config)
//   return
//   // ...
// }

// let obj = { colour: "red", width: 100 }
// // let mySquare = createSquare({ colour: "red", width: 100 });
// let mySquare1 = createSquare(obj);

// // 注意传入createSquare的参数拼写为colour而不是color。 在JavaScript里，这会默默地失败。

// // 你可能会争辩这个程序已经正确地类型化了，因为width属性是兼容的，不存在color属性，而且额外的colour属性是无意义的。

// // 然而，TypeScript会认为这段代码可能存在bug。 对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

// // 绕开这些检查非常简单。 最简便的方法是使用类型断言：
// let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 然而，最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。 如果 SquareConfig带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: number]: any;
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//   console.log(config)
//   return
//   // ...
// }

// let obj = { colour: "red", width: 100 }
// 方法一 断言
// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

// 方法二 赋值给一个变量
// let squareOptions = { colour: "red", width: 100 };
// let mySquare = createSquare(squareOptions);

// 方法三 SquareConfig接口 添加一个字符串所以签名


// 我们稍后会讲到索引签名，但在这我们要表示的是SquareConfig可以有任意数量的属性，并且只要它们不是color和width，那么就无所谓它们的类型是什么。

// 还有最后一种跳过这些检查的方式，这可能会让你感到惊讶，它就是将这个对象赋值给一个另一个变量： 因为 squareOptions不会经过额外属性检查，所以编译器不会报错。

// 要留意，在像上面一样的简单代码里，你可能不应该去绕开这些检查。 对于包含方法和内部状态的复杂对象字面量来讲，你可能需要使用这些技巧，但是大部额外属性检查错误是真正的bug。 就是说你遇到了额外类型检查出的错误，比如“option bags”，你应该去审查一下你的类型声明。 在这里，如果支持传入 color或colour属性到createSquare，你应该修改SquareConfig定义来体现出这一点。


// 函数类型
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface SearchFunc {
  (source: string, subString: string): boolean;
  // 参数列表 返回值
}
// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  // String prototype 里面的方法  返回的是第一个被找到的元素下标 如果没找到返回-1

  console.log(result)
  // return result > -1;
  return result > -1;

}
mySearch('ewqe', 'wq')
mySearch('ewqe', 'l')

// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量。 函数的返回值类型是通过其返回值推断出来的（此例是 false和true）。 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与 SearchFunc接口中的定义不匹配。
// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

// 可索引的类型
// 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。 让我们看一个例子
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
// 上面例子里，我们定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。

// TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}













