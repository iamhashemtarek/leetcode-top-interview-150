/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = (s) => {
  //   let isP = true;
  s = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  //   for (let i = 0; i < s.length / 2; i++) {
  //     if (s[i] !== s[s.length - i - 1]) {
  //       isP = false;
  //     }
  //     if (!isP) {
  //       break;
  //     }
  //   }
  //   return isP ? true : false;

  let s2 = s.split("").reverse().join("");

  return s === s2 ? true : false;
};

let s = "0P";
console.log(isPalindrome(s));
