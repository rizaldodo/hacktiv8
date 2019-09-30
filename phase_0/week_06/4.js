/*
  =======================
  Kumpulan Nama Negara
  =======================

  Deskripsi: Sebuah fungsi yang akan mengembalikan kumpulan-kumpulan nama negara. 
  Yang dikelompokkan sesuai abjad pertama dari nama negara-negara tersebut.
  Kemudian dihitung ada berapa negara yang memiliki abjad awal yang sama.
  
  rules:
  1. tidak boleh menggunakan built in function kecuali .push() dan .unshift()
  2. Function menerima parameter berupa nama-nama negara
  3. Function akan mengembalikan multidimensional Array
*/

function countryCollection(countries) {
    var result = [];
    var abjad = [];
    for(i=0; i<countries.length; i++){
        var any = false;
        var temp = [];
        for(j=0; j<abjad.length; j++){
            if(countries[i][0] === abjad[j]){
                any = true;
            }
        }
        if(!any){
            // temp.push(countries[i][0])
            abjad.push(countries[i][0], countries[i])  
        }
    }
    // for(i=0; i<countries.length; i++){
    //     for(j=0; j<abjad.length; j++){
    //         if(countries[i][0] === abjad[j]){
    //             abjad[j].push(countries[i]);
    //         }
    //     }
    // }


    // for(i)
    // for(i=0; i<countries.length; i++){
    //     for(j=0; j<result.length; j++){
    //         if(countries[i][0] === result[j][0]){
    //             result.push(countries[i])
    //         }
    //     }
    //     result.push(countries[i]);
    // }
    console.log(abjad);
  }
  
  console.log(countryCollection(["Barbados", "Oman", "Gibraltar", "Malaysia", "Suriname", "Mayotte", "Turkmenistan", "Austria", "Somalia"]))
  // [ 
  //   [ 'B', 'Barbados', 1 ],
  //   [ 'O', 'Oman', 1 ],
  //   [ 'G', 'Gibraltar', 1 ],
  //   [ 'M', 'Malaysia', 'Mayotte', 2 ],
  //   [ 'S', 'Suriname', 'Somalia', 2 ],
  //   [ 'T', 'Turkmenistan', 1 ],
  //   [ 'A', 'Austria', 1 ] 
  // ]
  
  console.log(countryCollection(["Bhutan", "Comoros", "Botswana", "Iceland", "Lesotho", "Liechtenstein", "Malawi", "Algeria", "Azerbaijan", "Indonesia", "Andorra", "Armenia"]))
  // [
  //   [ 'B', 'Bhutan', 'Botswana', 2 ],
  //   [ 'C', 'Comoros', 1 ],
  //   [ 'I', 'Iceland', 'Indonesia', 2 ],
  //   [ 'L', 'Lesotho', 'Liechtenstein', 2 ],
  //   [ 'M', 'Malawi', 1 ],
  //   [ 'A', 'Algeria', 'Azerbaijan', 'Andorra', 'Armenia', 4 ]
  // ]