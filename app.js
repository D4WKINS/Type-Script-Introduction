var string = "Hello"; //the string variable can only be assigned/re-assigned to a string
string = "GET REKT";
var num = 1; //num variable can only be assigned/re-assigned to number
num = 5;
var bool = true; //bool variable can only be assigned/re-assigned to boolean
bool = false;
var anyVar = "Hello"; //any variable can be assigned to any type ,defeats the purpose of typescript
anyVar = 10;
// let year : string | number // This variable type is referred to as a union type the year can be assigned/re-assigned to a string or number,
// year = "Hello"
// year = 10
var arrString = ["Hello", "From", "The", "Other", "Side"]; //arrString can be assigned/re-assigned to an array of strings
console.log(arrString);
// arrString[0] = 6 This is not allowed because string[] is a type of an array, therefore every element of the array must be of the same type (string)
arrString.push("Im Here"); // We can push a string value to the array
console.log(arrString);
var arrNumber = [1, 2, 3]; //arrNumber can be assigned/re-assigned to an array of numbers
console.log(arrNumber);
// arrNumber[2] = "Hello" This is not allowed because number[] is a type of an array, therefore every element of the array must be of the same type (number)
arrNumber.push(4); // We can push a number value to the array
console.log(arrNumber);
var arrBoolean = [true, false]; //arrBoolean can be assigned/re-assigned to an array of booleans
//In this case we will be able to assign a boolean value to the array but not another type of value
console.log(arrBoolean);
arrBoolean.push(false);
console.log(arrBoolean);
var arrMix = [true, 7, "HOLD MY JUICE"]; //arrMix can be assigned/re-assigned to an array of booleans or numbers string values
console.log(arrMix);
arrMix[0] = "Hello"; // This is not allowed because arrMix is a type of an array, therefore every element of the array must be of the same type (boolean | number | string)
console.log(arrMix);
arrMix.push(false); // We can push a boolean value to the array
//tuples- Allows a certain type of value in specific position of an array
var arrTuple = ["string", 8]; //arrTuple can be assigned/re-assigned to an array of strings and numbers only where the position allows it
//arrTuple[0]= Must be a string value
//arrTuple[1]= Must be a number value
console.log(arrTuple);
arrTuple[0] = "Another One..- DJ Khaled";
console.log(arrTuple);
arrTuple = ["We da balls", 54];
console.log(arrTuple);
//Objects
var person = {
    name: "John",
    age: 30
};
var year; //This is our custom type alias
year = "2021";
year = 2021;
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
var calcSum; // this is our custom type alias
var mike = {
    name: "Mike",
    age: 34
};
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi,my name is " + this.name + " and I am " + this.age;
    };
    return Person;
}());
var message = new Person("Carl", 22);
console.log(message.greet());
