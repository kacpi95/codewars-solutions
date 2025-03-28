//                                                      Zadanie 1
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade(s1, s2, s3) {
// 	const sum = Math.floor((s1 + s2 + s3) / 3);

// 	if (sum >= 90 && sum <= 100) {
// 		return "A";
// 	} else if (sum >= 80 && sum < 90) {
// 		return "B";
// 	} else if (sum >= 70 && sum < 80) {
// 		return "C";
// 	} else if (sum >= 60 && sum < 70) {
// 		return "D";
// 	} else {
// 		return "F";
// 	}

// }
// getGrade(10, 10, 10);

//    Zadanie 2
// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

// function betterThanAverage(classPoints, yourPoints) {
// 	// Your code here
// 	const personTab =
// 		classPoints.reduce((sum, num) => sum + num, 0) / classPoints.length;

// 	if (yourPoints > personTab) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//    Zadanie 3
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr) {
// 	return arr.filter((element, index) => index % 2 === 0);
// }
//    Zadanie 4
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr(n, s) {
// 	return s.repeat(n);
// }
//    Zadanie 5
// Given an array of integers, return a new array with each value doubled.

// function maps(x) {
// 	return x.map((num) => num * 2);
// }
//    Zadanie 6
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// const quarterOf = (month) => {
// 	if (month >= 1 && month <= 3) {
// 		return 1;
// 	} else if (month >= 4 && month <= 6) {
// 		return 2;
// 	} else if (month >= 7 && month <= 9) {
// 		return 3;
// 	} else if (month >= 10 && month <= 12) {
// 		return 4;
// 	}
// };
//    Zadanie 7
// Even or Odd Check
// Create a function that takes a number as input and checks whether the number is even or odd. Return the string "even number" for even numbers and "odd number" for odd numbers.

// const isEven = (num) => {
// 	if (num % 2 === 0) {
// 		return "even number";
// 	} else {
// 		return "odd number";
// 	}
// };
// isEven();
//    Zadanie 8
// Number Comparison
// Write a function that checks a number and returns whether it is:

// Equal to zero,
// Greater than zero,
// Less than zero.
// const checkNumber = (num) => {
// 	if (num === 0) {
// 		return "number equal to 0";
// 	} else if (num > 0) {
// 		return "greater than 0";
// 	} else if (num < 0) {
// 		return "less than zero";
// 	}
// };
// checkNumber();
//    Zadanie 9
// Simple Calculator
// Create a calculator function that takes two numbers and an operator (+, -, *, /). The function should return the result of the operation based on the operator. If the operator is invalid or division by zero is attempted, return an appropriate error message.
// const calculator = (a, b, operator) => {
// 	switch (operator) {
// 		case "+":
// 			return `${a + b} `;
// 			break;
// 		case "-":
// 			return `${a - b}`;
// 			break;
// 		case "*":
// 			return `${a * b}`;
// 			break;
// 		case "/":
// 			if (b !== 0) {
// 				return `${a / b}`;
// 			} else {
// 				return "you can't divide by 0";
// 			}
// 			break;
// 		default:
// 			return "unknown operator";
// 	}
// };
// calculator();
//    Zadanie 10
// //Write a JavaScript program that iterates from 1 to 50 and:
// Prints "Fizz" for numbers divisible by 3.
// Prints "Buzz" for numbers divisible by 5.
// Prints "FizzBuzz" for numbers divisible by both 3 and 5.
// Prints the number itself if it’s not divisible by 3 or 5.

// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else {
//     console.log(i);
//   }
// }
//
//    Zadanie 11
// Write a JavaScript function that takes a number as input and returns the number reversed.
// let NumbersOne = [1, 2, 3, 4, 5, 6];
// let NumbersTwo = [5, 4, 3, 2, 1];
// const reverseNumbers = NumbersOne.reverse();
// console.log(reverseNumbers);

//    Zadanie 12
// Create an object called car with the following properties:
// brand (car brand),
// model (model),
// year (manufacturing year),
// color (color).
// const car = {
//   brand: 'bmw',
//   model: 'x5',
//   year: 2020,
//   color: 'black',
//   getInfo: function () {
//     return `${this.brand} ${this.model} ${this.year} ${this.color}`;
//   },
// };
// console.log(car.getInfo());

//    Zadanie 13
// Create an object person that contains:
// firstName (first name),
// lastName (last name),
// age (age),
// greet() – a method that prints a greeting, e.g., "Hi, my name is [firstName] [lastName] and I am [age] years old."
// Call the greet() method on the person object.
// const person = {
//   firstname: 'kacper',
//   lastName: 'Nowak',
//   age: 20,
//   greet: function () {
//     return `Hello my name is ${this.firstname} ${this.lastName} I am ${this.age} years old`;
//   },
// };
// console.log(person.greet());

//    Zadanie 14
// Exercise 3: Nested Objects
// Create an object book that contains:
// title (book title),
// author (author),
// publisher (an object with properties name (publisher name) and year (publishing year)).
// Print the book's title, author, and publisher name.
// const book = {
//   title: 'Hobbit',
//   author: 'Tolkien',
//   publisher: { name: 'Allen & Unwin', year: 1937 },
//   ret: function () {
//     return `${this.title} ${this.author}, published by ${this.publisher.name} ${this.publisher.year}`;
//   },
// };
// console.log(book.ret());
//    Zadanie 15
// Create an object person with properties:

// name,
// age,
// country.
// Use a for...in loop to print all the properties and their values.
// const person = {
//   name: 'Kacper',
//   age: 20,
//   country: 'Poland',
// };
// for (let data in person) {
//   console.log(`${data}: ${person[data]}`);
// }
//    Zadanie 16
//Create an object person with properties name, age, and city. Then, log it to the console.
// const person = {
//   name: 'Kacper',
//   age: 20,
//   city: 'Wrocław',
//   data: function () {
//     return `name: ${this.name}, age: ${this.age}, city: ${this.city}, job: ${this.job}`;
//   },
// };
// console.log(person.data());
// //Add a new property job to the person object and then update its value.
// person.job = 'IT';
// console.log(person.data());
// // //Create an array users containing multiple objects representing users with properties id, name, and email.
// // Write a function findUserById(users, id) that returns the user object with the given id.
// const users = [
//   { id: 1, name: 'Kamil', age: 12, email: 'kamil@gmail.com' },
//   { id: 2, name: 'Adrian', age: 9, email: 'adrian@gmail.com' },
//   { id: 3, name: 'Daria', age: 20, email: 'daria@gmail.com' },
// ];
// function findUserById(users, id) {
//   return users.find((el) => el.id === id) || null;
// }
// console.log(findUserById(users, 2));

// // Write a function sortUsersByAge(users) that sorts an array of user objects by age.
// function sortUsersByAge(users) {
//   return users.sort((a, b) => a.age - b.age);
// }
// console.log(sortUsersByAge(users));
//    Zadanie 17
//Create an object car with the following properties:
// brand (string) – car brand
// model (string) – car model
// year (number) – production year
// Log the object to the console.
// const car = { brand: 'BMW', model: 'X7', year: 2025 };
// console.log(car);
// // Add a new property mileage (number) to the car object.
// // Change its value and log the updated object to the console.
// car.mileage = 100;
// console.log(car);
// // Write a function logCarDetails(car) that:
// // Takes a car object as an argument.
// // Logs all its properties in the format key: value.
// // Test the function with the car object.
// function logCarDetails(car) {
//   return `brand: ${car.brand}, model: ${car.model}, year: ${car.year}, mileage: ${car.mileage} `;
// }
// console.log(logCarDetails(car));
// // Create an array cars containing multiple objects with the following properties:
// // brand (string)
// // model (string)
// // year (number)
// // mileage (number)
// // Write a function findCarByBrand(cars, brand) that:
// // Takes an array of cars and a brand name.
// // Returns the first car object that matches the brand or null if not found.
// // Test the function.
// const cars = [
//   { brand: 'audi', model: 'X8', year: 2020, mileage: 150 },
//   { brand: 'toyota', model: 'aygo', year: 2009, mileage: 250 },
//   { brand: 'nissan', model: 'patrol', year: 1999, mileage: 90 },
// ];
// function findCarByBrand(cars, brand) {
//   return cars.find((el) => el.brand === brand) || null;
// }
// console.log(findCarByBrand(cars, 'audi'));
// // Write a function sortCarsByYear(cars) that:
// // Sorts the cars array in ascending order by the year property.
// // Test the function.
// function sortCarsByYears(cars) {
//   return cars.sort((a, b) => a.year - b.year);
// }
// console.log(sortCarsByYears(cars));
//    Zadanie 18
// Create an object book with the following properties:
// title (string) – book title
// author (string) – book author
// year (number) – publication year
// Log the object to the console.
// const book = { title: 'Hobbit', author: 'Tolkien', year: 1937 };
// console.log(book);
// // Add a new property pages (number) to the book object.
// // Change its value and log the updated object to the console.
// book.pages = 400;
// console.log(book);
// // Write a function logBookDetails(book) that:
// // Takes a book object as an argument.
// // Logs all its properties in the format key: value.
// // Test the function.
// function logBookDetails(book) {
//   for (const key in book) {
//     console.log(`${key}: ${book[key]}`);
//   }
// }
// logBookDetails(book);
// // Create an array library containing multiple book objects with the following properties:
// // title, author, year, pages
// // Write a function findBookByTitle(library, title) that:
// // Returns the book object matching the given title or null if not found.
// // Test the function.
// const library = [
//   { title: 'Hobbit', author: 'Tolkien', year: 1937, pages: 400 },
//   { title: 'Harry Potter', author: 'Rovling', year: 2000, pages: 808 },
//   { title: 'Dune', author: 'Herbert', year: 1965, pages: 412 },
// ];

// function findBookByTitle(library, title) {
//   return library.find((book) => book.title === title) || null;
// }

// console.log(findBookByTitle(library, '1984'));
// // Write a function sortBooksByYear(library) that:
// // Sorts the library array in ascending order by the year property.
// // Test the function.
// function sortBooksByYear(library) {
//   return [...library].sort((a, b) => a.year - b.year);
// }

// console.log(sortBooksByYear(library));
//    Zadanie 19
// Create a constructor function Person that takes the following parameters:
// name (string) – person’s name
// age (number) – person’s age
// city (string) – person’s city
// Inside the function, use this to assign these values to the new object.
// Create an instance of Person and log it to the console.
// function Person(name, age, city) {
//   const personElement = this;
//   personElement.name = name;
//   personElement.age = age;
//   personElement.city = city;
//   personElement.greet = function () {
//     return `Cześć, jestem ${personElement.name} z ${personElement.city}`;
//   };
// }
// const personOne = new Person('Kacper', 30, 'Wroclaw');
// console.log(personOne);
// // Add a method greet() to Person.prototype that:
// // Returns a string in the format: "Hi, I'm [name] from [city]!".
// // Call the method on an instance and log the result.
// console.log(personOne.greet());
// Create an object car with the following properties:
// brand (string)
// model (string)
// year (number)
// getInfo() – a method that returns a string in the format:
// "This car is a [year] [brand] [model]."
// Call getInfo() and log the result.
// const car = {
//   brand: 'Audi',
//   model: 'Q5',
//   year: 2020,
//   getInfo: function () {
//     return `Ten samochód to ${this.year}, ${this.brand}, ${this.model}`;
//   },
//   delayedInfo: function () {
//     setTimeout(() => {
//       console.log(this.getInfo());
//     }, 1000);
//   },
// };
// console.log(car.getInfo());
// // Modify car by adding a new method delayedInfo(), which:
// // Uses setTimeout to log the car's info after 1 second.
// // Fix the issue with this so it correctly refers to the car object.
// // Test the method.
// car.delayedInfo();
// // Create a class Book with the following properties:
// // title
// // author
// // year
// // Add a method getSummary() that returns:
// // "Title: [title], Author: [author], Year: [year]"
// // Create an instance of Book and log getSummary().
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `Tytuł ${this.title}, Autor: ${this.author}, Rok: ${this.year}`;
//   }
// }
// const newBook = new Book('Lord of the Rings', 'Tolkien', 1920);
// console.log(newBook.getSummary());
//    Zadanie 20
// Create a class called Animal with a constructor that takes the following parameters:
// name (string) – the name of the animal
// species (string) – the species of the animal
// The constructor should assign values to this.name and this.species.
// Create an instance of the class and log it to the console.
// class Animal {
//   constructor(name, species) {
//     this.name = name;
//     this.species = species;
//   }
//   describe() {
//     return `This is a ${this.species}, named ${this.name}`;
//   }
//   static info() {
//     return `Animals are living beings`;
//   }
// }
// const newAnimal = new Animal('Leo', 'tiger');
// console.log(newAnimal);
// // Add a method describe() to Animal that returns a string:
// // "This is a [species] named [name]."
// // Call the method on an instance and log the result.
// console.log(newAnimal.describe());
// // Create a class Dog that inherits from Animal.
// // The Dog constructor should accept an additional parameter breed and assign it to this.breed.
// // Add a method bark() that returns "Woof! Woof!".
// // Create an instance of Dog and test both describe() and bark().
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name, 'Dog');
//     this.breed = breed;
//   }
//   bark() {
//     return `Woof! Woof!`;
//   }
//   get dogInfo() {
//     return `The dogs name is ${this.name} and its a ${this.breed}`;
//   }
//   set renameDog(newName) {
//     this.name = newName;
//   }
// }
// const newDog = new Dog('Leo', 'buldog');
// console.log(newDog.bark());
// console.log(newDog.describe());
// // Add a static method info() to Animal that returns "Animals are living beings.".
// // Call the method without creating an instance (Animal.info()).
// console.log(Animal.info());
// // Add to Dog:
// // A getter dogInfo that returns "The dog's name is [name] and it's a [breed]."
// // A setter renameDog(newName) that updates this.name.
// // Test both getter and setter on an instance.
// const myDog = new Dog('Aleks', 'buldog');
// myDog.renameDog = 'Zuzia';
// console.log(myDog.dogInfo);
// console.log(myDog.dogInfo);
// Zadanie 21
// Implement a simple E-commerce Order System using JavaScript classes with private fields and methods.
// Create the Product class
// Define a class Product with properties:
// name (string)
// price (number)
// Add a method getInfo(), which returns "Product: [name], Price: $[price]".
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   getInfo() {
//     return `Product: ${this.name}, Price: ${this.price}`;
//   }
// }
// // Create the Order class
// // Define an Order class with a private array #products to store products.

// // The constructor initializes an empty #products array.
// // Implement addProduct(product), which adds a product to the #products array.
// // Create a method getTotalPrice(), which calculates and returns the total price of all products in the order.
// class Order {
//   #products = [];
//   addProduct(product) {
//     if (product instanceof Product) {
//       this.#products.push(product);
//     } else {
//       console.log('error');
//     }
//   }
//   getTotalPrice() {
//     return this.#products.reduce((total, product) => total + product.price, 0);
//   }
// }
// // Create several Product instances.
// // Create an Order instance, add products to it, and log the total price.
// const product1 = new Product('mleko', 5);
// const product2 = new Product('cola', 10);

// const order = new Order();
// order.addProduct(product1);
// order.addProduct(product2);

// console.log(`Total price: ${order.getTotalPrice()}`);

// //    Zadanie 22
// // Create a class Employee with properties name, position, and salary.
// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }
//   getDetails() {
//     return `Employee: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
//   }
// }
// // Add a method getDetails() that returns:
// // "Employee: [name], Position: [position], Salary: $[salary]".

// // Create two employee instances and log their details.
// const emp1 = new Employee('kacper', 'Software Engineer', 75000);
// const emp2 = new Employee('Daria', 'Project Manager', 90000);
// console.log(emp1.getDetails());
// console.log(emp2.getDetails());
//    Zadanie 23
// Create a class Vehicle with properties:

// brand (string)
// model (string)
// year (number)
// class Vehicle {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   // Add a method getDetails() that returns:
//   // "Vehicle: [brand] [model], Year: [year]".
//   getDetails() {
//     return `Vehicle: ${this.brand} ${this.model}, Year: ${this.year}`;
//   }
// }
// // Create a subclass Car that extends Vehicle, adding a new property fuelType (string).

// // Modify getDetails() to include fuel type in the output.
// class Car extends Vehicle {
//   constructor(brand, model, year, fuelType) {
//     super(brand, model, year);
//     this.fuelType = fuelType;
//   }
//   getDetails() {
//     return `Car: ${this.brand} ${this.model}, Year: ${this.year}, Fuel Type: ${this.fuelType}`;
//   }
//   isElectric() {
//     return this.fuelType.toLowerCase() === 'electric';
//   }
// }
// // Create two car instances and log their details.
// // Add a method isElectric() in Car that returns true if fuelType is "electric", otherwise false.
// const car1 = new Car('Tesla', 'Model 3', 2023, 'Electric');
// const car2 = new Car('Toyota', 'Corolla', 2020, 'Diesel');

// console.log(car1.getDetails());
// console.log(car2.getDetails());
//    Zadanie 24
// Create an array movies containing several objects with properties: title, year, and rating.

// Write a function getTopRatedMovies(movies) that returns movies with a rating higher than 8.

// Test the function with a list of movies and display the top-rated ones.
// const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "Titanic", year: 1997, rating: 7.8 },
//   { title: "The Dark Knight", year: 2008, rating: 9.0 },
//   { title: "The Lord of the rings", year: 2002, rating: 9.4 },
// ];
// function getTopRatedMovies(movies) {
//   return movies.filter(movie => movie.rating > 8);
// }
// console.log(getTopRatedMovies(movies));
//    Zadanie 25
// Create an array inventory containing objects that represent products with id, name, quantity, and price.

// Write a function getInventoryValue(inventory) that returns the total value of the inventory (sum of quantity * price for each item).

// Test the function with a sample inventory.
// const inventory = [
//   { id: 1, name: "Laptop", quantity: 2, price: 5000 },
//   { id: 2, name: "Phone", quantity: 5, price: 3500 },
//   { id: 3, name: "Tablet", quantity: 3, price: 1000 },
// ];
// function getInventoryValue(inventory) {
//   return inventory.reduce((total, item) => total + item.quantity * item.price, 0);
// }
// console.log(getInventoryValue(inventory));
//    Zadanie 26
// Create an array students containing student objects with properties: name and grade (a letter grade like "A", "B", etc.).

// Write a function sortStudentsByGrade(students) that sorts the students in order of their grade (A to F).

// Test the function and display the sorted list of students.
// const students = [
//   { name: "Alicja", grade: "B" },
//   { name: "Bruno", grade: "A" },
//   { name: "Czesław", grade: "C" },
//   { name: "Dawid", grade: "A" },
// ];
// function sortStudentsByGrade(students) {
//   const gradeOrder = ["A", "B", "C", "D", "E", "F"];
//   return students.sort((a, b) => gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade));
// }
// console.log(sortStudentsByGrade(students));
//    Zadanie 27
// Create two arrays: array1 and array2. Merge them into a new array mergedArray without using the .concat() method.
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = [...array1, ...array2];

// console.log(mergedArray);
//    Zadanie 28
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//     this.AmountWidget = new AmountWidget();
//   }
//   render() {
//     console.log(`Product: ${this.name}, Price: ${this.price}`);
//   }
//   getTotalPrice() {
//     return this.price * this.AmountWidget.value;
//   }
// }

// class AmountWidget {
//   constructor() {
//     this.value = 1;
//   }
//   increase() {
//     this.value++;
//   }
//   decrease() {
//     if (this.value > 0) {
//       this.value--;
//     }
//   }
// }
// const products = [
//   new Product('Pizza', 20),
//   new Product('Burger', 30),
//   new Product('Salad', 10),
// ];
// for (const product of products) {
//   product.render();
//   product.AmountWidget.increase();
//   product.AmountWidget.increase();
//   console.log(`Total price for ${product.name}: ${product.getTotalPrice()}`);
// }
//    Zadanie 29
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
  getInfo() {
    return `Book: ${this.title}, by ${this.author}, Price ${this.price}`;
  }
}


