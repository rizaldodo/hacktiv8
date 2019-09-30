function averageLengthWord(words){
    // var arrTemp = [];
    var result = [];
    var sum = 0;
    var splitWords = words.split(' ');
    for(i=0; i<words.length; i++){
        var space = false;
        if(words[i] === ' '){
            space = true;
        }
        if(!space){
            sum++;
        }
    }
    var avg = Math.round(sum/splitWords.length);
    // console.log(avg);
    for(i=0; i<splitWords.length; i++){
        if(splitWords[i].length == avg){
            result.push(splitWords[i]);
        }
      
    }
    return result;
}
console.log(averageLengthWord('dd dddd dddddd dddddddd'));
console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []