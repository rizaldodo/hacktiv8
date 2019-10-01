/*
ALGORITMA
STORE num with any value
STORE prettyNum equals to []
  FOR i starts from 2 to i equals to num
    IF i % 2 == 0 OR i % 3 == 0 OR i % 5 == 0
      DO STORE prettyNum with i
    END IF
  END FOR
RETURN prettyNum
*/

function getUglyNumber(num) {
    var prettyNum = [];
    for(i=2; i<=num; i++){
        if(i%2 == 0 || i%3 == 0 || i%5 == 0){
            prettyNum.push(i);
        }
    }
    return prettyNum;
  }
  
  console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
  console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
  console.log(getUglyNumber(4)); //[ 2, 3, 4]
  console.log(getUglyNumber(1)); //[]