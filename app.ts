let string: string = "Hello"//the string variable can only be assigned/re-assigned to a string
string = "GET REKT"


let num: number = 1 //num variable can only be assigned/re-assigned to number
num = 5

let bool : boolean = true //bool variable can only be assigned/re-assigned to boolean
bool = false

let anyVar: any = "Hello" //any variable can be assigned to any type ,defeats the purpose of typescript
anyVar = 10


// let year : string | number // This variable type is referred to as a union type the year can be assigned/re-assigned to a string or number,
// year = "Hello"
// year = 10

let arrString: string[]= ["Hello", "From","The","Other","Side"] //arrString can be assigned/re-assigned to an array of strings
console.log(arrString)
// arrString[0] = 6 This is not allowed because string[] is a type of an array, therefore every element of the array must be of the same type (string)
arrString.push("Im Here") // We can push a string value to the array
console.log(arrString)

let arrNumber:number[] = [1,2,3] //arrNumber can be assigned/re-assigned to an array of numbers
console.log(arrNumber)
// arrNumber[2] = "Hello" This is not allowed because number[] is a type of an array, therefore every element of the array must be of the same type (number)
arrNumber.push(4) // We can push a number value to the array
console.log(arrNumber)


let arrBoolean: boolean[] = [true, false] //arrBoolean can be assigned/re-assigned to an array of booleans
//In this case we will be able to assign a boolean value to the array but not another type of value
console.log(arrBoolean)
arrBoolean.push(false)
console.log(arrBoolean)

let arrMix: (boolean | number | string) []= [true, 7,"HOLD MY JUICE"] //arrMix can be assigned/re-assigned to an array of booleans or numbers string values
console.log(arrMix)
arrMix[0] = "Hello" // This is not allowed because arrMix is a type of an array, therefore every element of the array must be of the same type (boolean | number | string)
console.log(arrMix)
arrMix.push(false) // We can push a boolean value to the array

//tuples- Allows a certain type of value in specific position of an array

let arrTuple: [string,number] = ["string",8] //arrTuple can be assigned/re-assigned to an array of strings and numbers only where the position allows it
//arrTuple[0]= Must be a string value
//arrTuple[1]= Must be a number value
console.log(arrTuple)
arrTuple[0]="Another One..- DJ Khaled"
console.log(arrTuple)
arrTuple = ["We da balls", 54]
console.log(arrTuple)

//Objects

let person ={
    name: "John",
    age: 30,
}

//person.name= 8 This would not be allowed name must be a string
//person.age= "43" This would not be allowed age must be a number

//person.email = "" This would not be allowed because the email property dose not exist

//Custom Type

//Type Aliases
type stringOrNum = string | number

let year: stringOrNum //This is our custom type alias
year = "2021"
year = 2021

//Functions
//Typescript functions are similar to javascript functions, they have a return type and can have parameters
//Only the parameters of a function in type script require a data type assigned setting a parameter you must specify the type of the parameter
//and the type of the return value

//In this case we have two parameters that will only accept number values
//Therefore the sum of these two numbers will produce/return a number value as stated after the parentheses

// function calcSum(a:number, b:number):number{
//     return a + b
// }
//     console.log(calcSum(2,2))

// Here we define a function that accepts two parameters and returns a number value
// optional parameters should be in the last position of the function
let calcSum: (a:number, b:number,third?:number) => number; // this is our custom type alias
//appending a question mark to the parameter means its optional

//We define the function to perform a sum of two numbers we can change the name of the parameters
// calcSum = (first:number, second:number) => {
//     return first + second + third
// }

// console.log(calcSum(2,2,5))

//VOID RETURNS NOTHING

//Interfaces
//Interfaces are like pre-defined types that can be used to define the properties and methods of an object
interface PersonInterface{
    name: string;
    age: number;
}

let mike : PersonInterface = {
    name: "Mike",
    age: 34
}

//Verbose Class
// class Person implements PersonInterface{// A class is a type of object that has properties and methods
//     name: string;
//     age: number;
//     // email:string; This property is allowed because it has not been defined within the confines of the interface

// constructor(n: string, a: number){ //A constructor is a function that is executed when an object is created
//     this.name = n;//this.name refers to the name property of the object i.e. mike
//     this.age = a;//this.age refers to the age property of the object i.e. 34
// }

//Shorthand Class
class Person implements PersonInterface{// A class is a type of object that has properties and methods
    constructor(public name: string, public age: number){}
 
greet(){//greet is a method that is executed when the object is created
    return `Hi,my name is ${this.name} and I am ${this.age}`
    }
}

let message =new Person("Carl",22);
console.log(message.greet())






