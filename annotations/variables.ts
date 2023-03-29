const apples: number = 5;
let speed: string = 'fast';

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let ages: number[] = [15, 18, 22, 24];

//classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1) Function that returns the 'any' type.
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

//3) When a variable's type cannot be inferred correctly
let nums = [-10, -1, 12];
let numsAboveZero: boolean | number = false;

for (let i = 0; i < nums.length; i++) {
  numsAboveZero = nums[i];
}
