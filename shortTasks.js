// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(5)(4));
//
//
//
//
//
// function redundant(str) {
//   return function () {
//     return str;
//   };
// }
//
// let f1 = redundant("axcv");
// console.log(f1());
// let f2 = redundant("oihb");
// console.log(f2());
//
//
//
//
//
// function add_suffix(suf) {
//   return (str) => {
//     return `${str}${suf}`;
//   };
// }
// let add_ly = add_suffix("ly");
// console.log(add_ly("slow"));
//
// let add_less = add_suffix("less");
// console.log(add_less("harm"));
//
//
//
//
//
//
// const print = () => console.log("Elon Musk");
//
// function printAfter(alert) {
//   console.log("hello, world");
//   alert();
// }
// printAfter(print);
//
//
//
//
//
//
//
// function filterFalsyValues(array) {
//   let filteredArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!array[i] === false) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// }
// const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
// console.log(filterFalsyValues(["hello", null, 455, 0]));
//
//
//
//
//
//
//
// function filterByLength(array) {
//   let filteredArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 3) {
//       filteredArray.push(array[i]);
//     }
//   }
//   return filteredArray;
// }
// console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
//
//
//
//
//
//
//
//
//
// let word = "albbu";
// function checkIsogram(str) {
//   let letters = [];
//   let answer = "isogram";
//   for (let i = 0; i < str.length; i++) {
//     if (!letters.includes(str[i])) {
//       letters.push(str[i]);
//     } else {
//       return "not an isogram";
//     }
//   }
//   return answer;
// }
// console.log(checkIsogram(word));
//
//
//
//
//
//
// function checkPalinadrome(word) {
//   let answer = "palinadrome";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[word.length - (i + 1)]) {
//       continue;
//     } else {
//       answer = "not a palinadrome";
//       break;
//     }
//   }
//   return answer;
// }
// console.log(checkPalinadrome("katak"));
//
//
//
//
//
//
// function adjacentProduct(array) {
//   let products = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     products.push(array[i] * array[i + 1]);
//   }
//   let max = Math.max.apply(Math, products);
//   return max;
//   // for (let j = 0; j < products.length; j++) {

//   // }
// }
// console.log(adjacentProduct([5, 2, 6, 7, 3]));
//
//
//
//
//
//
let arr = [2, 5, 6, 5];
function checkUnique(array) {
  let elements = [];
  let answer = "unique";
  for (let i = 0; i < array.length; i++) {
    if (!elements.includes(array[i])) {
      elements.push(array[i]);
    } else {
      return "not unique";
    }
  }
  return answer;
}
console.log(checkUnique(arr));
