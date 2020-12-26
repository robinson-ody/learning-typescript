"use strict";
const add = (n1, n2, resultType) => {
    if (resultType === 'number')
        return +n1 + +n2;
    else
        return n1.toString() + n2.toString();
};
console.log(add('5', 2, 'number'));
console.log(add('5', 2, 'string'));
//# sourceMappingURL=type-union-aliases.js.map