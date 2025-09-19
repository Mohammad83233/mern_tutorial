let  mixArray = [1,"two" ,false]
console.log(mixArray)

const nestedarray = [[1,2],[3,4]]
for(let i of nestedarray){
    for (let j of i){
        console.log(j)
    }
}

console.log(nestedarray[1][0])

let names = ["john","antony","nemaey"]
names[0] = "hathim"
console.log(names)
console.log(names.length)

let newArr1 = new Array()

// Array Methods


//for Each 
const fruits = ["apple","banana","guava"]

fruits.forEach(fruits =>{
    console.log(fruits)
})
