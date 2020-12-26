interface Named {
  name: string;
}

interface CanGreet extends Named {
  greet(phrase: string): void;
}

class Robin implements CanGreet {
  private static instance: Robin;

  private constructor(private age: number, private job: string, private email: string) {}
  name = 'Robin';

  greet(phrase: string) {
    console.log(phrase, `I am ${this.name}.`);
  }

  tellDetails() {
    const { age, job, email } = this;
    console.log({ age, job, email });
  }

  static getInstance() {
    if (this.instance) return this.instance;
    this.instance = new Robin(24, 'Web Designer & Programmer', 'robinson.ody@gmail.com');
    return this.instance;
  }
}

const robin = Robin.getInstance();
robin.name = 'Robinson';
console.log({ robin });

type addFn1 = (a: number, b: number) => number;

interface addFn2 {
  (a: number, b: number, c?: number, d?: number): number;
}

const sum1: addFn1 = (a: number, b: number) => a + b;

const sum2: addFn2 = (a: number, b: number, c?: number) => {
  let result: number;
  result = a + b;
  if (c) result += c;
  return result;
};
