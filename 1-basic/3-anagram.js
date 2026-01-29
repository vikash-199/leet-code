// taking two strings and they have save numbes of char return true
/*
s='vikash'
t='shvika'
*/

function an(str1, str2) {
  let map = {};

  for (let ele of str1) {
    if (map[ele] !== undefined) {
      map[ele]++;
    } else {
      map[ele] = 1;
    }
  }
  for (let ele of str2) {
    if (map[ele] !== undefined) {
      map[ele]--;
    } else {
      return false;
    }
  }
  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
}

let res = an('vikash', 'shakvi');
console.log(res);
