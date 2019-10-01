/*
PSEUDOCODE
STORE result equals to 0
IF max equals to 0 or gifts is UNDEFINED
  RETURN 0
FOR i equals 1 to amount of gift
  FOR j equals 1 to amount of gift
    IF gift index j greater than gift index j+1 
        SWITCH index j and index j+1
    END IF
  END FOR
END FOR 
FOR i equals 0 to amount of gifts 
  IF max greater equals to gift index i
    ADD result with 1
    SUBSTRACT max with gifts index i  
  END IF
END FOR

*/

function howManyGifts(max, gifts){
  var result = 0;
  if(max == 0 || gifts.length == 0){
      return 0;
  }
  for(i=0; i<gifts.length; i++){
      for(j=0; j<gifts.length-i-1; j++){
          if(gifts[j]>gifts[j+1]){
              var temp = gifts[j+1];
              gifts[j+1] = gifts[j];
              gifts[j] = temp;
          }
      }
  }
  for(i=0; i<gifts.length; i++){
      if(max >= gifts[i]){
          result++;
          max -= gifts[i];
      }
  }

  return result;
}
console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0