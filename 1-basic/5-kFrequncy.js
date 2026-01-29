/*
[1,1,2,2,3] and k=2 return two most frequent element in array

{
1:2,
2:2
3:1
}
*/

function kfq(arr, k) {
  let map = {};

  // count freq
  for (let ele of arr) {
    if (!map[ele]) {
      map[ele] = 1;
    } else {
      map[ele]++;
    }
  }
  // conver object into arr and sort by freq
  let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((item) => Number(item[0]));
}

let res = kfq([1, 1, 2, 2, 2, 3, 4, 4, 4], 2);
console.log(res);
