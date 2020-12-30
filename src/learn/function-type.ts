const addFuncType = (n1: number, n2: number): number => {
  return n1 + n2;
};

let combinedValue: (a: number, b: number) => number;
combinedValue = addFuncType;

console.log(combinedValue(1, 2));
