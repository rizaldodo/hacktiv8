function tukarBesarKecil(words){
    var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var rupture = []
    for(i=0; i<words.length; i++){
        for(j=0; j<lower.length; j++){
            if(words[i] === lower[j]){
                rupture.push(words[i].toUpperCase());
                break;
            }
            else if(words[i] === upper[j]){
                rupture.push(words[i].toLowerCase());
                break;
            }
            // if(words[i] !== lower[j] && words[i] !== upper[j]){
            //     rupture.push(words[i]);
            // }
            if(j==lower.length-1){
                rupture.push(words[i]);
            }
            
        } 
       
    }
    return rupture.join('');
}
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
console.log(tukarBesarKecil('zzZZZzz')); // 