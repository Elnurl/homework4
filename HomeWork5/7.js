var mySqrt = function (x) {
  let left = 0;
  let right = x;
  //0  ve 1 in kvadrati ozleridi ona gore 2 e gore muqaise edilir
  if (x < 2) return x;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid > x) right = mid;
    else left = mid + 1;
  }
  return left - 1;
};
