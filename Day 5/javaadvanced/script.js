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

//find - first maytching line

const user = users.find(user => user.id==2)
console.log(user)


//includes - check if value exists or not;


const items = ["pen","pencil","markers"]
console.log(items.includes("orange"))


//every - all items must match
//sum - atleast one of themare match

const scores = [88,44,20,55,49]
const passed = scores.every(score =>score>=50)
const failed = scores.every(score =>score<50)
console.log(passed)
console.log(failed)

// for cal sum
const prices = [1000, 1005, 200];
let sum = 0;

for (let p of prices) {
  sum += p;
}

console.log(sum); // 2205


//slice - doesnt modify original array
const letters = ["a","b","c","d"]
const part = letters.slice(1,4)
console.log(part)

//splice - adding and removing
const animals = ["cat","dog","rabbit"]
animals.splice(1,1)
console.log(animals)


//array destructuring


const [first,second,third] = animals
console.log(first)
console.log(second)
console.log(third) //- //undefined // because it is spliced


// object destructuring

const book={
    title :"is Guide",
    authors:["alice ","nick"]
}
console.log(book.authors[0])
// pulling values out of  an object easily

const student = { name :'Marc' , grade :'A'}

const {name,grade} = student

console.log(name)
console.log(grade)
 // JSON - javaScript object Notation

const person ={ name: "harish" , age: 18}

const javaString = JSON.stringify(person)
console.log(javaString)

// JSON.parse()

const person1 = JSON.parse(JSONString)
console.log(person1)