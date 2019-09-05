function angkaPalindrome(num){
  
 // var palindromeNum = '';
  
    if ( num < 9 ) {
        return num + 1;
    } else {
        do{
            num++;
            var strNum = num.toString(); 
        }
        while (strNum !== reverse(strNum))
        return num;
    }

}

function reverse(word){
    var reverseWord = '';
    for(i=word.length-1; i>=0; i--){
        reverseWord += word[i];
    }
    return reverseWord;
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001