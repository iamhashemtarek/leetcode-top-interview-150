/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = (arr) => {
  let idx = 1;
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] != arr[i + 1]) {
      arr[idx++] = arr[i + 1];
    }
  }

  return idx;
};

//example
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
console.log(arr);
