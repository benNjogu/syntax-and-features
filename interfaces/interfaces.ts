interface Reportable {
  summary(): string;
}

const drink = {
  color: 'brown',
  carbonated: 'true',
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

let benz = {
  v_name: 's-class',
  year: 2021,
  broken: true,
  summary(): string {
    return 'This is the best car as long as luxury and comfort rings a bell';
  },
};

const printReport = (item: Reportable): void => {
  console.log(item.summary());
};

printReport(benz);
printReport(drink);
