function totalDigitRekursif(angka){
    var rekursif = -1;
    var strAngka = angka + '';
    var result = parseInt(strAngka[0]);
    // var splitAngka = strAngka.split('');

    if(strAngka.length === 1){
    
        return parseInt(strAngka[strAngka.length-1]);
    }
    else{
        
        return result += totalDigitRekursif(parseInt(strAngka.slice(1)));
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5