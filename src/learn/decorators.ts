function Logger(logString: string) {
  console.log(`LOGGER`);

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log(`WITH TEMPLATE`);

  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      const headingOne = hookEl.querySelector('h1');
      if (headingOne) headingOne.textContent = p.name;
    }
  };
}

@Logger('LOGGING - PERSON')
@WithTemplate(`<h1>My Person Object</h1>`, 'app')
class Person {
  name = 'Robin';

  constructor() {
    console.log(`Creating person object...`);
  }
}

const pers = new Person();
console.log({ pers });

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const adjMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: true,

    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjMethod;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector('button');
if (btn) btn.addEventListener('click', p.showMessage);
