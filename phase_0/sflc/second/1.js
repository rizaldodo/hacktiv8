/*
PSEUDOCODE
STORE prettyNum equals to []
FOR i starts 2  to Num
  IF i % 2 equals to 0
    STORE i to prettyNum
  IF i % 3 equals to 0
    STORE i to prettyNum
  IF i % 5 equals to 0
    STORE i to prettyNum
ENDFOR
RETURN prettyNum
*/
function getUglyNumber(Num){
    var prettyNum = [];
    for(i=2; i<=Num; i++){
        // console.log('aaaaa')
        if(i%2 == 0){
            prettyNum.push(i);
            
        }else
        if(i%3 == 0){
            prettyNum.push(i);
            
            // console.log('aaaaa')
        }else
        if(i%5 == 0){
            prettyNum.push(i);
            
            // console.log('aaaaa')
        }
        
    }
    // console.log(prettyNum);
    return prettyNum;
}
console.log(getUglyNumber(10)); //[ 2, 3, 4, 5, 6, 8, 9, 10 ]
console.log(getUglyNumber(20)); //[ 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20 ]
console.log(getUglyNumber(4)); //[ 2, 3, 4]
console.log(getUglyNumber(1)); //[]