function palindromeRecursive(sentence){
  let first = str.slice(0, 1);
  let middle = str.slice(1, -1);
  let last = str.slice(-1);
​
  if (str.length < 2) {
    return true;
  } else {
    if (first == last) {
      return recursive(middle);
    }
  }
  return false;
}
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false