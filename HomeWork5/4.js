var guessNumber = function (n) {
  var randNum = Math.floor(Math.random() * 10);
  console.log("random:" + randNum);
  if (n == randNum) {
    return 0;
  } else if (n > randNum) {
    return 1;
  } else {
    return -1;
  }
};
console.log(guessNumber(10));
