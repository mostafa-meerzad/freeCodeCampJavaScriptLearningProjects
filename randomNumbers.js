let num = 5;
let max = 10;
let min = 1;

let rand = Math.random(); // generates a random number in range of 0 to 1 except 1.
let randUpToNum = Math.floor(rand * num); // random upto a number except the last number.
let randInRange = Math.floor(rand * (max - min + 1) + 1)  // random in a range of numbers both included.

