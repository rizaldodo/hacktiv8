console.log('====================11111====================\n')

console.log('LOOPING PERTAMA');

var i = 0;
var j = 10;
while(i < 10){
    console.log(i + ' - I love coding');
    i++;
}

console.log('LOOPING KEDUA');

while(j > 0){
    console.log(j + ' - I will become fullstack developer');
    j--;
}


console.log('\n')
console.log('====================22222====================\n')

console.log('LOOPING PERTAMA')

for(var k = 0; k < 10; k++){
    console.log(k + ' - I love coding');
}

console.log('LOOPING KEDUA')

for(var l = 10; l>0; l--){
    console.log(l + ' - I will become fullstack developer');
}

console.log('\n')

console.log('====================33333====================\n')
console.log('============GANJIL GENAP===========\n');
for(var m = 1; m < 101; m++){
    if(m % 2 == 0){
        console.log('GENAP');
    }else if(m % 2 == 1){
        console.log('GANJIL');
    }
}
console.log('\n')
console.log('===========COUNTER +2 =============\n');
for(var n = 1; n < 101; n+=2){
    if(n % 3 == 0){
        console.log(n + ' KELIPATAN 3');
    }else{
        console.log('');
    }
}
console.log('\n')
console.log('===========COUNTER +5 =============\n');
for(var o = 1; o < 101; o+=5){
    if(o % 6 == 0){
        console.log(o + ' KELIPATANN 6');
    }else{
        console.log('');
    }
}
console.log('\n')
console.log('===========COUNTER +9 =============\n');
for(var p = 1; p < 101; p+=9){
    if(p % 10 == 0){
        console.log(p + ' KELIPATAN 10')
    }else{
        console.log('');
    }
}