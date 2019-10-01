/*
ALGORITMA

1. Buat kamus HBBI dengan isi ['!','@','#','$','%','^','&','*','(',')','-','+','1','2','3,','4','5','6','7','8','9','0','[',']','{','}']
2. Buat kamus alfabet dengan isi ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
3. Buat variabel dengan isi parameter input yang sudah diubah menjadi tipe data array
4. Buat looping untuk mengecek input dengan kamus alfabet
     jika huruf input sama dengan huruf alfabet maka ganti hrurf tersebut dengan huruf pada kamus HBBI.


*/

function encrypt(input){
    var H8BI = ['!','@','#','$','%','^','&','*','(',')','-','+','1','2','3,','4','5','6','7','8','9','0','[',']','{','}'];
    var alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    var arrInput = input.split('');

    for(i=0; i<arrInput.length; i++){
        for(j=0; j<alfabet.length; j++){
            if(arrInput[i] === alfabet[j]){
                arrInput[i] = H8BI[j];
            }
        }
    }
    // console.log(arrInput);
    return arrInput.join('');
}
console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2