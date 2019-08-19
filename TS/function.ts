// /*
//  * @Author: web_XL
//  * @Date: 2019-08-12 23:06:56
//  * @Last Modified by: web_XL
//  * @Last Modified time: 2019-08-12 23:48:41
//  */
// interface Card {
//   suits: string
//   card: number
// }
// interface Desk {
//   suits: string[]
//   cards: number[]
//   createdCardPicker(this: Desk): () => Card
// }

// let desk: Desk = {
//   suits: ['hearts', 'spades', 'clubs', 'diamonds'],
//   cards: Array(52),
//   createdCardPicker: function (this: Desk) {
//     // return function () {
//     return () => {

//       let pickedCard = Math.floor(Math.random() * 52) // 0 - 52
//       let pickedSuit = Math.floor(pickedCard / 13) // 0 - 52
//       console.log('this', this)
//       return {
//         suit: this.suits[pickedCard],
//         card: pickedCard % 13
//       }
//     }
//   },
//   test: function () {
//     console.log('test this', this)
//   }
// }

// // let test = desk.test()
// let test = desk.test // 相当于函数表达式  相当于通过函数名 直接调用 在非严格模式下 this 指向window 严格模式 为undefined

// test() // 
// let cardPicker = desk.createdCardPicker()
// let pikedCard = cardPicker() // 相当于通过函数名 直接调用 在非严格模式下 this 指向window 严格模式 为undefined
