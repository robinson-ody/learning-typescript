enum Role {
  SUPER_ADMIN = 1,
  ADMIN,
  AGENT,
  SUB_AGENT,
}

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

if (person.role === Role.SUPER_ADMIN) console.log(`Is a super admin!`);
