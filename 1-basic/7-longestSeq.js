/*
🔹 Problem (simple words)
Given an array of numbers, find the length of the longest sequence of consecutive numbers.
Example
nums = [100, 4, 200, 1, 3, 2]
👉 Consecutive sequence: 1, 2, 3, 4
👉 Answer: 4
❗ Rule
Must be O(n) time
No sorting
*/

function longSequence(arr) {
  let set = new Set(arr);
  let longest = 0;

  for (let ele of arr) {
    if (!set.has(ele - 1)) {
      let currentEle = ele;
      let counts = 1;

      while (set.has(currentEle + 1)) {
        currentEle++;
        counts++;
      }
      longest = Math.max(longest, counts);
    }
  }
  return longest;
}

let res = longSequence([100, 4, 200, 1, 3, 2]);

console.log(res);
