
function palindrome(str){
    var reverse = '';
    for(i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    if(str === reverse){
        return true;
    }else{
        return false;
    }

}

console.log(palindrome('katk'));