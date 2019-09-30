function ganjilGenapAsianGames (date, data) {
    if(date<1 || date>31){
        return 'Invalid dates';
    }
    
    if(date%2 == 0){
        var genap = true; 
    }else{
        var ganjil = true;
    }
    var tilang = 0;
    for(i=0; i<data.length; i++){
        var mobil = false;
        var noPol = 0;
        spaceCounter = 0;
        for(j=0; j<data[i]['plat'].length; j++){
            // console.log(data[i]['plat'][j]);
            if(data[i]['plat'][j] === ' '){
                spaceCounter++
            }
            if(spaceCounter>1){
                noPol = data[i]['plat'][j-1];
                break;
            }
        }
        if(data[i]['type'] === 'Mobil'){
            var mobil = true;
        }
        if(noPol % 2 == 0 && ganjil && mobil){
            // console.log('1')
            tilang++;
        }else if(noPol % 2 == 1 && genap && mobil){
            tilang++;
            // console.log('1')
        }
    }
    // console.log(tilang);
    return tilang
  }
  
  
  console.log(ganjilGenapAsianGames(30, [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }])) // 1
  
  console.log(ganjilGenapAsianGames(26, [{
    plat: 'A 24 HE',
    type: 'Mobil'
  }, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
  }, {
    plat: 'Z 9992 ERT',
    type: 'Mobil'
  }])) // 1
  
  console.log(ganjilGenapAsianGames(1, [{
    plat: 'A 24 WE',
    type: 'Mobil'
  }, {
    plat: 'AB 871 RFS',
    type: 'Mobil'
  }, {
    plat: 'Z 9992 XOXO',
    type: 'Mobil'
  }])) // 2
  
  console.log(ganjilGenapAsianGames(1, [
    {
      plat: 'A 2431 HE',
      type: 'Motor'
    }, {
      plat: 'AB 87112 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Motor'
    }
  ])) // 0
  
  console.log(ganjilGenapAsianGames(32, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
  }])) // invalid dates
  
  console.log(ganjilGenapAsianGames(0, [{
    plat: 'X 123 HAHA',
    type: 'Mobil'
  }])) // invalid dates