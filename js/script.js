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
