//1. `.length`
 //  * Create an array called `cars` which consists of 4 different types of cars as String type. The first car type should be Ford.
 //  * Console.log the length of the array.
 //  * Use `node main.js` to run the program.

const stringFormatter = require("stylelint/lib/formatters/stringFormatter");

const cars =["Ford", "Toyota", "Jeep", "Tesla"]
console.log("The length of the array is", cars.length);

//1. `.concat()`
//   * Create another array called `moreCars` with 4 more different types of cars. The last car type should be Honda.
//   * Use the `concat` method to combine the `cars` and `moreCars` arrays into another array called `totalCars`.
//   * Console.log the new array.
//   * Run the program.

const moreCars =["Subaru","Toshiba","Lexus","Honda"]
totalCars = cars.concat(moreCars)

console.log(totalCars)

//1. `.indexOf()` and `.lastIndexOf()`
//   * Use the `indexOf` method to console.log the index of `Honda` in `totalCars`.
//   * Use the `lastIndexOf` method to console.log the index of `Ford` in `totalCars`.
//   * Run the program.

console.log(totalCars.indexOf("Honda"))
console.log(totalCars.lastIndexOf("Ford"))

//1. `.join()`
//   * Use the `join` method to convert the array `totalCars` into a string called `stringOfCars`.
//   * Console.log `stringOfCars`.
//   * Run the program.

const stringOfCars = totalCars.join()
console.log(stringOfCars)

//1. `.split()`
//   * Use the `split` method to convert `stringOfCars` 
//  into an array called `carsFromString`.
//   * Console.log the array you just created.
//   * Run the program.

carsFromString = stringOfCars.split(",")
console.log(carsFromString)

// 1. `.reverse()`
//    * Use the `reverse` method to create an array `carsInReverse` which is the array `totalCars` in reverse.
//    * Console.log `carsInReverse`.
//    * Run the program.

const carsInReverse = totalCars.reverse();
console.log('reversed:', carsInReverse)

// 1. `.sort()`
//    * Use the `sort` method to put the array `carsInReverse` into alphabetical order.
//    * Based on the types of cars you used, predict which item in the array should be at index 0.
//    * Use the following code to confirm or reject your prediction: `console.log(carsInReverse.indexOf('yourPrediction'));`

carsInReverse.sort();

console.log (carsInReverse);
console.log(carsInReverse.indexOf('Ford'));

// 1. `.slice()`
//    * Create a `pets` array by copy/pasting the following: `const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']`
//    * Use the `slice` method to create a `reptiles` array with `snake` and `lizard` from the `pets` array.
//    * Console.log the `reptiles` array and run the program.
//    * Now console.log the `pets` array and run the program. Why do you think `snake` and `lizard` are still in the original array?

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

// console.log(pets.slice(4,6))

const reptiles = pets.slice(4,6);
console.log("list of reptile pets are" , reptiles)

console.log(pets)

// 1. `.splice()`
//    * Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
//    * Console.log `removedReptiles` and `pets` and run the program.
//    * Go back and add the string `'hamster'` in as a third parameter to your `splice` method, then run the program again and notice how the `pets` array has changed. Do you see how that works?

const removedReptiles = pets.splice(4,2);

console.log("pets array is", pets)
console.log("removed pets from array are" , removedReptiles)

// 1. `.pop()`
//    * Use the `pop` method to remove the last item from the `pets` array, saving it to a variable called `removedPet`.
//    * Console.log `removedPet` and `pets` and run the program.

const removedPet = pets.pop();

console.log ('pet removed was' ,removedPet);
console.log('new pets list ', pets);

// 1. `.push()`
//    * Use the `push` method to add `removedPet` back to the end of the `pets` array.
//    * Console.log `pets` and run the program.

pets.push(removedPet);
console.log('restored pets list' ,pets);

// 1. `.shift()`
//    * Use the `shift` method to remove and console.log the first item in the `pets` array.

pets.shift()

console.log('new list removing the first pet',pets)

// 1. `.unshift()`
//    * Use the `unshift` method to add the string `'turtle'` as the first item in the `pets` array.
//    * Console.log the `pets` array and run the program. If all went according to plan, you should see `['turtle', 'cat', 'fish', 'rabbit', 'hamster', 'bird']`.

pets.unshift('turtle');
console.log('new list with new pet added ' ,pets);


// 1. `.forEach()`
//    * Create a numbers array by copy/pasting the following: `const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]`
//    * Write code that will add 2 to each item in the array `numbers`.
//       * `forEach` requires a function to be passed into it as its first argument.
//       * Build a function called `addTwo` that can take in num, index, and arr as parameters—`(num, index, arr)`—and returns `num + 2` at each `index` of the `arr`.
//       * Use `.forEach()` on the `numbers` array, passing in your freshly built function `addTwo` as an argument, in order to add 2 to each number in the array.
//    * Console.log `numbers` and run the program.

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
  arr[index]= num + 2
}

numbers.forEach(addTwo)

console.log(numbers)