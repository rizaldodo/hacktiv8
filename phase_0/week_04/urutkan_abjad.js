function urutkanAbjad(str){

    arrStr = str.split('');
    for(i=0; i<arrStr.length; i++){
        for(j=0; j<arrStr.length-i-1; j++){
            if(arrStr[j] > arrStr[j+1]){
                
                temp = arrStr[j+1];
                arrStr[j+1] = arrStr[j];
                arrStr[j] = temp;
            }
        }
    }
    return arrStr.join('');
}

console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'