type AddInput = number | string;

const add = (n1: AddInput, n2: AddInput, resultType: 'number' | 'string') => {
  if (resultType === 'number') return +n1 + +n2;
  else return n1.toString() + n2.toString();
};

console.log(add('5', 2, 'number'));
console.log(add('5', 2, 'string'));

// type User = { name: string; age: number };
// const robin: User = { name: '1', age: 2 };
