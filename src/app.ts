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
