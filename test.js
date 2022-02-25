// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("pro2") }, 1000);
// });

// const pro2 = new Promise((resolve, reject) => {
//     setTimeout(() => { reject("pro2") }, 2000);
// });

// const pro3 = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve("pro3") }, 3000);
// });

// // Promise.all([pro1, pro2, pro3])
// //     .then((values) => {
// //         console.log("values", values);
// //     })
// //     .catch((error) => {
// //         console.log("error", error);
// //     });
// Promise.any([pro1, pro2, pro3]).then((value) => console.log(value));


// //pro3();


// console.log("line1")
// setImmediate(() => {
//     console.log("line3");
// });
// console.log("line3")

// setTimeout(()=>{
//     console.log("setTimeout");
// }, 1000);

// setImmediate(() => {
//     console.log("setImmediate");
// });

// process.nextTick(() => {
//     console.log("nextTick");
// });


// console.log("final")

// for (var i = 0; i < 4; i++) {
//     setTimeout((index) => {
//         console.log("i is ", index);
//     }, 1000, i)
// }

