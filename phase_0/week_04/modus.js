function cariModus(arr){

    var arrSorted = arr;

    for(i=0; i<arrSorted.length; i++){
        for(j=0; j<arrSorted.length-i-1; j++){
            if(arrSorted[j] > arrSorted[j+1]){
                temp = arrSorted[j];
                arrSorted[j] = arrSorted[j+1];
                arrSorted[j+1] = temp;
            }
        }
        if(arrSorted[0] == arrSorted[arrSorted.length-1]){
            return '-1';
        }
    }

    var sama = false;
    var modus;
    var freqModus = 0;
    var count = 0;
    for(i=0; i<arr.length; i++){
       
        if(arr[i] === arr[i+1]){
            sama = true;
        }else{
            sama = false;
            count = 0;
        }

        if(sama == true){
            count++;
        }
        if(count > freqModus){
            freqModus = count;
            modus = arr[i];
        }

    }

    if(!modus){
        return '-1';
    }

    return modus;
    
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([5, 10, 10, 10, 5])); // 10