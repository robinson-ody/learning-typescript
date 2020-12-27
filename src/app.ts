type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type elevatedEmployee = Admin & Employee;

let e1: elevatedEmployee;

e1 = {
  name: 'Robin',
  privilege: ['deploy-apps'],
  startDate: new Date(),
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;

const addFn = (a: Combineable, b: Combineable) => {
  // if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
  // return a + b;
  return Number(a) + Number(b);
};

type UnknownEmployee = Admin | Employee;

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log(emp.name);
  if ('privilege' in emp) console.log(emp.privilege);
  if ('startDate' in emp) console.log(emp.startDate);
};

printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Robinson Ody', startDate: new Date() });

class Car {
  drive() {
    console.log(`Driving a car...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving a truck...`);
  }

  loadCargo(amount: number) {
    console.log(`Loading ${amount} kg of cargo...`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
};

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;

    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log(`Running at speed ${speed} km/h`);
};

moveAnimal({ type: 'bird', flyingSpeed: 100 });
moveAnimal({ type: 'horse', runningSpeed: 50 });
