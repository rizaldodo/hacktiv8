/**
 * ======================
 * Hitung Char Recursive
 * ======================
 *
 * Buatlah sebuah function dengan teknik recursive untuk menghitung berapa banyak suatu 
 * karakter (bisa huruf atau angka) muncul dalam sebuah array of strings.
 *
 * RULES
 * =====
 * 1. Wajib menggunakan rekursif
 * 2. Dilarang menambahkan parameter baru
 * 3. Dilarang membuat variable di luar function countCharRecursive
 * 4. Dilarang mengubah tipe data parameter
 * 5. `Hanya boleh menggunakan 1 loop`
 */

function countCharRecursive(sentence, letter) {
    // console.log(sentence[0].length);
    // console.log(sentence.length);
    if(sentence.length === 0){
        return counter;    
    }else{
        var counter = 0;
        for(i=0; i<sentence[0].length; i++){
            if(sentence[0][i] === letter){
                counter++
            }
        }
        return countCharRecursive(sentence.slice(1), letter);
    }


  }
  
  console.log(countCharRecursive(['90125785123545', 'balonku ada 5', '1 tahun ada 52 minggu', '35-infinite-fox'], '5')); // 7
  console.log(countCharRecursive(['Old', 'MacDonald', 'had', 'four', 'farms'], 'o')); // 2
  console.log(countCharRecursive(['Anchor', 'classic', 'daring', 'eager', 'fearless'], 'a')); // 4
  console.log(countCharRecursive(['haha', 'haha', 'haha', 'haha', 'haha'], 'h')); // 10
  console.log(countCharRecursive([], 'z')); // 0