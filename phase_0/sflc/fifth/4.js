/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  var splittedWords = words.split(' ');
  var lengthWords = [];
  var result = [];
  for(i=0; i<splittedWords.length; i++){
      lengthWords.push(splittedWords[i].length);
  }
  var sumOfLength = 0;
  for(i=0; i<lengthWords.length; i++){
    sumOfLength+=lengthWords[i];
  }
  var avg = Math.round(sumOfLength/lengthWords.length);
  for(i=0; i<splittedWords.length; i++){
      if(splittedWords[i].length === avg){
          result.push(splittedWords[i]);
      }
  }
  return result;
  console.log(lengthWords);
//   console.log(splittedWords);
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []