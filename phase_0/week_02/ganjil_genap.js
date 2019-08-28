console.log('============GANJIL GENAP===========\n');
for(var i = 1; i < 101; i++){
    if(i % 2 == 0){
        console.log('GENAP');
    }else if(i % 2 == 1){
        console.log('GANJIL');
    }
}
console.log('===========COUNTER +2 =============\n');
for(var j = 1; j < 101; j+=2){
    if(j % 3 == 0){
        console.log(j + ' KELIPATAN 3');
    }else{
        console.log('');
    }
}
console.log('===========COUNTER +5 =============\n');
for(var k = 1; k < 101; k+=5){
    if(k % 6 == 0){
        console.log(k + ' KELIPATANN 6');
    }else{
        console.log('');
    }
}
console.log('===========COUNTER +9 =============\n');
for(var l = 1; l < 101; l+=9){
    if(l % 10 == 0){
        console.log(l + ' KELIPATAN 10')
    }else{
        console.log('');
    }
}