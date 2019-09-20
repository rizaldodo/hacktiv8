function kaliTerusRekursif(angka){
    var strAngka = angka + '';
    var result = 1;
    for(i=0; i<strAngka.length; i++){
        result *= parseInt(strAngka[i]); 
    }
    if(result < 10){
        return result;
    }else{
        return kaliTerusRekursif(result);
    }

}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6