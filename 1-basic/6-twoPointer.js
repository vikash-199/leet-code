/*
🧠 Problem (simple words)
You are given two strings:
s → small string
t → big string
Check whether all characters of s appear in t in the same order
👉 Characters don’t need to be continuous, but order must be maintained.
Example
s = "abc"
t = "ahbgdc"
Output → true
 */

function seq(s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
}

let res = seq('abk', 'aykrbutyt');
console.log(res);
