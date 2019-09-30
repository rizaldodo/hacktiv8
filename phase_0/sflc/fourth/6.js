/*
PSEUDOCODE
STORE array
STORE num
STORE temp equals to ''
IF length of array equals to 0;
  RETURN temp;
ELSE 
  IF array at index 0 % num equals to 0
    DO temp add with array index 0 and ' '
  END IF
END IF
temp ADD  with it's function with parameter array except index 0 and num
RETURN  temp  
*/
function dividableRecursive (array, num) {
  var temp = '';
  if(array.length == 0){
      return temp;
  }else{
     if(array[0]%num == 0){
         temp += array[0] +' ';
     }
  }
  temp += dividableRecursive(array.slice(1), num);
  return temp;

}

// DRIVER CODE
console.log(dividableRecursive([66 , 33 , 55 , 44 , 11], 3)) // 66 33
console.log(dividableRecursive([123 , 222 , 100 , 50 , 32], 2)) // 222 100 50 32
console.log(dividableRecursive([125 , 500 , 201 , 202 , 66], 5)) // 125 500
console.log(dividableRecursive([66 , 33 , 55 , 44 , 132], 6)) // 66 132