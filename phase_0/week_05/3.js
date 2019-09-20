function kenaRazia(date, data) {
    var lokasiRazia = [
      'Gajah Mada',
      'Hayam Wuruk',
      'Sisingamangaraja',
      'Panglima Polim',
      'Fatmawati',
      'Tomang Raya',
    ]
    var ganjil = false;
    var mobil = false; 
    var result = [];

    if(date % 2 != 0){
      ganjil = true;
    }
    
    for(i=0; i<data.length; i++){
      if(data[i].type === 'Mobil'){
        mobil=true;
      }
      // var noPol = '';
      var count = 0;
      var numTemp = [];
      for(j=0;j<data[i].plat.length; j++){
        
        if(data[i].plat[j] === ' '){
          count++

        }
        if(count > 1){
          numTemp.push(data[i].plat[j-1]);
          break;
        }
      }
      var countTilang = 0;
      // console.log(numTemp)
      if(ganjil && numTemp[0] % 2 === 0 && mobil){
        for(j=0; j<data[i].rute.length; j++){
          var tilang = false;
          for(k=0; k<lokasiRazia.length; k++){
            if(data[i].rute[j] === lokasiRazia[k]){
              countTilang++;
            }
          }
        }
        

      }else if(!ganjil && numTemp[0] % 2 === 1 && mobil){
        for(j=0; j<data[i].rute.length; j++){
          var tilang = false;
          for(k=0; k<lokasiRazia.length; k++){
            if(data[i].rute[j] === lokasiRazia[k]){
              countTilang++;
            }
          }
        }
      }
      
      if(countTilang > 0){
        result.push({
          name : data[i].name,
          tilang : countTilang
        });
        
      }
    }
    return result;
    // Write your code here
  }
  
  console.log(kenaRazia(27, [{
    name: 'Denver',
    plat: 'B 2791 KDS',
    type: 'Mobil',
    rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
  },
  {
    name: 'Toni',
    plat: 'B 1212 JBB',
    type: 'Mobil',
    rute: ['Pintu Besar Selatan', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang']
  },
  {
    name: 'Stark',
    plat: 'B 444 XSX',
    type: 'Motor',
    rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
  },
  {
    name: 'Anna',
    plat: 'B 678 DD',
    type: 'Mobil',
    rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
  },
  ]))
  
  // [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]