var maximumProduct = function (nums) {
  let r = Math.abs(nums);
  let a = nums.sort();
  let b = a.pop(a.slice(-1));
  let c = a.pop(a.slice(-2));
  let x = a.pop(a.slice(-3));
  let y = b * c * x;
  return r;
};
console.log(maximumProduct([1, 2, 5, 3]));
