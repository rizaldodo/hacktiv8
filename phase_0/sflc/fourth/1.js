function formatUang(number) {
    var strNum = number+'';
    var newStr = '';

   if(strNum.length < 4){
     return 'Rp'+ number+ ',00';
   }else{
     var counter = -1;
     for(i=strNum.length-1; i>=0; i--){
      counter++;
      if(counter%3 == 0){
        newStr = strNum[i]+'.'+ newStr
        // counter = 0;
      }else{
        newStr = strNum[i] + newStr;
      }
     }

   }
   var result = '';
   for(i=0; i<newStr.length-1; i++){
     result+=newStr[i];
   }
   console.log(newStr);
  
   return 'Rp'+result+',00';
   

}
  console.log(formatUang(7500)); // Rp7.500,00 
  console.log(formatUang(250)); // Rp250,00
  console.log(formatUang(100000)); // Rp100.000,00
  console.log(formatUang(1000000)); // Rp1.000.000,00
  console.log(formatUang(4999999)); // Rp4.999.999,00
  console.log(formatUang(499999999999)); // Rp4.999.999,00