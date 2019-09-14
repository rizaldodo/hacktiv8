function ubahHuruf(word){
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var replace = [];
    for(i=0; i<word.length; i++){
        for(j=0; j<alphabet.length; j++){
            if(word[i] === alphabet[j]){
                if(word[i] === alphabet[25]){
                    replace.push(alphabet[0]);
                }
                replace.push(alphabet[j+1]);
            }
        }

    }
    return replace.join('');
}
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('zzzzzzzzzzzzz')); // aaa