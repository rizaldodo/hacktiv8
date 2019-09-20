function sorting(arrNumber){
    for(i=0; i<arrNumber.length; i++){
        for(j=0; j<arrNumber.length-i-1; j++){
            if(arrNumber[j] > arrNumber[j+1]){
                temp = arrNumber[j+1];
                arrNumber[j+1] = arrNumber[j];
                arrNumber[j] = temp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber){
    var result = {};
    if(arrNumber.length == 0){
        return '';
    }
    for(i=0; i<arrNumber.length; i++){
        if(result[arrNumber[i]] === undefined){
            result[arrNumber[i]] = 1;
        }else{
            result[arrNumber[i]]++;
        }
    }
    // console.log(result);
    return 'angka paling besar adalah '+ arrNumber[arrNumber.length-1] + ' dan jumlah kemunculan sebanyak ' + result[arrNumber[arrNumber.length-1]] + ' kali';
}

function mostFrequentLargestNumber(arrNumber){
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);

    return countHighest;

}
console.log(mostFrequentLargestNumber([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali
console.log(mostFrequentLargestNumber([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumber([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumber([]));
//''