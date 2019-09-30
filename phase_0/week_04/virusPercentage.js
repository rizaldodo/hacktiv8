function virusPercentage(str){
    var arrStr = [];
    var virus1 = 0;
    var virus2 = 0;
    var virus3 = 0;
    var virus4 = 0;
    var virusType = [];
    var virusAmount = [];

    for(i=0; i<str.length; i++){
        arrStr.push(str[i]);
    }

    for(i=0; i<str.length; i++){
        if(arrStr.length == 0){
            virusType.push(arrStr[i]);
        }
        var sudahAda = false;
        for(j=0; j<virusType.length; j++){
            if(arrStr[i] === virusType[j]){
                sudahAda = true;
            }
        }
        if(!sudahAda){
            virusType.push(arrStr[i])
        }
    }

    for(i=0; i<virusType.length; i++){
        var count = 0
        for(j=0; j<arrStr.length; j++){
            if(virusType[i] === arrStr[j]){
                count ++
            }
        }
        virusAmount.push(count);
        return (virusAmount[i]/arrStr.length)*100 + '%'
    }

    // for(i = 0; i<str.length; i++){
    //     if(str[i] === '*'){
    //         virus1++;
    //     }
    //     if(str[i] === '$'){
    //         virus2++;
    //     }
    //     if(str[i] === '*'){
    //         virus3++;
    //     }
    //     if(str[i] === '@'){
    //         virus4++
    //     }
    // }
    
   console.log(virusType);
   console.log(virusAmount);
    // return (virus1/str.length)*100 +'% #, ' + (virus2/str.length)*100 +'%, $' + (virus3/str.length)*100 + '%, *' + (virus4/str.length)*100 + '% @';
    // return virusType;
}

console.log(virusPercentage('**#*##')); // 50% *, 50% #
console.log(virusPercentage('**######')); // 75% #, 25% *
console.log(virusPercentage('**##@')); // 40% *, 40% #, 20% @
console.log(virusPercentage('@')); // 100% @
console.log(virusPercentage('#$*@')); // 25% #, 25% $, 25% *, 25% @