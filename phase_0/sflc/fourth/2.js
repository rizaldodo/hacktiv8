function sensorSentence (sentence, words) {
    var arrSentence = [];
    var temp = '';
    var space = false;
    var result = '';

   for(i=0; i<sentence.length; i++){
        if(sentence[i] !== ' '){
           temp+=sentence[i];
        }else{
            space = true;
        }
        if(space || i==sentence.length-1){
            arrSentence.push(temp);
            space = false;
            temp = '';
       }
   }
   var tempWords = '';
   for(i=0; i<arrSentence.length;i++){
       if(arrSentence[i] === words){
           for(j=0; j<words.length; j++){
             tempWords += '*';
           }
           arrSentence[i] = tempWords;
        }
        if(i==arrSentence.length-1){
            result += arrSentence[i];
        }else{
            result += arrSentence[i] + ' ';
        }
   }
 return result;
}
  
  
  console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********
  
  console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear
  
  console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it
  
  console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********
  
  console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'
  
  console.log(sensorSentence('', '')) // ''