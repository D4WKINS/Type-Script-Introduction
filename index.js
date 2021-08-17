"use strict";
console.log('Hello Typescript!');
var x = 'Stefano';
console.log(x);
// TYPE INFERENCE
// x = true
// x = 100
// TS make JS a strongly-typed language
var user = {
    name: 'Stefano',
    country: 'Italy',
};
console.log(user.name);
var y;
var z;
var arrayOfStrings = [];
arrayOfStrings.push('nando');
//type can be a string or number
//refer to a venn diagram to understand the difference between type and typeof
var addition = function (n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    }
    else {
        return 'you passed two strings!';
    }
};
// addition('3', '4').toString()
addition(4, 5);
var student = {
    name: 'Stefano',
    surname: 'Casasola',
    age: 34,
};
var arrayOfTeachers = [];
arrayOfTeachers.push(student);
var striveTeachers = [
    {
        firstName: 'Tiago',
        lastName: 'Brandao',
        roles: ['Tutor', 'Student'],
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
        roles: ['CTO', 'Teacher'],
    },
    {
        firstName: 'Stefano',
        lastName: 'Casasola',
        roles: ['Teacher'],
    }
];
striveTeachers.forEach(function (t) {
    return console.log(t.firstName);
});
var myArr = [];
// myArr.push(true)
// myArr.push('Carl')
// myArr.push(22)
//Same as...
myArr = ['true', 'Carl', 22];
var myArr2 = ['Carl', 22, true]; // Tuples are used with array literals
//The object can mix and match the properties of the two interfaces
var obj1 = {
    name: 'Stefano',
    age: 34
};
var obj2 = {
    country: 'Italy',
    hired: true
};
var obj3 = {
    name: 'Carl',
    age: 22,
    hired: false,
    country: 'England'
};
var user1 = {
    name: 'Stefano',
    surname: 'Casasola',
    area: 'IT'
};
