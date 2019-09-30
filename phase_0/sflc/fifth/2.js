/*
STORE MaxBudgetwith any value of number
STORE gifts with value array of number
STORE counter equals to 0
STORE harga with result of sorted gift 
FOR i starts from 0 to length of array gifts
  IF MaxBudget greater than and equals to harga with index i
    DO MaxBudget SUBSTRACT with harga with index i
       ADD counter by 1
  END IF
END FOR  
  
       
*/

function howManyGifts(maxBudget, gifts){
    var counter = 0;
    var harga = gifts.sort(function(a,b){return a-b});

        for(i=0; i<harga.length; i++){
            if(maxBudget>=harga[i]){
                maxBudget -= harga[i];
                counter++;
            }
        }
    
    return counter;
  
  }
  
  console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
  console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
  console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
  console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
  console.log(howManyGifts(0, [10000, 3000])); // 0

 