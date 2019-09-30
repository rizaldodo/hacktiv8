function virusCheckRecursive (str, viruses) {
  if(viruses === undefined){
    return 'There is no virus';
  }
  var strX = str.toLowerCase();
  var virusX = viruses.split('|'); 
  // your code here
  if(str.length == 0){
    return 0;
  }else{
    for(i=0; i<virusX.length; i++){
      // console.log('aaaaa')
      if(strX[0] === virusX[i].toLowerCase()){
        return 1 + virusCheckRecursive(strX.slice(1), viruses);
      }
    }
        
     return virusCheckRecursive(strX.slice(1), viruses);
    
  }

  }
  
  console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
  console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
  console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
  console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
  console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
  console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
  console.log(virusCheckRecursive('')); // There is no virus