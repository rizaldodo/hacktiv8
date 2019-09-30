/*
PSEUDOCODE
STORE arr1 with array of number
STORE arr2 with array of number
STORE notRelate equals to []
FOR i starts from 0 to length of arr1
  STORE counter equals to 0
  FOR j starts from 0 to length of arr2
    IF arr index i same with arr2 index j
      DO counter ADD by 1
    END IF 
  END FOR
  IF counter smaller than 1
    DO STORE i to notRelative
  END IF
RETURN notRelative

*/
function findNotRelative(arr1, arr2) {
  var notRelate = [];

  for(i=0; i<arr1.length; i++){

      var counter = 0;
      for(j=0; j<arr2.length; j++){
          if(arr1[i] === arr2[j]){
            counter++;
          }
      }
      if(counter<1){
          notRelate.push(arr1[i]);
      }
  }
  return notRelate;
}

console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]