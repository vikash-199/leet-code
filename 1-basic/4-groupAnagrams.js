//groups anagrams
//['eat','ate','got','get']

function gAna(arr) {
  let map = {};
  let result = [];
  for (let ele of arr) {
    let key = ele.split('').sort().join('');
    if (!map[key]) {
      map[key] = [];
      map[key].push(ele);
    } else {
      map[key].push(ele);
    }
  }
  for (let key in map) {
    result.push(map[key]);
  }

  return result;
}

let s = gAna(['eat', 'ate', 'got', 'get', 'tog']);
console.log(s);
