function changeVocals (str){
    var vocals = {
        a : 'b',
        A : 'B',
        i : 'j',
        I : 'J',
        u : 'v',
        U : 'V',
        e : 'f',
        E : 'F',
        o : 'p',
        O : 'P'
    }
    var strBank = str.split('');

    for(huruf in vocals){
        for(i=0; i<strBank.length; i++){
            if(huruf == strBank[i]){
                strBank[i] = vocals[huruf];
            }
        }
    }
   
    return strBank;
}

function reverseWord(str){
    var fromVocal = changeVocals(str);
    var reverseWord = [];
    for(i=fromVocal.length-1; i>=0; i--){
        reverseWord.push(fromVocal[i]);
    }
    return reverseWord;

}

function setLowerUpperCase(str){
  var lowerUpper = reverseWord(str);
  for(i=0; i<lowerUpper.length; i++){
      if(lowerUpper[i] === lowerUpper[i].toUpperCase()){
          lowerUpper[i] = lowerUpper[i].toLowerCase();
      }else if(lowerUpper[i] === lowerUpper[i].toLowerCase()){
          lowerUpper[i] = lowerUpper[i].toUpperCase();
      }
  }
  return lowerUpper;
}

function removeSpaces(str){
    var spaceRemover = setLowerUpperCase(str);
    var resSpaceRemover = [];
    var space = false;
    for(i=0; i<spaceRemover.length; i++){
        if(spaceRemover[i] === ' '){
          space = true;
        } else {
            space = false;
        } 
        
        if (!space){
            resSpaceRemover.push(spaceRemover[i]);
        }
    }
    return resSpaceRemover.join('');

}

function passwordGenerator(name){
    if (name.length < 6){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    return removeSpaces(name);

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'