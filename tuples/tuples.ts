const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//Type alias
type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 40];
