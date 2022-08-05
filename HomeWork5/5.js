var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let left = 0;
  let right = nums.length - 1;
  let low = -1;
  let high = -1;
  while (left <= right) {
    const avarege = Math.floor((left + right) / 2);
    if (target <= nums[avarege]) {
      right = avarege - 1;
    } else {
      left = avarege + 1;
    }
  }
  low = left;
  left = 0;
  right = nums.length - 1;
  while (left <= right) {
    const avarege = Math.floor((left + right) / 2);
    if (target < nums[avarege]) {
      right = avarege - 1;
    } else {
      left = avarege + 1;
    }
    high = right;
  }
  return low < high ? [low, high] : [-1, -1];
};
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
