//100 Javascript Functions
//An exercise in writing Javascript functions.
//25 Functions written 4 different ways

// Arrow Function: 
// let f = x => true

// Arrow Function, Multi-line:
// let f = x => {
//   return true;
// }

// Standard Named Function:
// function f (x) {
//   return true;
// }

// Standard Anonymous Function:
// let f = function (x) {
//   return true;
// }

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

// Examples:
// countClaps("ClaClaClaClap!") ➞ 4
// countClaps("ClClClaClaClaClap!") ➞ 6
// countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9
// Notes
// Claps will start with a capital letter (to signify how loud they are).
//1.
// let countClaps = (claps) => {
//     numClaps = 0;
//     for (i = 0;i < claps.length; i++){
//         if (claps[i] === 'C') {
//           numClaps++;
//         }       
//     }
//     console.log(numClaps);
// };
// countClaps("CCClaClClap!Clap!ClClClap!") //output: 9

//2.
// function countClaps(claps) {
//     numClaps = 0;
//     for (i=0; i<claps.length; i++){
//         if (claps[i]=== 'C'){
//             numClaps++;
//         }
//     }
//     console.log(numClaps);
// }
// countClaps("ClClClaClaClaClap!"); //output: 6
//
//3.
// let countClaps = function (claps){
//     numClaps=0;
//     for (i=0; i<claps.length; i++){
//         if(claps[i]==='C'){
//             numClaps++;
//         }
//     }
//     console.log(numClaps);
// }
// countClaps("ClaClaClaClap!") //output: 4
//
//4.
// var numClaps = 0;
// let countClaps = (claps) => {
//     // claps.forEach(clap => {
//     //     if (clap === 'C') {
//     //         numClaps++;
//     //     }
//     // })
//     return claps.split("").forEach(clap => {
//         if (clap === 'C') {
//             numClaps++;
//         }
//     })
// }
// countClaps("ClaClaClaClapClap!");
// console.log(numClaps++); //output: 5

//---------------------------------

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
// Notes
// The tests only use positive and negative integers.
// Don't forget to return the result.