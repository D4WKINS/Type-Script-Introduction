console.log('Hello Typescript!')

let x = 'Stefano'
console.log(x)
// TYPE INFERENCE

// x = true
// x = 100
// TS make JS a strongly-typed language

const user = {
  name: 'Stefano',
  country: 'Italy',
}

console.log(user.name)

let y: number[]
let z: Array<Array<string>>

let arrayOfStrings: string[] = []

arrayOfStrings.push('nando')
// arrayOfStrings.push(5)

// z.push('ste')

// const addition = (n1, n2) => {
//   if (typeof n1 === 'number' && typeof n2 === 'number') {
//     return n1 + n2
//   } else {
//     return 'these are not numbers!'
//   }
// }

// custom type
type MyType = string | number // type union
//type can be a string or number
//refer to a venn diagram to understand the difference between type and typeof

const addition = (n1: MyType, n2: MyType) => {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2
  } else {
    return 'you passed two strings!'
  }
}

// addition('3', '4').toString()
addition(4, 5)

type MyObjType = {
  name: string
  surname: string
  age: number
}

let student: MyObjType = {
  name: 'Stefano',
  surname: 'Casasola',
  age: 34,
}
interface AnotherObjType { //Interfaces are more suitable for object because they can be extended
    name:string,          
    surname:string,
    age:number
}

const arrayOfTeachers: MyObjType[] = []
arrayOfTeachers.push(student)

interface Teacher {//Interface is like a schema for the Teacher object
    firstName:string,
    lastName:string,
    roles:string[],
    age?:number // Appending a question mark to the end of a property means optional
}

const striveTeachers: Teacher[] = [
    {
        firstName: 'Tiago',
        lastName: 'Brandao',
        roles: ['Tutor','Student'],
    },
    {
        firstName: 'Rabia',
        lastName: 'Ilyas',
        roles: ['Tutor', 'Student'],
        age: 34,
    },
    {
        firstName: 'Diego',
        lastName: 'Banovaz',
        roles: ['CTO','Teacher'],
    },
    {
        firstName: 'Stefano',
        lastName: 'Casasola',
        roles: ['Teacher'],
    }
]

striveTeachers.forEach(t => {
    return console.log(t.firstName)
})

let myArr:(string | number| boolean)[] = []

// myArr.push(true)
// myArr.push('Carl')
// myArr.push(22)

//Same as...
myArr = ['true', 'Carl', 22]

type MyTuple = [string,number,boolean] // Tuple is a tuple of 3 elements 
let myArr2: MyTuple = ['Carl', 22,true] // Tuples are used with array literals
//Its a way of specifying very strictly how an array should be structured/composed whilst setting the length


interface Int1 {
    name:string,
    age:number
}
interface Int2 {
    country:string,
    hired:boolean
}

type Union = Int1 | Int2 //Either Int1 or Int2 can be used with the union keyword to create an object
                         //The object can mix and match the properties of the two interfaces
const obj1: Union = {
    name: 'Stefano',
    age: 34
}

const obj2: Union = {
    country: 'Italy',
    hired: true
}

type Intersection = Int1 & Int2
const obj3: Intersection = {//Intersection means that all properties from both Int1 and Int2 need to be present
    name: 'Carl',
    age: 22,
    hired:false,
    country:'England'
}

//Generics defining a structure without knowing it's parts in advance
//Essentially a parameter (argument) for a type
//The type of the generic is the type of the parameter
//We can have multiple parameters 
//This is similar to sending arguments to a function
//But the difference is with Generics we don't know the types of the arguments
//And we can use the same function with different types of arguments

interface GenericAF<T> {
name:string,
surname:string,
area:T
}

const user1: GenericAF<string> = {
    name: 'Stefano',
    surname: 'Casasola',
    area: 'IT'
}




