//pseudo code
/*
1. STORE arr with any value of array
2. STORE arrReverse with value equals to []
3. FOR each arr start from its length to 0
     STORE temp equals to ''
     FOR each arr[i] start from its length to 0
       STORE temp with value of arr[i][j]
4.   PUSH temp to arrReverse 
*/


function reverseAll(arr){
  var arrStr = [];
  var arrReverse = [];
  for(i=arr.length; i>0; i--){
      temp = arr[i] + '';
      arrStr.push(temp);
  }

  
  for(i=arrStr.length-1; i>=0; i--){
    var temp = '';
      for(j=arrStr[i].length-1; j>=0; j--){
          temp += arrStr[i][j];
      }
      arrReverse.push(temp);
  }
  return arrReverse;
     console.log(arrStr);
}
console.log(reverseAll([123, 521, 456])) //[654,125,321]
console.log(reverseAll([897])) //[798]
console.log(reverseAll([])) //[]
