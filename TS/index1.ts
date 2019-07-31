// tsc xxx.ts --target es2015
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 100)
}


// 通过立即执行函数 生成一个新的变量环境 产生闭包 使得i 缓存下来 依然被内部函数进行了引用
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j)
    }, j * 100)
  })(i)
}

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 100)
}