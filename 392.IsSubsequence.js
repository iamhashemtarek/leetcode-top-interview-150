/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let short = 0;
  let long = 0;

  while (short < s.length) {
    if (s[short] === t[long]) {
      short++;
    }
    long++;

    if (long >= t.length) {
      break;
    }
  }

  return short == s.length;
};

let s = "abc";
let t = "ahbgdc";

console.log(isSubsequence(s, t));
