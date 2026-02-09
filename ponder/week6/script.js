let numbers = [65, 44, 12, 4];
// for each is a METHOD that loops through each item and applies the function

numbers[4] = 70;
numbers.push(31);

function myFunction(item) {
  console.log(item * 10); 
}
numbers.forEach(myFunction);

//Console output: 650, 440, 120, 40  

console.log("-------------")
const steps = ["one", "two", "three"];

// steps.forEach((item) => {
//     console.log(item);
// })

steps.forEach(showSteps);

function showSteps(item){
    console.log(item);
}

console.log("------------")

// map makes a new array
const stepsHtml = steps.map(listTemplate)

let myList = document.querySelector("#myList")

// interesting how inner HTML works, I should look further into it
function listTemplate(item){
    return `<li>${item}</li>`
}

myList.innerHTML = stepsHtml.join("");

//.map

let grades = ["A", "B", "D", "a"];

let points;

let gpaPoints = grades.map(convert);

function convert(grade){
    grade = grade.toUpperCase();
    switch (grade){
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
        case "F":
            points = 0;
            break;
    }
    return points;
}

console.log(gpaPoints);
console.log(grades);

// .reduce accumulates items. Like adding all the numbers into a list or putting all strings together

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    console.log(total, " + ", item);
    return total + item;
}

let gpaAverage = totalPoints/gpaPoints.length;
console.log(gpaAverage);

// .filter retruns an item in a list if it meets a condition. 
// In the below example it retruns the word only if it's less than 6 letters long


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter((word) => {
    return word.length < 6;
});

console.log(shortWords);