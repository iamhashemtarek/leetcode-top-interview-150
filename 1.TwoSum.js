/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
  let hashObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashObj[target - nums[i]] === undefined) {
      hashObj[nums[i]] = i;
    } else {
      return [i, hashObj[target - nums[i]]];
    }
  }
};

let nums = [3,2,4]
let target = 6

console.log(twoSum(nums, target));

