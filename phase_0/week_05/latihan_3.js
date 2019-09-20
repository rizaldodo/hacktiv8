function kenaRazia(date, data) {
    var lokasiRazia = [
      'Gajah Mada',
      'Hayam Wuruk',
      'Sisingamangaraja',
      'Panglima Polim',
      'Fatmawati',
      'Tomang Raya',
    ]
    var result = [];
    if(date % 2 == 1){
        var dateGanjil = true;
    }else{
        var dateGanjil = false;
    }

    for(i=0; i<data.length; i++){
       if(data[i]['type'] === 'Mobil'){
           var mobil = true;
       }else{
           var mobil = false;
       }

        var spaceCount = 0;
        var platNmr = [];
        for(j=0; j<data[i]['plat'].length; j++){
            if(data[i]['plat'][j] === ' '){
                spaceCount++
            }
            if(spaceCount > 1){
                platNmr.push(data[i]['plat'][j-1]);
                break;
            }

        }
        var tilang = 0;
        for(j=0; j<data[i]['rute'].length; j++){
            for(k=0; k<lokasiRazia.length; k++){
                if(mobil && data[i]['rute'][j] === lokasiRazia[k] && dateGanjil && platNmr % 2 == 0){
                    tilang++;
                }else if (mobil && data[i]['rute'][j] === lokasiRazia[k] && !dateGanjil && platNmr % 2 == 1){
                    tilang++
                }

            }
            
        }
        if(tilang>0){
            result.push({
                name : data[i]['name'],
                tilang : tilang
            });

        }
        // if(dateGanjil && platNmr % 2 == 0)
        // console.log(platNmr);
    }
    return result;
    // Write your code here
  }
  
  console.log(kenaRazia(28, [{
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
    rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang', 'Panglima Polim']
  },
  {
    name: 'Anna',
    plat: 'B 678 DD',
    type: 'Mobil',
    rute: ['Fatmawati', 'Panglima Polim', 'Depok', 'Senen Raya', 'Kemang', 'Gajah Mada']
  },
  ]))
  
  // [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]