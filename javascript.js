console.log("hello world");
console.log('hello world')
console.log(
    1 + 
    2
);

console.log(
'jfkdlsjfdfadsa',
'dkljfds jfdlksjflkd dsjlfjds',
'jflkdjsj jfdlksjflkd'
)

// This is a comment
/*
 like c++
*/

let userName = "ali";
let userAdmin = userName;
console.log(userAdmin);


let newName = userName + " rezaee";
console.log(newName);

function someCode(birthday) {
    let age = birthday.split('.');
    console.log(age);
    return Date.call()

}

let userBirth = '19.12.2000';
let countAge = someCode(userBirth);
console.log(userBirth);

console.log(`This is countAge resualt = ${countAge}`);

console.log(typeof "100" ,typeof 200 ,typeof true ,typeof Symbol(10) ,typeof NaN ,typeof null ,typeof undefined ,typeof x);

// type convert
console.log('2' / '10');

let num = 10;
console.log(typeof num);
num = String(num);
console.log(typeof num);

let str = "100";
console.log(typeof str);

let convertedStr = Number(str);
console.log(typeof convertedStr);

let xNumber = "10";
let yNumber = "20";

console.log(xNumber + yNumber);
console.log(+xNumber + +yNumber);

let newX = "" + 1 + 0;
console.log(typeof newX,newX);

newX = "" + 1 - 0;
console.log(typeof newX,newX);

newX = true + false;
console.log(typeof newX,newX);

newX = 2 + 3 + "hell";
console.log(typeof newX,newX);

newX = "$" + 2 + 3;
console.log(typeof newX,newX);

newX = "$" - 2 + 3;
console.log(typeof newX,newX);

newX = 2 - 3 - "hell";
console.log(typeof newX,newX);

newX = null + 1;
console.log(typeof newX,newX);

newX = null - 1;
console.log(typeof newX,newX);

newX = undefined + 1;
console.log(typeof newX,newX)

/* prompt undefined in nodejs */
// let newValue = prompt("Enter new value");
// console.log(typeof newValue);