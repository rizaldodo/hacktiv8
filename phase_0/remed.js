function shapeOfW(str, totalLevel){
strLength = str.length;
if(totalLevel>6){
    return 'level invalid';
}
if(strLength>100){
    return 'maximum karakter 100';
}

var level1 = '';
var level2 = '';
var level3 = '';
var level4 = '';
var level5 = '';
// console.log(strLength);
var i = 0;

    
console.log(totalLevel + '======');
return strLength ;
}


console.log(shapeOfW('RUBAH&FOX', 3));
console.log(shapeOfW('ABCDFGHIJKLMNOP', 4));
console.log(shapeOfW('ABCDEFGHIJKLMNOPQ', 5));

//totallvl 3 || 0   4   8
                 
//totallvl 4 || 0 6 12
//totallvl 5 || 0 8 16
