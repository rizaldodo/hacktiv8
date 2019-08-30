
function xo(str){
  var counterX = 0;
  var counterO = 0;
  var string = str.toLowerCase();
    for(var i = 0; i < str.length; i++){
      if(string[i] === 'x'){
        counterX++;
      }else if(string[i] === 'o'){
        counterO++;
      }else {
        return 'error! just valid for letter \'X\' and/or \'O\''
      }
    }

    if (counterX === counterO){
        return true;
    }else{
        return false;
    }
}

console.log(xo('XoXOOoXX'));
