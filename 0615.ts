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
// interface SearchFunc {
//   (source: string, subString: string): boolean;
//   // 参数列表 返回值
// }
// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。

// let mySearch: SearchFunc;
// mySearch = function (source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：

// let mySearch: SearchFunc;
// mySearch = function (src: string, sub: string): boolean {
//   let result = src.search(sub);
//   // String prototype 里面的方法  返回的是第一个被找到的元素下标 如果没找到返回-1

//   console.log(result)
//   // return result > -1;
//   return result > -1;

// }
// mySearch('ewqe', 'wq')
// mySearch('ewqe', 'l')

// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。 如果你不想指定类型，TypeScript的类型系统会推断出参数类型，因为函数直接赋值给了 SearchFunc类型变量。 函数的返回值类型是通过其返回值推断出来的（此例是 false和true）。 如果让这个函数返回数字或字符串，类型检查器会警告我们函数的返回值类型与 SearchFunc接口中的定义不匹配。
// let mySearch: SearchFunc;
// mySearch = function(src, sub) {
//     let result = src.search(sub);
//     return result > -1;
// }

// 可索引的类型
// 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。 让我们看一个例子
// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];
// 上面例子里，我们定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用 number去索引StringArray时会得到string类型的返回值。

// TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

// class Animal {
//   // constructor(){
//   //   let name: string;
//   // }
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

// 字符串索引签名能够很好的描述dictionary模式，并且它们也会确保所有属性与其返回值类型相匹配。 因为字符串索引声明了 obj.property和obj["property"]两种形式都可以。 下面的例子里， name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：
// interface NumberDictionary {
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
//   // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
//   name1: number
// }
// let arr: NumberDictionary
// arr = [1, 1]
// console.log('arr', arr)
// 最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：
// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// console.log('myArray')
// myArray[2] = "Mallory"; // error!
// 你不能设置myArray[2]，因为索引签名是只读的

// 类类型
// 实现接口
// 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
// interface ClockInterface {
//   currentTime: Date;
// }

// interface:接口只声明成员 方法，不做实现。

// class:类声明并实现方法。


// class Clock implements ClockInterface {
//   currentTime: Date;
//   constructor(h: number, m: number) {  }
// }
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

// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

// 类静态部分与实例部分的区别
// 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：
// interface ClockConstructor {
//   new(hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//   // currentTime: Date;
//   constructor(h: number, m: number) { }
// }

// interface Myinter {
//   name: string
// }

// class Myclass implements Myinter {
//   constructor() {
//     name = ''
//   }
// }

// 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

// 因此，我们应该直接操作类的静态部分。 看下面的例子，我们定义了两个接口， ClockConstructor为构造函数所用和ClockInterface为实例方法所用。 为了方便我们定义一个构造函数 createClock，它用传入的类型创建实例。

// interface ClockConstructor {
//   new(hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//   tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//   return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log("beep beep");
//   }
// }
// class AnalogClock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log("tick tock");
//   }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// 因为createClock的第一个参数是ClockConstructor类型，在createClock(AnalogClock, 7, 32)里，会检查AnalogClock是否符合构造函数签名。

// 继承接口
// 和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
// interface Shape {
//   color: string;
// }

// interface Square extends Shape {
//   sideLength: number;
//   setTime: Array<any>;
//   setTime1: Array<number>;

// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.setTime = [1, ''];
// square.setTime1 = [1];

// 一个接口可以继承多个接口，创建出多个接口的合成接口。

// interface Shape {
//   color: string;
// }

// interface PenStroke {
//   penWidth: number;
// }

// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }

// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// square.penWidth = 5.0;

// 混合类型
// 先前我们提过，接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。

// 一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) { };
//   counter.interval = 123;
//   counter.reset = function () { };
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// 在使用JavaScript第三方库的时候，你可能需要像上面那样去完整地定义类型。

// 类
// 下面看一个使用类的例子：

// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// let greeter = new Greeter("world");

// class Animal {
//   constructor(theName: string) {
//     this.name = theName;
//     console.log('Animal constructor')
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters);
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) { super(name); }
//   move(distanceInMeters = 45) {
//     console.log("Galloping...");
//     super.move(distanceInMeters);
//   }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");




// sam.move(); // 5
// tom.move(34); // 34


// 这个例子展示了一些上面没有提到的特性。 这一次，我们使用 extends关键字创建了 Animal的两个子类： Horse和 Snake。

// 与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性之前，我们 一定要调用 super()。 这个是TypeScript强制执行的一条重要规则。

// 这个例子演示了如何在子类里可以重写父类的方法。 Snake类和 Horse类都创建了 move方法，它们重写了从 Animal继承来的 move方法，使得 move方法根据不同的类而具有不同的功能。 注意，即使 tom被声明为 Animal类型，但因为它的值是 Horse，调用 tom.move(34)时，它会调用 Horse里重写的方法：

// 公共，私有与受保护的修饰符
// 默认为 public
// 在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public来做修饰；例如，C#要求必须明确地使用 public指定成员是可见的。 在TypeScript里，成员都默认为 public。

// 你也可以明确的将一个成员标记成 public。 我们可以用下面的方式来重写上面的 Animal类：
// class Animal {
//   public name: string;
//   public constructor(theName: string) { this.name = theName; }
//   public move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }
// class Animal1 {
//   private name: string;
//   public constructor(theName: string) { this.name = theName; }
//   public move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// // let an1: Animal = new Animal('an1')
// // console.log(an1.name)

// let an2: Animal = new Animal1('a2')
// console.log(an2.name)

// 理解 private
// 当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：
// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = '1';
//     console.log(this.name)
//   }
// }

// new Animal("Cat").name; // 错误: 'name' 是私有的.
// TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。


// 然而，当我们比较带有 private或 protected成员的类型的时候，情况就不同了。 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。

// 下面来看一个例子，更好地说明了这一点：
// class Animal {
//   private name: string;
//   constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animal {
//   constructor() { super("Rhino"); }
// }

// class Employee {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//     console.log('this.name Employee', this.name)
//   }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// // console.log(employee.name)

// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
// 这个例子中有 Animal和 Rhino两个类， Rhino是 Animal类的子类。 还有一个 Employee类，其类型看上去与 Animal是相同的。 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。 因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，因此它们是兼容的。 然而 Employee却不是这样。当把 Employee赋值给 Animal的时候，得到一个错误，说它们的类型不兼容。 尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。


// 理解 protected
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。例如：
// class Person {
//   protected name: string;
//   constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department;
//   }

//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误

// class Person {
//   private name: string;
//   constructor(name: string) { this.name = name; }
// }
// class Teacher extends Person {
//   constructor(name: string) {
//     super(name)
//   }
//   getname() {
//     console.log('this.name', this.name)
//   }
// }
// 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为 Employee是由 Person派生而来的。


// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，
// class Person {
//   protected name: string;
//   protected constructor(theName: string) { this.name = theName; }
// }

// Employee 能够继承 Person
// class Employee extends Person {
//   private department: string;

//   constructor(name: string, department: string) {
//     super(name);
//     this.department = department;
//   }

//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//   }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

// readonly修饰符
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
// console.log('dad.name', dad.name)

// 参数属性
// 在上面的例子中，我们必须在Octopus类里定义一个只读成员 name和一个参数为 theName的构造函数，并且立刻将 theName的值赋给 name，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 Octopus类的修改版，使用了参数属性：
// class Octopus {
//   readonly numberOfLegs: number = 8;
//   theName: string
//   constructor(readonly name: string) {
//     this.theName = name
//   }
// }

// 注意看我们是如何舍弃了 theName，仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。

// 参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。

// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

// 下面来看如何把一个简单的类改写成使用 get和 set。 首先，我们从一个没有使用存取器的例子开始。
// class Employee {
//   fullName: string;
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   console.log(employee.fullName);
// }
// 我们可以随意的设置 fullName，这是非常方便的，但是这也可能会带来麻烦。

// 下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。 我们把对 fullName的直接访问改成了可以检查密码的 set方法。 我们也加了一个 get方法，让上面的例子仍然可以工作。
// let passcode = "secret passcode";

// class Employee {
//   private _fullName: string = '';
//   xlname: string
//   constructor() {
//     this.xlname = 'xl'
//   }

//   get fullName(): string {
//     return this._fullName;
//   }

//   getName() {
//     console.log('getName')
//   }

//   set fullName(newName: string) {
//     if (passcode && passcode == "secret passcode") {
//       this._fullName = newName;
//     }
//     else {
//       console.log("Error: Unauthorized update of employee!");
//     }
//   }
// }

// let employee = new Employee();
// console.log(employee)
// employee.fullName = "Bob Smith";
// console.log(employee)
// if (employee.fullName) {
//   // alert(employee.fullName);
// }
// 我们可以修改一下密码，来验证一下存取器是否是工作的。当密码不对时，会提示我们没有权限去修改员工。

// 对于存取器有下面几点需要注意的：

// 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。

// 静态属性
// 到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 origin前面加上类名。 如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。

// class Grid {
//   static origin = { x: 0, y: 0 };
//   calculateDistanceFromOrigin(point: { x: number; y: number; }) {
//     let xDist = (point.x - Grid.origin.x);
//     let yDist = (point.y - Grid.origin.y);
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor(public scale: number) { }

//   // constructor(public scale: number) { }
//   // ==
//   // public scale: number = 0
//   // constructor(scale: number) {

//   // }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale
// console.log('scale', grid2.scale)
// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// 抽象类
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log('roaming the earch...');
//   }
// }

// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
// abstract class Department {

//   constructor(public name: string) {
//   }

//   printName(): void {
//     console.log('Department name: ' + this.name);
//   }

//   abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//   constructor() {
//     super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }

//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.');
//   }

//   generateReports(): void {
//     console.log('Generating accounting reports...');
//   }
// }

// let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 高级技巧
// 构造函数
// 当你在TypeScript里声明了一个类的时候，实际上同时声明了很多东西。 首先就是类的 实例的类型。
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());
// 这里，我们写了 let greeter: Greeter，意思是 Greeter类的实例的类型是 Greeter。 这对于用过其它面向对象语言的程序员来讲已经是老习惯了。

// 我们也创建了一个叫做 构造函数的值。 这个函数会在我们使用 new创建类实例的时候被调用。 下面我们来看看，上面的代码被编译成JavaScript后是什么样子的：

// let Greeter = (function () {
//   function Greeter(message) {
//     this.greeting = message;
//   }
//   Greeter.prototype.greet = function () {
//     return "Hello, " + this.greeting;
//   };
//   return Greeter;
// })();

// let greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());


// 上面的代码里， let Greeter将被赋值为构造函数。 当我们调用 new并执行了这个函数后，便会得到一个类的实例。 这个构造函数也包含了类的所有静态属性。 换个角度说，我们可以认为类具有 实例部分与 静态部分这两个部分

// 让我们稍微改写一下这个例子，看看它们之间的区别：

// class Greeter {
//   static standardGreeting = "Hello, there";
//   greeting: string = '';
//   greet() {
//     if (this.greeting) {
//       return "Hello, " + this.greeting;
//     }
//     else {
//       return Greeter.standardGreeting;
//     }
//   }
// }

// let greeter1: Greeter;
// greeter1 = new Greeter();
// console.log(greeter1.greet());

// let greeterMaker: typeof Greeter = Greeter;
// console.log('typeof Greeter', typeof Greeter)
// greeterMaker.standardGreeting = "Hey there!";

// let greeter2: Greeter = new greeterMaker();
// console.log(greeter2.greet());
// 这个例子里， greeter1与之前看到的一样。 我们实例化 Greeter类，并使用这个对象。 与我们之前看到的一样。

// 再之后，我们直接使用类。 我们创建了一个叫做 greeterMaker的变量。 这个变量保存了这个类或者说保存了类构造函数。 然后我们使用 typeof Greeter，意思是取Greeter类的类型，而不是实例的类型。 或者更确切的说，"告诉我 Greeter标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在 greeterMaker上使用 new，创建 Greeter的实例。


// 把类当做接口使用
// 如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
// class Point {
//   x: number = 0;
//   y: number = 0;
// }

// interface Point3d extends Point {
//   z: number;
// }

// let point3d: Point3d = { x: 1, y: 2, z: 3 };

// 函数
// 介绍
// 函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用

// 函数
// 和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。

// 通过下面的例子可以迅速回想起这两种JavaScript中的函数：
// Named function
// function add(x, y) {
//   return x + y;
// }

// // Anonymous function
// let myAdd = function(x, y) { return x + y; };

// 函数类型
// 为函数定义类型
// 让我们为上面那个函数添加类型
// function add(x: number, y: number): number {
//   return x + y;
// }

// let myAdd = function(x: number, y: number): number { return x + y; };
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。

// 书写完整函数类型
// 现在我们已经为函数指定了类型，下面让我们写出函数的完整类型。
// let myAdd: (x: number, y: number) => number =
//   function (x: number, y: number): number { return x + y; };

// 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：
// let myAdd: (baseValue: number, increment: number) => number =
//   function (x: number, y: number): number { return x + y; };

//   只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。

// 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。

// 函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数的隐藏状态并不是组成API的一部分。


// 推断类型
// 尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
// myAdd has the full function type
// let myAdd = function (x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
// let myAdd: (baseValue: number, increment: number) => number =
//   function (x, y) { return x + y; };

// interface adFn {
//   (baseValue: number, increment?: number): number
// }

// let myAdd1: adFn = function (x = 1, y) {
//   if (y === void 0) {
//     return x
//   } else {
//     return x + y;
//   }
// };

// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。

// 可选参数和默认参数

// TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
// function buildName(firstName: string, lastName: string) {
//   return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right

// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：
// function buildName(firstName: string, lastName?: string) {
//   if (lastName)
//     return firstName + " " + lastName;
//   else
//     return firstName;
// }

// let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");  // ah, just right


// 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。

// function buildName(firstName: string, lastName?: string) {
//   // ...
// }
// function buildName(firstName: string, lastName = "Smith") {
//   // ...
// }

// 共享同样的类型(firstName: string, lastName?: string) => string。 默认参数的默认值消失了，只保留了它是一个可选参数的信息。

// 与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。 例如，我们重写最后一个例子，让 firstName是带默认值的参数
// function buildName(firstName = "Will", lastName: string) {
//   return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // okay and returns "Bob Adams"
// let result4 = buildName(undefined, "Adams");     // okay and returns "Will Adams"
// let result5 = buildName(void 0, "Adams");     // okay and returns "Will Adams"


// 剩余参数
// 必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 在JavaScript里，你可以使用 arguments来访问所有传入的参数。

// 在TypeScript里，你可以把所有参数收集到一个变量里：

// function buildName(firstName: string, ...restOfName: Array<string>) {
//   return firstName + " " + restOfName.join(" ");
// }

// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// console.log(employeeName)

// 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组。

// 这个省略号也会在带有剩余参数的函数类型定义上使用到：
// function buildName(firstName: string, ...restOfName: string[]) {
//   return firstName + " " + restOfName.join(" ");
// }

// let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

// this
// 学习如何在JavaScript里正确使用this就好比一场成年礼。 由于TypeScript是JavaScript的超集，TypeScript程序员也需要弄清 this工作机制并且当有bug的时候能够找出错误所在。 幸运的是，TypeScript能通知你错误地使用了 this的地方。 如果你想了解JavaScript里的 this是如何工作的，那么首先阅读Yehuda Katz写的Understanding JavaScript Function Invocation and "this"。 Yehuda的文章详细的阐述了 this的内部工作原理，因此我们这里只做简单介绍。

// this和箭头函数
// JavaScript里，this的值在函数被调用的时候才会指定。 这是个既强大又灵活的特点，但是你需要花点时间弄清楚函数调用的上下文是什么。 但众所周知，这不是一件很简单的事，尤其是在返回一个函数或将函数当做参数传递的时候。

// 下面看一个例子：
// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     return function () {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);
//       console.log('this', this)
//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 可以看到createCardPicker是个函数，并且它又返回了一个函数。 如果我们尝试运行这个程序，会发现它并没有弹出对话框而是报错了。 因为 createCardPicker返回的函数里的this被设置成了window而不是deck对象。 因为我们只是独立的调用了 cardPicker() 。 顶级的非方法式调用会将 this视为window。 （注意：在严格模式下， this为undefined而不是window）。

// 为了解决这个问题，我们可以在函数被返回时就绑好正确的this。 这样的话，无论之后怎么使用它，都会引用绑定的‘deck’对象。 我们需要改变函数表达式来使用ECMAScript 6箭头语法。 箭头函数能保存函数创建时的 this值，而不是调用时的值：
// let deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   createCardPicker: function () {
//     // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 更好事情是，TypeScript会警告你犯了一个错误，如果你给编译器设置了--noImplicitThis标记。 它会指出 this.suits[pickedSuit]里的this的类型为any。

// this参数
// 不幸的是，this.suits[pickedSuit]的类型依旧为any。 这是因为 this来自对象字面量里的函数表达式。 修改的方法是，提供一个显式的 this参数。 this参数是个假的参数，它出现在参数列表的最前面：
// function f(this: void) {
//   // make sure `this` is unusable in this standalone function
// }
// 让我们往例子里添加一些接口，Card 和 Deck，让类型重用能够变得清晰简单些：
// interface Card {
//   suit: string;
//   card: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//   suits: ["hearts", "spades", "clubs", "diamonds"],
//   cards: Array(52),
//   // NOTE: The function now explicitly specifies that its callee must be of type Deck
//   createCardPicker: function (this: Deck) {
//     return () => {
//       let pickedCard = Math.floor(Math.random() * 52);
//       let pickedSuit = Math.floor(pickedCard / 13);

//       return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//     }
//   }
// }

// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// 现在TypeScript知道createCardPicker期望在某个Deck对象上调用。 也就是说 this是Deck类型的，而非any，因此--noImplicitThis不会报错了。

// this参数在回调函数里
// 你可以也看到过在回调函数里的this报错，当你将一个函数传递到某个库函数里稍后会被调用时。 因为当回调被调用的时候，它们会被当成一个普通函数调用， this将为undefined。 稍做改动，你就可以通过 this参数来避免错误。 首先，库函数的作者要指定 this的类型：
// interface UIElement {
//   addClickListener(onclick: (this: void, e: Event) => void): void;
// }


// // this: void means that addClickListener expects onclick to be a function that does not require a this type. Second, annotate your calling code with this:

// class Handler {
//   info: string;
//   onClickBad(this: Handler, e: Event) {
//     // oops, used this here. using this callback would crash at runtime
//     this.info = e.message;
//   }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!

// // 指定了this类型后，你显式声明onClickBad必须在Handler的实例上调用。 然后TypeScript会检测到 addClickListener要求函数带有this: void。 改变 this类型来修复这个错误：

// class Handler {
//   info: string;
//   onClickGood(this: void, e: Event) {
//     // can't use this here because it's of type void!
//     console.log('clicked!');
//   }
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickGood);

// 重载
// JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。
// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: any): any {
//   // Check to see if we're working with an object/array
//   // if so, they gave us the deck and we'll pick the card
//   if (typeof x == "object") {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   }
//   // Otherwise just let them pick the card
//   else if (typeof x == "number") {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// pickCard方法根据传入参数的不同会返回两种不同的类型。 如果传入的是代表纸牌的对象，函数作用是从中抓一张牌。 如果用户想抓牌，我们告诉他抓到了什么牌。 但是这怎么在类型系统里表示呢。

// 方法是为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用。 下面我们来重载 pickCard函数。
// let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: { suit: string; card: number; }[]): number;
// function pickCard(x: number): { suit: string; card: number; };
// function pickCard(x: any): any {
//   // Check to see if we're working with an object/array
//   // if so, they gave us the deck and we'll pick the card
//   if (typeof x == "object") {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   }
//   // Otherwise just let them pick the card
//   else if (typeof x == "number") {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }

// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);

// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

// 这样改变后，重载的pickCard函数在调用的时候会进行正确的类型检查。

// 为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。

// 注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。



// 泛型
// 介绍
// 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

// 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
// 泛型之Hello World
// 下面来创建第一个使用泛型的例子：identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。

// 不用泛型的话，这个函数可能是下面这样：

// function identity(arg: number): number {
//   return arg;
// }
// // 或者，我们使用any类型来定义函数：
// function identity(arg: any): any {
//   return arg;
// }

// 使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

// 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。
// function identity<T>(arg: T): T {
//   return arg;
// }
// identity(1)
// 我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了 T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

// 我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。

// 我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：

// let output = identity<string>("myString");  // type of output will be 'string'

// 这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()。

// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
// let output = identity("myString");  // type of output will be 'string'
// 注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看myString的值，然后把T设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。

// 使用泛型变量
// 使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。

// 看下之前identity例子：

// function identity<T>(arg: T): T {
//   return arg;
// }
// 如果我们想同时打印出arg的长度。 我们很可能会这样做：

// function loggingIdentity<T>(arg: T): T {
//   if (typeof arg == 'string') {
//     console.log(arg.length);  // Error: T doesn't have .length
//   }
//   if (Array.isArray(arg) ) {
//     console.log(arg.length);  // Error: T doesn't have .length
//     // return arg.length
//   }

//   return arg;
// }
// 如果这么做，编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。


// 现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：

// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }

// 你可以这样理解loggingIdentity的类型：泛型函数loggingIdentity，接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。 如果我们传入数字数组，将返回一个数字数组，因为此时 T的的类型为number。 这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。

// 我们也可以这样实现上面的例子：

// function loggingIdentity<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }

// 使用过其它语言的话，你可能对这种语法已经很熟悉了。 在下一节，会介绍如何创建自定义泛型像 Array<T>一样。

// 泛型类型
// 上一节，我们创建了identity通用函数，可以适用于不同的类型。 在这节，我们研究一下函数本身的类型，以及如何创建泛型接口。

// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
// function identity<T>(arg: T): T {
//   return arg;
// }
// interface myinter {
//   (arg: string): boolean
// }
// let test: myinter = function (arg) {
//   return arg === 'a'
// }
// test('1')
// test(1)

// let myIdentity: <T>(arg: T) => T = identity;

// 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <U>(arg: U) => U = identity;

// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: {<T>(arg: T): T} = identity;

// 这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：
// interface GenericIdentityFn {
//   <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn = identity;
// 一个相似的例子，我们可能想把泛型参数当作整个接口的一个参数。 这样我们就能清楚的知道使用的具体是哪个泛型类型（比如： Dictionary<string>而不只是Dictionary）。 这样接口里的其它成员也能知道这个参数的类型了。

// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;
// console.log(identity('a'))
// console.log(myIdentity(1))

// 注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用 GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型（这里是：number），锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。

// 除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。

// 泛型类
// 泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
// class GenericNumber<T> {
//   zeroValue: T;
//   // constructor(zeroValue:T) {
//   //   this.zeroValue = zeroValue
//   // }
//   add: (x: T, y: T) => T
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) { return x + y; };

// GenericNumber类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用number类型。 也可以使用字符串或其它更复杂的类型。

// let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "";
// stringNumeric.add = function (x, y) { return x + y; };

// console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
// 与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。

// 我们在类那节说过，类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

// 泛型约束
// 你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，所以就报错了。
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }
// 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。

// 为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束：

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);  // Now we know it has a .length property, so no more error
//   return arg;
// }
// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
// loggingIdentity(3);  // Error, number doesn't have a .length property
// loggingIdentity({length: 10, value: 3});

// 在泛型约束中使用类型参数
// 你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj上，因此我们需要在这两个类型之间使用约束。

// function getProperty(obj: T, key: K) {
//   return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// console.log(getProperty(x, "a")) // okay
// console.log(getProperty(x, "m")); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 在泛型里使用类类型
// 在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，
// function create<T>(c: { new(): T; }): T {
//   return new c();
// }
// // 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。

// class BeeKeeper {
//   hasMask: boolean;
// }

// class ZooKeeper {
//   nametag: string;
// }

// class Animal {
//   numLegs: number;
// }

// class Bee extends Animal {
//   keeper: BeeKeeper;
// }

// class Lion extends Animal {
//   keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//   return new c();
// }
// console.log(createInstance(Lion))
// console.log(createInstance(Bee))


// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!

// 枚举
// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。

// 数字枚举
// 首先我们看看数字枚举，如果你使用过其它编程语言应该会很熟悉

// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }
// console.log(Direction)

// 如上，我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说， Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。

// 我们还可以完全不使用初始化器：
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction)
// 现在， Up的值为 0， Down的值为 1等等。 当我们不在乎成员的值的时候，这种自增长的行为是很有用处的，但是要注意每个枚举成员的值都是不同的。

// 使用枚举很简单：通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
// enum Responses {
//   No = 0,
//   Yes = 1,
// }
// console.log(Responses)

// function respond(recipient: string, message: Responses): void {
//   console.log(message)
//   // ...
// }

// respond("Princess Caroline", Responses.Yes)

// function getSomeValue(){
//   return 1
// }
// 数字枚举可以被混入到 计算过的和常量成员（如下所示）。 简短地说，不带初始化器的枚举或者被放在第一的位置，或者被放在使用了数字常量或其它常量初始化了的枚举后面。 换句话说，下面的情况是不被允许的
// enum E {
//   A = getSomeValue(),
//   B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }

// 字符串枚举
// 字符串枚举的概念很简单，但是有细微的 运行时的差别。 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }
// console.log('Direction', Direction)

// 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），字符串枚举允许你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。

// 异构枚举（Heterogeneous enums）
// 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
// enum BooleanLikeHeterogeneousEnum {
//   No = 0,
//   Yes = "YES",
// }

// 除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做。

// 计算的和常量成员
// 每个枚举成员都带有一个值，它可以是 常量或 计算出来的。 当满足如下条件时，枚举成员被当作是常量：

// 它是枚举的第一个成员且没有初始化器，这种情况下它被赋予值 0：
// E.X is constant:
// enum E { X }

// 它不带有初始化器且它之前的枚举成员是一个 数字常量。 这种情况下，当前枚举成员的值为它上一个枚举成员的值加1。
// All enum members in 'E1' and 'E2' are constant.

// enum E1 { X, Y, Z }

// enum E2 {
//   A = 1 / 0, B, C
// }

// 枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：

// 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 带括号的常量枚举表达式
// 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
// 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。

// 所有其它情况的枚举成员被当作是需要计算得出的值

// enum FileAccess {
//   // constant members
//   None,
//   Read = 1 << 1,
//   Write = 1 << 2,
//   ReadWrite = Read | Write,
//   // computed member
//   G = "123".length
// }

// 联合枚举与枚举成员的类型
// 存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为

// 任何字符串字面量（例如： "foo"， "bar"， "baz"）
// 任何数字字面量（例如： 1, 100）
// 应用了一元 -符号的数字字面量（例如： -1, -100）
// 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。

// 首先，枚举成员成为了类型！ 例如，我们可以说某些成员 只能是枚举成员的值：
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
}