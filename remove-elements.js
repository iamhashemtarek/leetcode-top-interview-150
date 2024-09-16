let removeElements = (arr, val) => {
  let cntr = 0;

  //number of elements which are not equal to val
  for (elem of arr) {
    if (elem != val) {
      cntr++;
    }
  }

  //remove all occurrences in-place
  for (let i = 0; i < cntr; i++) {
    let j = cntr;
    if (arr[i] == val) {
      if (arr[j] == val) {
        j++;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return cntr;
};

let arr = [3, 2, 2, 3];
let val = 3;

let c = removeElements(arr, val);
console.log(c);
console.log(arr);

arr = [0, 1, 2, 2, 3, 0, 4, 2];
val = 2;

c = removeElements(arr, val);
console.log(c);
console.log(arr);

arr = [0,4,4,0,4,4,4,0,2];
val = 4;

c = removeElements(arr, val);
console.log(c);
console.log(arr);