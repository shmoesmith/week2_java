/*
1.  Sum two numbers

  - Given any two numbers write a function that will return the sum

  function addNumbers(number1, number2){
  result = number1 + number2;
  console.log(result)}

addNumbers(1, 5)

2.  Sum an array

  - Given any array write a function that will sum the array and return the sum

  var myNumbers = [1, 2, 3]

var sum = myNumbers.reduce( function(total, amount){
  return total + amount
});
console.log(sum)


3.  Fahrenheit to Celsius 

  - Write a function that takes in a F temp, converts it to C and returns the value


function fToC(fTemp){
  var cTemp = ((fTemp - 32)*5)/9;
  console.log(cTemp);
}

fToC(70)

4.  Vowel Count

  - Write a function that takes a string and returns the number of vowels in the string

5.  Dice

  - Write a function that rolls 2-6 sided dice and returns the two values in an array


function diceRoll(){
  var dice1 = Math.floor(Math.random() * 7)
  var dice2 = Math.floor(Math.random() * 7)
  var diceResults = []
  
  diceResults.push(dice1)
  diceResults.push(dice2)
  
  console.log(diceResults); 
}

diceRoll()

6.  Average of an array

  - Write a function that takes in any array and returns the Avg.

7.  Fizzbuzz

  - Write a function that loops over numbers from 1-100 with the following rules

    -  If the number is divisible by 3 print "Fizz"

    - If the number is divisible by 5 print "Buzz"

    - If the number is divisible by both 3 & 5 print "FizzBuzz"

    - Otherwise, print the number

    HINT:  console.log to print.  Use % (modulus to do remainder math)

8.  Factorial

  - Write a function that takes in any number and returns the factorial value

  For more info: https://en.wikipedia.org/wiki/Factorial (Links to an external site.)

9.  Fibonacci

  - Write a function that takes in an integer

  - Find the # in the Fibonacci sequence that is in the index described by the integer

   Example: fib(6) would return 8.

   For more info on Fibonacci see https://en.wikipedia.org/wiki/Fibonacci_number (Links to an external site.) (Links to an external site.)

Bonus: Roman Numeral Converter
  - Write a function that takes a normal number and returns the roman numeral equivalent.  Some relevant info:

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice
these letters have lots of straight lines and are hence easy to hack
into stone tablets).

```
1 => I
10 => X
7 => VII
```

There is no need to be able to convert numbers larger than about 3000.
(The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each
digit separately starting with the left most digit and skipping any
digit with a value of zero.

To see this in practice, consider the example of 1990.

In Roman numerals 1990 is MCMXC:

1000=M
900=CM
90=XC

2008 is written as MMVIII:

2000=MM
8=VIII */