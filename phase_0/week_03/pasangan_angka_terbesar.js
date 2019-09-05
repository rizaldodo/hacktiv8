function pasanganTerbesar(num){
    var arrNum = (''+num).split('');
    var temp = 0;
    
    for(i=0; i<arrNum.length; i++){
        
        if(i == arrNum.length-1 && arrNum.slice(i-1, i+1).join('') > temp){
            
            temp = arrNum.slice(i-1, i+1).join('');
            
        }else if(arrNum.slice(i, i+2).join('') > temp){
            
            temp = arrNum.slice(i, i+2).join('');
            
        }
        else{
            
        }
        
    }
    return temp;
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99