// create a variable called surname with a string as it's value. The value cannot be changed.
const surname = "Smith";
console.log(surname);

// create a variable called isActive with a boolean as value. The value can be changed.
let isActive = true;

// create 2 variables(numberOne and numberTwo) and assign numbers as value. Create a function that will compare 2 numbers.
// Will have to return the following message: "a" is bigger than "b". Replace a and b with actual numbers in the message.
// Call the function and pass numberOne and numberTwo as arguments.

const numberOne = 33;
const numberTwo = 12;

const compare = (a, b) => {
  if (a > b) {
    return `${a} is bigger than ${b}`;
  } else {
    return `${b} is bigger than ${a}`;
  }
};
console.log(compare(numberOne, numberTwo));

// create an array called list which will contain 5 items(apple, orange, pear, strawberry, kiwi);
const list = ["apple", "orange", "pear", "strawberry", "kiwi"];

// loop through the list array and print in console each item.
list.forEach((item) => console.log(item));

// loop through the list array and print in console all items except "pear".
list.forEach((item) => {
  if (item !== "pear") {
    console.log(item);
  }
});

//filter all items from the list array that have at least 5 characters.
const listFilter = list.filter((item) => item.length >= 5);
console.log(listFilter);

// create and array of objects called persons which will contain 5 persons details
// (name(string),surname(string),age(number), chlidren(number),childrensName(array of strings))
let persons = [
  {
    name: "Adrian",
    surname: "Smith",
    age: 40,
    children: 4,
    childrensName: ["Eduard", "Victor", "Stefan", "Sophia"],
  },
  {
    name: "Eric",
    surname: "Harris",
    age: 45,
    children: 3,
    childrensName: ["Noah", "Olivia", "Emma"],
  },
  {
    name: "William",
    surname: "Scott",
    age: 32,
    children: 2,
    childrensName: ["Oliver", "Ava"],
  },
  {
    name: "James",
    surname: "Nelson",
    age: 38,
    children: 3,
    childrensName: ["Benjamin", "Amelia", "Isabella"],
  },
  {
    name: "Lucas",
    surname: "Mitchell",
    age: 23,
    children: 2,
    childrensName: ["Henry", "Mia"],
  },
];
console.log(persons);
//loop through persons array and find the youngest person
const youngestPerson = persons.sort(function (a, b) {
  return a.age - b.age;
})[0];
console.log(youngestPerson.age);

const youngestPerson2 = persons.sort((a, b) => a.age - b.age); // same but with arrow function.
console.log(youngestPerson2[0].age);
//loop through the persons array and filter the persons which are older then 25 years.
const personsOlder = persons.filter((persons) => persons.age > 25);
console.log(personsOlder);

//loop through persons array and find the one with the name: adrian
const personName = persons.find((person) => person.name == "Adrian");
console.log(personName);

// create a function called findOldest that will take an array as argument. This function will loop through array and return the oldest item.
// (Note: all arrays items will be objects and have a key called age).
// call findOldest function and pass persons array as argument.

// create a function called firstItem that will have an array as argument.
// This function should return the first item of that array.
// Call firstItem function and pass list array as argument.
// call firstItem function and pass persons array as arguments.
