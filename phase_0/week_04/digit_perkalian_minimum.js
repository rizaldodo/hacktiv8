function digitPerkalianMinimum(num){
    var factor = [];
    for(i=1; i<=num; i++){
        if(num % i == 0){
            factor.push(i);
        }
        // factorTerkecil.push(factor[mid])
    }
    var mid = Math.round(factor.length/2);
    var factorTerkecil = [];
    var a = factor[mid-1] 
    var b = factor[mid];
    factorTerkecil.push(a, b);

    if(factor.length < 2){
        return 2;
    }
    
    return factorTerkecil.join('').length;
}
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
console.log(digitPerkalianMinimum(1097)); 