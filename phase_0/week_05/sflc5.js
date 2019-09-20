
function ongkosKirim(pengirim) {
    var kota = {
            Depok : 1,
            Jakarta : 2,
            Bandung : 3,
            Surabaya : 4,
            Bali : 5
    };
    var result = [];
    for(key in kota){
        for(i=0; i<pengirim.length; i++){
            var bill = 0;
            var jarak = 0;
            if(key === pengirim[i].asal){
                if(key === pengirim[i].tujuan){
                    if(pengirim[i].ekspedisi === 'NJE'){
                       jarak = (kota[pengirim[i].tujuan] - kota[pengirim[i].asal])  
                       if (jarak == 0){
                           bill = 9000 * (90/100);
                       }else{
                           bill = jarak * 9000 * (90/100);
                       }
                    }else{
                        jarak = (kota[pengirim[i].tujuan] - kota[pengirim[i].asal])  
                       if (jarak == 0){
                           bill = 9000;
                       }else{
                           bill = jarak * 9000;
                       }

                    }
                   
                }
            }else if (key !== pengirim[i].tujuan || key !== pengirim[i].asal){
                result.push({
                    pengirim : pengirim[i].nama,
                    tagihan : 0
                })
            }
            result.push({
                pengirim : pengirim[i].nama,
                tagihan : bill

            })
        }


    }

    return result;


  
  }
  
  var case1 = [
    { nama: 'Jasper', asal: 'Depok', tujuan: 'Jakarta', ekspedisi: 'NJE' },
    { nama: 'Kevin', asal: 'Jakarta', tujuan: 'Surabaya', ekspedisi: 'Si Lambat' },
    { nama: 'Barry', asal: 'Bali', tujuan: 'Bandung', ekspedisi: 'NJE' }
  ];
  
  console.log(ongkosKirim(case1))
  /*
  [
    { pengirim: 'Jasper', tagihan: 8100 },
    { pengirim: 'Kevin', tagihan: 18000 },
    { pengirim: 'Barry', tagihan: 16200 }
  ]
  */
  
  var case2 = [
    { nama: 'Patricia', asal: 'Jakarta', tujuan: 'Jakarta', ekspedisi: 'TnJ' },
    { nama: 'Anne', asal: 'Medan', tujuan: 'Depok', ekspedisi: 'NJE' }
  ];
  
//   console.log(ongkosKirim(case2))
  /*
  [ 
    { pengirim: 'Patricia', tagihan: 9000 },
    { pengirim: 'Anne', tagihan: 0 }
  ]
  */