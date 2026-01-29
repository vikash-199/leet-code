// if a array contain duplicate element return true otherwise false

// method 1
function d(arr) {
  let map = {};
  for (let ele of arr) {
    if (map[ele] !== undefined) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
  }
  for (let key in map) {
    if (map[key] !== 1) {
      return true;
    }
  }
  return false;
}

let r = d([1, 2, 3]);
console.log(r);

// method 2
function dup(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return true;
    }
    map[arr[i]] = i;
  }
  return false;
}
let res = dup([1, 4, 7, 9, 1]);
console.log(res);
