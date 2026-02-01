/*
Problem Statement:
Given an integer array nums, return an array answer such that
answer[i] is equal to the product of all the elements of nums except nums[i].
You must write an algorithm that runs in O(n) time.
Do not use division.
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

function product(arr) {
  let n = arr.length;

  let result = new Array(n).fill(1); //[1,1,1..]

  //left product
  let left = 1;
  for (let i = 0; i < n; i++) {
    result[i] = left;
    left = left * arr[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right = right * arr[i];
  }
  return result;
}

let res = product([1, 2, 3, 4]);
console.log(res);
