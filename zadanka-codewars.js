// 1. Your task is to find the first element of an array that is not consecutive. By not consecutive we mean 
// not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {
  for (let i = 0; i<arr.length-1; i++) {
     let number = arr[i+1] - arr[i]
        if (number !== 1) {
            return arr[i+1]
        }
    }   return null 
}

// 2. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    let score = 1;
        for (let i=0; i<x.length; i++) {
            score = score * x[i]
        } return score
  }

// 3. Create a method to see whether the string is ALL CAPS.

  function isUpperCase(a) {
    if (a === a.toUpperCase()){
      return true
    } else {
      return false;
    }
  }

// 4. Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let newStr = str.split("").reverse().join("");
      return newStr;
    }

// 5. You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30) {
    let totalPrice = 0;
        for (let i=0; i<name.length; i++) {
            totalPrice = totalPrice + price
        } 
    return totalPrice;
  } 

// 6. Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let sum = 0;
    for (let i=0; i<numbers.length; i++){
        sum = sum + numbers[i] * numbers[i]
    }
    return sum
}

// 7. Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

function distinct(a) {
    return [...new Set(a)];
  }

// 8. The function is not returning the correct values. Can you figure out why?
// Example (Input --> Output ):
// 3 --> "Earth"

// Dodałam "break"

function getPlanetName(id){
    var name;
       switch(id){
        case 1:
          name = 'Mercury';
          break;
        case 2:
          name = 'Venus';
          break;
        case 3:
          name = 'Earth';
          break;
        case 4:
          name = 'Mars';
          break;
        case 5:
          name = 'Jupiter';
          break;
        case 6:
          name = 'Saturn';
          break;
        case 7:
          name = 'Uranus';
          break;
        case 8:
          name = 'Neptune'
          break;
      }
    return name;
  }

// 9. Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

let countSheep = function (num){
    let str = ''
    for (i = 1; i <= num; i++ ) {
        str = str + `${i} + sheep...`
    }
  }

// 10. It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1,-1) 
}

// 11. It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
    if (bonus == true) {
        salary = salary * 10
    } else {
        salary = salary
    } 
    return `\u00A3${salary}`
}