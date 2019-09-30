function missingNum (arr) {
    var arrMiss = [];
    var arrRaw = [];
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr[i].length; j++){
            if(arr[i][j] !== ' '){
                arrRaw.push(arr[i][j]);
                
            }
        }
    }
    for(i=0; i<arrRaw.length; i++){
        for(j=0; j<arrRaw.length-i-1; j++){
            if(arrRaw[j]>arrRaw[j+1]){
                var temp = arrRaw[j];
                arrRaw[j] = arrRaw[j+1];
                arrRaw[j+1] = temp;
            }
        }
    }

    for(i=arrRaw[0]; i<=arrRaw[arrRaw.length-1]; i++){
        var any = false;
       for(j=0; j<arrRaw.length; j++){
           if(i === arrRaw[j]){
               any = true;
           }
       }
       if(!any){
           arrMiss.push(i);
       }
    }
    
   return arrMiss;
  }
console.log(missingNum([[3,' ', 5], [1,' ', 7], [9,' ',' ']])) // [ 2, 4, 6, 8 ]
console.log(missingNum([[ 2,' '], [' ',5]])) // [ 3, 4 ]
console.log(missingNum([[11,' ', 13], [17,' ', 19], [' ',16,' ']])) // [ 12, 14, 15, 18 ]
console.log(missingNum([[3,' ', 5, 15], [1,' ', 7, 13], [9,' ',' ', 12], [' ', 16,' ',' ']])) // [ 2, 4, 6, 8, 10, 11, 14 ]
// console.log(missingNum([])) // []