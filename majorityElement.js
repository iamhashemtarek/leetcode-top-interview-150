let majorityElement = (arr) => {
  let candidate = null;
  let count = 0;

  for (let elem of arr) {
    if (count == 0) {
      candidate = elem;
    }

    count += candidate == elem ? 1 : -1;
  }

  return candidate;
};

// Example usage:
let nums = [2, 2, 2, 2, 1, 1, 1];
console.log(majorityElement(nums)); // Output: 2
