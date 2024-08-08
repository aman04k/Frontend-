// function nidhist(){
//     console.log('h')
//     console.log('d')
//     console.log('s')
//     console.log('f')
// }
// nidhist()

// function add(num1, num2){
//     return num1 + num2
// }
// // add(4,8)
// let number = add(4,8)
// console.log(number)

function om(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
const number = [1,2,3,4,5]
const output = om(number)
console.log(output)

