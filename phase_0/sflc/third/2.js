function numberPrimeCruncher(input) {
    var prime = []
    var crunchPrime = [];
    
    for(i=2; i<=input; i++){
        var counterPrime = 0;
        for(j=2; j<=i; j++){
            if(i%j == 0){
                counterPrime++
            }
            
        }
        if(counterPrime < 2){
            prime.push(i);
        }
        
    }
    var sumOfPrime = 0;
    for(i=0; i<prime.length; i++){
        sumOfPrime += prime[i];
    }
    var avg = sumOfPrime/prime.length;

    for(i=0; i<prime.length; i++){
        if(prime[i]>avg){
            crunchPrime.push(prime[i]);
        }
    }
    console.log(crunchPrime);
    
  }
  
  console.log(numberPrimeCruncher(10)); // [ 5, 7 ]
  console.log(numberPrimeCruncher(44)); // [ 23, 29, 31, 37, 41, 43 ]
  console.log(numberPrimeCruncher(23)); // [ 13, 17, 19, 23 ]
  console.log(numberPrimeCruncher(1)); // []
  console.log(numberPrimeCruncher(0)); // []