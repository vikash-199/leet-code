// sun of two ele in arry is equal to the target return both ele index in array

//[1,3,7,9],12

function sum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let needed = target - arr[i];

    if (map[needed] !== undefined) {
      return [map[needed], i];
    }
    map[arr[i]] = i;
  }
  return [];
}
let res = sum([3, 6, 2, 1], 7);
console.log(res);
