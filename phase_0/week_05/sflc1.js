function prime(num) {
   
    var prima = [];
    var i = 2;
    while(prima.length < num){
        var bilPrima = true;
        for(j=2; j<i; j++){
            if(i % j == 0){
                bilPrima = false;
            }
        }

        if(bilPrima){
            prima.push(i);
        }
        i++;
        
    }
    console.log(prima);
    return prima[prima.length-1];
  
  }
  
  console.log(prime(3)); //5
  console.log(prime(4)); //7
//   console.log(prime(13)); //41
//   console.log(prime(110)); //601
//   console.log(prime(666)); //4973