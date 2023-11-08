//task 1

// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.
let langauge = "JavaScript";
let score = 10;

// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
let length=10;
let width=5;

// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.
function area(length, width){
    // console.log("the area of the rectangle is " +length*width + " where");
    console.log(`the area of the rectangle is ${length * width} where it was calculated `);

}
area(length,width);






// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.
let num1 = 10;
let num2 = 4;
const remainderValue = num1%num2;
// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks
function remainder(num1,num2){
    // console.log(`${num1} remainder $P{num1%num2}`);
    console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)} remainder ${remainderValue}`);
}

remainder(num1,num2);

//task 2

// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
let array = [1,3.5,"james"];  //array

let person = {    //object
    fname : "john",
    age :   21,
    height: 6.2,
    eyeColor: "blue"
}
// 2. Once you’ve created the variables, display them to the console
console.log(array);
console.log(person);
// 3. Use the ‘typeof’ function to check each variable
console.log(typeof(array[0]));
console.log(typeof(array[1]));
console.log(typeof(array[2]));

console.log(typeof(person.fname));
console.log(typeof(person.age));
console.log(typeof(person.height));
console.log(typeof(person.eyeColor));

// 4. Create an array with numbers and strings. Comment what data type you expect this tobe. Then use the ‘typeof’ function on this array

let mix = [1,"kevin"];

console.log(typeof mix[0]);//number
console.log(typeof mix[1]);//string

// 5. Create a null variable and an undefined variable

let x = null;
let y;

//task 3
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!

function dollars(num){
 let num1 = num *0.054;
 return num1;
}

console.log("$"+dollars(1000));

function euros(num){
let num2 = num *0.051;
return num2;
}

console.log("Eur "+euros(1000));

function pounds(num){
    num3 = num*0.041;
    return num3;
}

console.log("#"+pounds(1000));

//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.

function vat(num){
    Vat1 = num * 0.15;
    return Vat1;
}

console.log('The amount after tax is R'+ vat(400));

//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.



let Num1st = 8;
let num2nd = 20;
let num3rd = 14;

function larger(){
    if(Num1st<num2nd){
        console.log(num2nd + " is the larger number");
    } else 
    {
        console.log(Num1st);
    }
}

larger(Num1st,num2nd);
 //  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)

function e_o(num){
even_odd = num;
if(even_odd%2 === 0){
    console.log("even number")
} else {
    console.log("odd number");
}
}

e_o(Num1st);

//  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.

function sortNumbersDescending(firstNum, secondNum, thirdNum) {
    if (firstNum >= secondNum && firstNum >= thirdNum) {
      if (secondNum >= thirdNum) {
        console.log(`Sorted numbers: ${firstNum}, ${secondNum}, ${thirdNum}`);
      } else {
        console.log(`Sorted numbers: ${firstNum}, ${thirdNum}, ${secondNum}`);
      }
    } else if (secondNum >= firstNum && secondNum >= thirdNum) {
      if (firstNum >= thirdNum) {
        console.log(`Sorted numbers: ${secondNum}, ${firstNum}, ${thirdNum}`);
      } else {
        console.log(`Sorted numbers: ${secondNum}, ${thirdNum}, ${firstNum}`);
      }
    } else {
      if (firstNum >= secondNum) {
        console.log(`Sorted numbers: ${thirdNum}, ${firstNum}, ${secondNum}`);
      } else {
        console.log(`Sorted numbers: ${thirdNum}, ${secondNum}, ${firstNum}`);
      }
    }
  }
  
 
  sortNumbersDescending(Num1st,num2nd,num3rd); 
 



