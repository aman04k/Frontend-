// let Promises = new Promise((resolve, reject) => {
//     // alert("This is promises")
//     resolve(56)
// })

// console.log("Hello Promises")
// setTimeout(function(){
//     console.log("hello two sec")
// },2000)

// console.log("My name is " + "  hello three")
// console.log(Promises)

// 2nd METHOD TO PROMISES

let p = new Promise((resolve, reject) => {
    console.log("promises is panding")
  setTimeout(() => {
    console.log("i am promises and i am fullfilled");
    resolve(true);
  }, 5000);
});
