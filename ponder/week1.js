const PI = 3.14;
let radius = 3;

let area = PI * radius * radius;
console.log(area);

radius = 20;
area = PI * radius * radius;
console.log(area);
// find in console section when inspect
// remember to link the js to variables.html file

// type coersion
// if you do math on a string it will assume what you mean
const one = 1;
const two = '2';

// turns both into a number
let result = one * two;
console.log(result);

// this turns both into a string 
result = one + two;
console.log(result);



// Scope

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
// console.log(student); //does not work, can't access a block variable outside the block
                    