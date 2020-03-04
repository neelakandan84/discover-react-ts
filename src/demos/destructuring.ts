const person = {
  firstName: 'John',
  lastName: 'Paxton',
};

// const firstName = person.firstName;
// const lastName = person.lastName;

const { firstName, lastName } = person;

function printPerson({firstName, lastName}: any) {
  console.log('First name: ', firstName);
  console.log('Last name: ', lastName);
}

export {};