let merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  if (m === 0) {
    for (let idx = 0; idx < n; idx++) {
      nums1[idx] = nums2[idx];
    }
    return;
  }

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

//case1
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

merge(nums1, m, nums2, n);
console.log("sorted array1 : ", nums1);

//case2
nums1 = [1];
nums2 = [];
m = 1;
n = 0;
merge(nums1, m, nums2, n);
console.log("sorted array2 : ", nums1);

//case 3
nums1 = [0];
nums2 = [1];
m = 0;
n = 1;
merge(nums1, m, nums2, n);
console.log("sorted array3 : ", nums1);

//case 4
nums1 = [2, 0];
nums2 = [1];
m = 1;
n = 1;
merge(nums1, m, nums2, n);
console.log("sorted array4 : ", nums1);
