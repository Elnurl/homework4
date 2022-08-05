var containsDuplicate = function (nums) {
  let strg = {};
  for (let i = 0; i < nums.length; i++) {
    if (strg[nums[i]] === undefined) {
      strg[nums[i]] = "salam";
    } else {
      return true;
    }
  }
  return false;
};
nums = [1, 4, 2, 3, 1, 3, 5];
console.log(containsDuplicate(nums));
