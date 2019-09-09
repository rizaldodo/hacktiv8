//algorithm
/*
STORE arr with any value 
STORE hp equals to 3
STORE begundal equals to 0
FOR each arr index 0 to arr with index its length
    IF arr === 'Begundal
      plus begundal by 1
    ELSE IF arr === '*'
      substract hp by 1
        IF hp < 1
          IF begundal > 1
            return 'Maaf Gundala Kamu hanya berhasil menangkap ___ begundal
          END IF
        return 'Maaf gundala kamu telah gugur
        END IF
    END IF
END FOR
IF hp>0 
    return selamat with and value of begundal      
      


*/


function basmiKejahatan(arr){
    var hp = 3;
    var begundal = 0;

    for(i=0; i<arr.length; i++){
       
      if(arr[i] === 'Begundal'){
            begundal++
        }else if(arr[i] === '*'){
            hp--;
            if(hp < 1){
                if(begundal > 1){
                    return 'Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap ' + begundal + ' begundal';
                }
                return 'Maaf Gundala kamu telah gugur. Kamu hanya berhasil menangkap ' + begundal + ' begundal.' ;
            }
               
     }
    }
    if(hp > 0){
        return 'Selamat Gundala, kamu telah memenagkan peperangan! Kamu telah menangkap ' + begundal + ' begundal.'
    }

}
console.log(basmiKejahatan(['*', '*', '#', '#', 'Begundal', '#', 'Begundal', 'Begundal', '#']));
// Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap 3 begundal.

console.log(basmiKejahatan(['*', '*', '*', 'Begundal', '*', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap 1 begundal.

console.log(basmiKejahatan(['*', '*', '*', '*', '#', 'Begundal', '*', 'Begundal', '#', 'Begundal']));
// Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.