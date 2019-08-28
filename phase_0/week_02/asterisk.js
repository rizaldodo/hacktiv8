
console.log('=================11111====================\n')
var rows1 = 5;
for(f=0; f<rows1; f++){
    console.log('*');
}
console.log('=================22222====================\n')
var stars = '';
var rows2 = 5;
for(var i = 0; i < rows2; i++){

    for(var j = 0; j < rows2; j++){
        stars +='*';
    }
    stars += '\n';
}
console.log(stars + '\n');

console.log('=================33333====================\n')

var rows3 = 5;
var stars2 = '';
for(var i=0; i<rows3; i++){
    for(j=0; j<=i; j++){
        stars2 += '*'
    }
    stars2 += '\n';
}
console.log(stars2);