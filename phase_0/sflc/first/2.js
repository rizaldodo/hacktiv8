function multiplyTheOdds(arr1, arr2){
   if(arr1.length == 0 && arr2.length == 0 ){
       return 0;
   }
    var result = [];
    var ganjil = [];
    var final = 1;
    if(arr1.length > arr2.length){
        var temp = arr1;
        arr1 = arr2;
        arr2 = temp;

    }
    //arr1 selalu lebih kecil
    for(i=0; i<arr1.length; i++){
        var temp = 0;
        temp = arr1[i] * arr2[i];
        result.push(temp)  
    }

    for(i=0; i<result.length; i++){
        if(result[i] % 2 == 1){
           ganjil.push(result[i]);
        }
    }
    
    if(ganjil.length != 0){
        for(i=0; i<ganjil.length; i++){
            
            final*=ganjil[i];
        }
    }
    // console.log(result);
    return final;
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); // 1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); // 0