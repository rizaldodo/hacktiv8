// function a (x){
//     var low_a = x.toLowerCase();
//     if (x === 'a'){
//         return true, 'true, its a \'a\' ';
//     }else{
//         return false, 'false, its not a \'a\'';
//     }
// }

// var isSquare = function(n){
//     if (n < 0){
//       return false, n + ': is Negative numbers cannot be square numbers';
//     } else {
//       if (Math.sqrt(n) % 1 == 0){
//         return true, n + ': is a square number , ' + Math.sqrt(n) + '*' + Math.sqrt(n);
//       }else {
//         return false, n + ': is not a square number';
//     }// fix me
//   }
// }

// console.log(a('a'));
// console.log(isSquare(-1));

//algorithm
/*
START
  STORE a name 
  STORE nilai with any value
  IF nilai greater than equals to 80 AND nilai smaller than equals to 100 THEN
    DISPLAY name and give 'A'
  ELSE IF nilai greater than equals to 65 AND nilai smaller than equals to 79 THEN
    DISPLAY name and give 'B'
  ELSE IF nilai greater than equals to 50 AND nilai smaller than equals to 64 THEN 
    DISPLAY name and give 'C'
  ELSE IF nilai greater than equals to 35 AND nilai smaller than equals to 49 THEN 
    DISPLAY name and give 'D'
  ELSE IF nilai greater than equals to 0 AND nilai smaller than ewuals to 34 THEN
    DISPLAY name and give 'E'
  ELSE 
    DISPLAY 'Nilai invalid'

*/

var name = '';
function firsLetterGrouping(name){
  var lowName = name.toLowerCase();
  if (lowName[0] === 'a' || lowName[0] === 'b' || lowName[0] === 'c' || lowName[0] === 'd'){
    return 'Masuk grup pertama';
  }else if (lowName[0] === 'e' || lowName[0] === 'f' || lowName[0] === 'g' || lowName[0] === 'h'){
    return 'Masuk grup kedua';
  }else{
    return 'Masuk grup terakhir';
  }
}

function addTitle(name1, name2, name3, name4){
  return 'Mr. ' + name1 + ', Mr. ' + name2 + ', Mr. ' + name3 + ', Mr. ' + name4;
}

// console.log(addTitle('sadasd', 'asdsadasd', 'qwoeoqwoe', 'aokdawk'));   
// console.log(firsLetterGrouping('fdfaf'));

function changeSpaceWith(str, to){
  var string = '';
  for (var i = 0; i < str.length; i++){
    if (str[i] === ' '){
      string += to;
    }else{
      string += str[i];
    }
  }
  return string;
}

//console.log(changeSpaceWith('sdasd asdsa', '$'));

function cutString(str) {
  var string = '';
  for(var i = 0; i < 7; i++ ){
    string += str[i];
  } 
  return string;
}

//console.log(cutString('dasjdsjad'));

function evenSiblings(number){
  var evenNumber = '';
  for(i = 0; i <= number; i++){
    if (i % 2 == 0 && i > 0){
      evenNumber += i + ' ';
    }
  }
  return evenNumber;
}
// console.log(evenSiblings(15));

function drawThreeColsBox(num){
  var symbols = '';
  for(i=1; i<=num*num; i++){
    
    if(i % 3 == 0){
      symbols += '* ';
    }else if (i % 2 == 0){
      symbols += '$ ';
    }else {
      symbols += '@ ';
    }
    
    if(i % num == 0){
      symbols += '\n';

    }
  }
  return symbols;
}

// console.log(drawThreeColsBox(10));

function switchValue(a, b){
  var temp;
  temp = b;
  b = a;
  a = temp;
  return a + ' dan ' + b
}
// console.log(switchValue('asasa', 'dfdfd'));

function pyramid(max){
  var str = '';
  var str2 = '';
  for(q=1; q>max+1; q++){
    for(w=1; j<q+1; w++){
      str2+=i;
    }
    str2+='\n'
  }
  console.log(str2);
  for(i=max; i>0; i--){
    for(j=1; j<i+1; j++){
      str+=i;
    }
    str+='\n'
  }
  console.log(str);
}
pyramid(7);