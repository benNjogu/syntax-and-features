const carMakers = ['ford', 'toyota', 'chevy'];

const names: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [['note'], ['vitz'], ['formatik'], ['audi']];

const namesByOrigin: string[][] = [];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
//carMakers.push(100);

//Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDate: (Date | string)[] = [new Date(), '2023-10-10'];
