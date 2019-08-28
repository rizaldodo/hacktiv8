console.log('=========================11111=============================\n');
var word1 = 'Javascript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word1 + ' ' + second  + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

console.log('=========================22222=============================\n');

var word2 = 'wow Javascript is so cool';
var firstWord = word2[0] + word2[1] + word2[2];
var secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
var thirdWord = word2[15] + word2[16];
var fourthWord = word2[18] + word2[19];
var fifthWord = word2[21] + word2[22] + word2[23] + word2[24];


console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

console.log('=========================33333=============================\n');

var word3 = 'wow Javascript is so cool';
          //0123456789012345678901234
var firstWord = word3.substring(0, 3);
var secondWord = word3.substring(4, 14);
var thirdWord = word3.substring(15, 17);
var fourthWord = word3.substring(18, 20);
var fifthWord = word3.substring(21);

console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

console.log('=========================44444=============================\n');
var word4 = 'wow Javascript is so cool';
          //0123456789012345678901234
var firstWord = word4.substring(0, 3);
var secondWord = word4.substring(4, 14);
var thirdWord = word4.substring(15, 17);
var fourthWord = word4.substring(18, 20);
var fifthWord = word4.substring(21);

console.log('First Word: ' + firstWord + ', with length: ' + firstWord.length);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWord.length);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWord.length);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWord.length);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWord.length);