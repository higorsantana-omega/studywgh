var twoSum = function (nums, target) {
  let arr = [];
  for (let x = 0; x < nums.length; x++) {
    let sum = nums[x] + nums[x + 1];
    if (sum === target) {
      arr.push(nums[x + 1]);
      arr.push(nums[x]);
      break;
    }
  }
  return arr;
};

twoSum([3, 2, 4], 6);
