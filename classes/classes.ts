class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log('driving.');
  }
}

const v = new Vehicle('blue');
console.log(v.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private honk(): void {
    console.log('peep');
  }

  whenToHoot(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(5, 'red');
car.whenToHoot();
console.log(car.wheels);
