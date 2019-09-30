
// function hitungKataRec(str){
//     if(str.length == 0){
//         return 1;
//     }else{
//         if(str[0] === ' '){
//             if(){
//               return 1 + hitungKataRec(str.slice(1));
            
//             }
//         }else{
//             return hitungKataRec(str.slice(1));
//         }
//     }
            
//         // return hitungKataRec(slice(1));
        
// }

// function jumlahKata(str){
//     var counter = 0;
//     var space = false;
//     var word = '';
//     for(i=0; i<str.length; i++){
        
//         if(str[i] === ' ' || i === str.length-1){
            
//           if(word){
//               counter++;

//           } 
//           word = '';
//         }else{
//             word += word + str[i];
//         }
//     }
//     console.log(counter);
// }
// console.log(hitungKataRec('I have a dream'));
// console.log(jumlahKata('I have a dream '));


// function sumOf(num){
//     if(num == 1){
//         return 1;
//     }else{
//         console.log(num);
//         return num + sumOf(num-1);
//     }
// }

// console.log(sumOf(10));

// function sumArr(arr){
//     if(arr.length == 0){
//         return 0
//     }else{
//         return arr[0] + sumArr(arr.slice(1));
//     }
// }
// console.log(sumArr([1, 2, 4, 9])) // 16

function squareStars(num){
    var triangle = '';
    var square = '';
    for(i=0; i<num; i++){
        square = '';
        for(j=0; j<num; j++){
            square += '*';

        }

        console.log(square);
    }

    for(i=0; i<num; i++){
        triangle += '*';
        console.log(triangle)

    }
}
// squareStars(5);

function stars(num){
  var temp = '';
    if(num == 1){
      return '*';
  }
//   temp += stars(num-1) + '\n';
  for(i=0; i<num; i++){
      temp+='*';   
    }
    temp += '\n'+stars(num-1);
    return temp;
}

// function printer(num){
//     var temp = '';
//     for(i=0; i<num; i++){
//         temp += '*';
//     }
//     return temp + '\n';
// }

console.log(stars(5));