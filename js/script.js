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

//                              Zadanie 2
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
//                                 Zadanie 3
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// function removeEveryOther(arr) {
// 	return arr.filter((element, index) => index % 2 === 0);
// }
//                              Zadanie 4
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr(n, s) {
// 	return s.repeat(n);
// }
//                              Zadanie 5
// Given an array of integers, return a new array with each value doubled.

// function maps(x) {
// 	return x.map((num) => num * 2);
// }
//                              Zadanie 6
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
//                      Zadanie 7
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
//                              Zadanie 8
// Number Comparison
// Write a function that checks a number and returns whether it is:

// Equal to zero,
// Greater than zero,
// Less than zero.
const checkNumber = (num) => {
	if (num === 0) {
		return "number equal to 0";
	} else if (num > 0) {
		return "greater than 0";
	} else if (num < 0) {
		return "less than zero";
	}
};
checkNumber();
