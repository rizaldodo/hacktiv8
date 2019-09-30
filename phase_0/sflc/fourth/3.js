function hitungKembalian(bayar, harga){
  var result = {};
  var uang = [100000, 50000, 20000, 10000, 5000, 1000];
  if(harga > bayar){
      return 'Uang tidak cukup'
  }else if(bayar == harga){
      return {};
  }else{
      var kembalian = bayar-harga;
      var a=0;
      var b=0;
      var c=0;
      var d=0;
      var e=0;
      var f=0;
      while(kembalian >= uang[5]){
          if(kembalian >= uang[0] && a < 5){
              kembalian -= uang[0];
              a++
              result[uang[0]] =  a;       
          }
          else if(kembalian >= uang[1] && b < 5){
              kembalian -= uang[1];
              b++
              result[uang[1]] =  b;  
          }
          else if(kembalian >= uang[2]){
              kembalian -= uang[2];
              c++
              result[uang[2]] =  c;  
          }
          else if(kembalian >= uang[3]){
              kembalian -= uang[3];
              d++
              result[uang[3]] =  d;  
          }
          else if(kembalian >= uang[4]){
              kembalian -= uang[4];
              e++
              result[uang[4]] =  e;  
          }
          else if(kembalian >= uang[5]){
              kembalian -= uang[5];
              f++
              result[uang[5]] =  f;  
          }
      }
      
  }
  return result;
  console.log(result);
}
// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000,50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000,500000)); // Uang tidak cukup
