let number = 376.5625;
console.log(number.toFixed(3)); //round upto given decimal
console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//
let guess = function (num) {
  let minimum = 1;
  let maximum = 10;
  let randNum = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  console.log(`\nRandom Number: ${randNum}`);
  if (randNum == num) {
    return true;
  } else return false;
};
let makeGuess = guess(2);
console.log(makeGuess);
