//task 1

let langauge = "JavaScript";
let score = 10;

let length=10;
let width=5;

function area(length, width){
    // console.log("the area of the rectangle is " +length*width + " where");
    console.log(`the area of the rectangle is ${length * width} where it was calculated `);

}

area(length,width);

let num1 = 10;
let num2 = 4;
const remainderValue = num1%num2;

function remainder(num1,num2){
    // console.log(`${num1} remainder $P{num1%num2}`);
    console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)} remainder ${remainderValue}`);
}

remainder(num1,num2);

//task 2

//1 
let array = [1,3.5,"james"];  //array

let person = {    //object
    fname : "john",
    age :   21,
    height: 6.2,
    eyeColor: "blue"
}
console.log(typeof(array[0]));
console.log(typeof(array[1]));
console.log(typeof(array[2]));

console.log(typeof(person.fname));
console.log(typeof(person.age));
console.log(typeof(person.height));
console.log(typeof(person.eyeColor));

let mix = [1,"kevin"];

console.log(typeof mix[0]);//number
console.log(typeof mix[1]);//string

let x = null;
let y;







