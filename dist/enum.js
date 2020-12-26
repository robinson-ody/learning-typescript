"use strict";
var Role;
(function (Role) {
    Role[Role["SUPER_ADMIN"] = 1] = "SUPER_ADMIN";
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role[Role["AGENT"] = 3] = "AGENT";
    Role[Role["SUB_AGENT"] = 4] = "SUB_AGENT";
})(Role || (Role = {}));
const person = {
    name: 'Robison Ody',
    age: 25,
    hobbies: ['Watching Netflix', 'Making Music'],
    role: Role.SUPER_ADMIN,
};
console.log(person.hobbies);
for (const hobby of person.hobbies) {
    console.log(hobby.toString());
}
if (person.role === Role.SUPER_ADMIN)
    console.log(`Is a super admin!`);
//# sourceMappingURL=enum.js.map