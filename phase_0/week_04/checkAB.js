function checkAB(abc){
    for(a=0; a<abc.length; a++){
        if(abc[a] === 'a'){
            if(abc[a+4] === 'b'){
                return true;
            }
        }else if(abc[a] === 'b'){
            if(abc[a+4] === 'a'){
                return true;
            }
        }
    }
    return false;
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false