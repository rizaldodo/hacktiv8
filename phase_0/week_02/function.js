function newLine() {
    return console.log('\n');
}
//11111111111111111111
function shoutOut(){
    return 'Halo Function!'
}
//22222222222222222222
var num1 = 5;
var num2 = 4;

function calculateMultiply(num1, num2){
    return num1 * num2;
}
var hasilPerkalian = calculateMultiply(num1, num2);

//33333333333333333333
var name = 'Agus';
var age = 50;
var address = 'Jln. Buntu, Kebayoran Lama, Jaksel';
var hobby = 'umroh';

function processSentence(name, age, addr, hobby){
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, ' + 'alamat saya di ' + addr + ', dan saya punya hobby yaitu ' + hobby;
}
var fullSentence = processSentence(name, age, address, hobby);


console.log(shoutOut());
newLine();
console.log('Hasil perkalian ' + num1 + ' * ' + num2 + ' = ' +hasilPerkalian);
newLine();
console.log(fullSentence);
