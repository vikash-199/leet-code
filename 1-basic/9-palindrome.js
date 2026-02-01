function palindrome(str) {
  const regex = /[A-Za-z0-9]/g;
  let s1 = str.match(regex).join('').toLowerCase();
  let s2 = s1.split('').reverse().join('');

  return s1 === s2;
}

let res = palindrome('A man, a plan, a canal: Panama');
console.log(res);
