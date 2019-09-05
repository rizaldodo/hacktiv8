function luckyNumber(num){
var str = '';
var str2 = '';
    for(i=1; i<=num; i++){
       if(i>9){
         i = i.toString();
         str += i[i.length-1];
       }
       if(i % 2 == 0 && i % 3 == 0){
         str += '*';
       }else {
        str += i;
       }
        
    }
    console.log(str);
}

luckyNumber(20);