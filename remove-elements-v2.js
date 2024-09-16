let removeElements = (arr, val) => {
  let k = 0;
  for (let i = 0; i<arr.length; i++) {
    if (arr[i] !== val) {
      arr[k++] = arr[i];
    }
  }

  return k;
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

arr = [0, 4, 4, 0, 4, 4, 4, 0, 2];
val = 4;

c = removeElements(arr, val);
console.log(c);
console.log(arr);
