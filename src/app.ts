const nama: Array<string> = ['asd', 'qwe'];

const promise: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('Resolved!');
  }, 3000);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Robin', hobbies: ['Making Music'] }, { age: 24 });

type Lengthy = {
  length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value!';
  const { length } = element;
  if (length === 1) description = 'Got 1 value.';
  if (length > 1) description = `Got ${length} value.`;
  return [element, description];
}

console.log(countAndDescribe('Hi!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ age: 1, height: '200' }, 'height'));
