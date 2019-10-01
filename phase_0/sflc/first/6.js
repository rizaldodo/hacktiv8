function countDistanceLetterRecursive(sentence, letter){
    if(letter === sentence[0]){
        return 1;
    }else{
        return 1 + countDistanceLetterRecursive(sentence.slice(1), letter); 
    }
}

console.log(countDistanceLetterRecursive('12104123', '1')); // 1
console.log(countDistanceLetterRecursive('the quick brown fox', 'o')); // 13
console.log(countDistanceLetterRecursive('hahaha', 'a')); // 2