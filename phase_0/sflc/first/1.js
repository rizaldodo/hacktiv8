/*
PSEUDO CODE

STORE prime equals to []
  FOR i start 2 to parameter substract by 1
    STORE counter equals to 0
    FOR j start 2 to i
      IF  i % j == 0
        DO counter++
      END IF
    END FOR
    IF conter < 2
      DO STORE i to prime
    END IF
  END FOR
RETURN prime
*/
function getPrime(num){
    var prime = []
    for(i=2; i<num; i++){
        var counter = 0;
        for(j=2; j<=i; j++){
            if(i%j == 0){
                counter++;
            }
            
        }
        if(counter<2){
            prime.push(i);
        }
    }
    return prime;
}
console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []