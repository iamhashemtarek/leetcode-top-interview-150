let removeDuplicates = (arr) => {
  if (arr.length <= 2) {
    return arr.length;
  }

  let idx = 2;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[idx - 2]) {
      arr[idx++] = arr[i];
    }
  }

  return idx;
};

let arr = [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));

console.log(arr);
