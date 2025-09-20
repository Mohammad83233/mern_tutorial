const numbers=[1,2,3]
const doubled = numbers.map(num=>num*2)
console.log(doubled)


//filter  - keeps only matching items of a condition

//restore a new array

const ages = [10,20,30,9,19]
const adults = ages.filter(age=>age>=18)


const names= ["nisham","hakeem","abdul","samad"]
const a_names = names.filter(name => name.startsWith("A")  ||  name.startsWith ("a"))
console.log(a_names)

//find - first matching item

const users = [
    {id :1, name:"john"},
    {id :2, name:"Mary"},
]

console.log(users.map(use=>use.name))

// function to organize odd or even
const nums = [1, 2, 3, 4];

const even = nums.filter(n => n % 2 === 0);
const odd  = nums.filter(n => n % 2 !== 0);

console.log(even); // [2, 4]
console.log(odd);  // [1, 3]
