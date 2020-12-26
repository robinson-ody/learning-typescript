"use strict";
class Robin {
    constructor(age, job, email) {
        this.age = age;
        this.job = job;
        this.email = email;
        this.name = 'Robin';
    }
    greet(phrase) {
        console.log(phrase, `I am ${this.name}.`);
    }
    tellDetails() {
        const { age, job, email } = this;
        console.log({ age, job, email });
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new Robin(24, 'Web Designer & Programmer', 'robinson.ody@gmail.com');
        return this.instance;
    }
}
const robin = Robin.getInstance();
robin.name = 'Robinson';
console.log({ robin });
const sum1 = (a, b) => a + b;
const sum2 = (a, b, c) => {
    let result;
    result = a + b;
    if (c)
        result += c;
    return result;
};
//# sourceMappingURL=interface.js.map