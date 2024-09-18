// Spread oprator => it is used to spread the elements of an array

let number = [1,2,3,4,5,6]
let newnumber = [...number,7,8,9,10,"hello"]
console.log(newnumber)


let arr = [1,2,3,4,5,6,...number]
let newarr = [...arr,7,8,9,10]
console.log(newarr)


const person = {
    firstName: "om",
    lastName: "Yadav",
    abc : [...number,7,8,9,10]
}
console.log(person)
// Rest oprator => it is used to take the elements of an array

