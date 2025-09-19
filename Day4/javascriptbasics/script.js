console.log("hello world")
document.write("good morning shreyas")
// variables
var name="shreyas"  //function or global scope
console.log(name)
document.write(name)
var name="arun"
console.log(name)
// let
let age = 25
console.log(age)

age=30
console.log(typeof(age))
//let age=30 redeclaration is not allowed
// reassign allowed
const PI = 3.14
console.log(PI)
console.log(typeof(PI))
//PI=31.4159
// using const cannot be reassigned
//object

const person = {
    name: "Alice",
    age: 20
}
console.log(person)
console.log(person.name)
console.log(person.name="shreyas")

//while creating an object individual ppties can be change


//hoisting
//var -hoisted and initialized with undefined
console.log(X)// undefined
var X = 5

// let and const are hoisted but not initializeed
//console.log(y)
//let y=10

//operators

let a=10, b=3

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

console.log(a%b)
let c = 5
console.log(++c) // pre incremnet
// c is 6
console.log(c--) // post increment
console.log(c)

// assigmnet operators
let x = 10

x+=5
console.log(x)
x-=3
console.log(x)
x*=2
console.log(x)
x/=4
console.log(x)


//comparison operators

console.log(5 === '5')// false strict -> value and type
console.log( 5 !== '5')

//logical operators
let isAdult = true
let hasTicket = false
// AND -&&
//OR - ||
//NOT - !
console.log(isAdult && hasTicket)// false
console.log(isAdult || hasTicket)// true
console.log(!hasTicket)// true

//String Operator

let greeting = "hello," + "world"
console.log(greeting)

//ternory or Conditional Operator

let stugentAge = 9
let canVote = stugentAge >=18? "yes" : "NO"
console.log(canVote)


// arrays

let arr1 =[1,2,3]
console.log(arr1)


// conditional statement

age=67

if (age >= 18)
    console.log('adult')
else
    console.log('minor')


// break cal using if 

let score= 89
if (score >= 90 && score <=100)
    console.log('Grade A')
else if(score >= 75 && score <=89)
    console.log('Grade b')
else if(score >= 50 && score <= 74)
    console.log('grade c')
else
    console.log('fail')

// switch case  // day =3 tuesday like that starting 1 as sunday 

let day=2
switch(day){
             case 1: 
             console.log("Sunday")
             break
             case 2:
             console.log("monday")
             break
             case 3:
             console.log("tuesday")
             break
             case 4:
             console.log("wenesday")
             break
             case 5:
             console.log("thursday")
             break
             case 6:
             console.log("friday")
             break
             case 7:
             console.log("saturday")
             break
             default:
                console.log("invalid day")
}

// Loops
console.log('for')

for (let i=0; i<5; i++){
    console.log(i)

}
console.log('while')

let n=0
while( n <=6){
    console.log(n)
    n++
}
console.log('dowhile')
let k=0
do{
    console.log(k)
    k++
}
while(k < 8)


const person1 = {name:"alice", age:24}

for(let key in person1){
    console.log(key +  ":"  + person1[key])
}

const colors =["red","green","blue"]
    console.log(colors[2])

for(let color of colors){
    console.log(color)
}

//Functions



function sayHello(){
    console.log("Hello,hai !! everyone")
}
// Function call
sayHello()

// Function with parameters and default value

function greet(name="user"){
    console.log("hello  " + name)
}

greet("james")

// not passing parameter causes undefined


function add(a,b){
    return a+b
}

let v = add(5,10)
console.log("the sum of two number is " +v)

// function expression

const mult = function (x,y){
    console.log( x*y )
}

mult(4,6)

// arrow functions

const subtract  =  (a,b) =>{
    console.log(a-b)
}

const sq = a =>  a*a

console.log(sq(3))

// reduce the number of lines of code it it is one_liner

// function scope

function show(){
    let msg = "hello"

console.log(msg)

}
show()

