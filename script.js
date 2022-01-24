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

// create an array called list which will contian 5 items(apple, orange, pear, strawberry, kiwi);

// loop through the list array and print in console each item.

// create an object which will contain a brand, color and age. This object will be stored as a variable called car.

// create and array of objects called persons which will contain 5 persons details
// (name(string),surname(string),age(number), chlidren(number),childrensName(array of strings))

//loop through persons array and find the youngest person

//loop through the persons array and filter the persons which are older then 25 years.

//loop through persons array and find the one with the name: adrian

// create a function called findOldest that will take an array as argument. This function will loop through array and return the oldest item.
// (Note: all arrays items will be objects and have a key called age).
// call findOldest function and pass persons array as argument.

// create a function called firstItem that will have an array as argument.
// This function should return the first item of that array.
// Call firstItem function and pass list array as argument.
// call firstItem function and pass persons array as arguments.
