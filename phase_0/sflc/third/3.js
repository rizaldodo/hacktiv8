function highestTopSpeed(data) {
    var splittedData = data.split(',');
    var speed = [];

    for(i=0; i<splittedData.length; i++){
        for(j=0; j<splittedData[i].length; j++){
            if(splittedData[i][j] === ' '){
                var temp = [];
                for(k=j-3; k<j; k++ ){
                   temp.push(splittedData[i][k]);
                }
                temp = temp.join('');
                speed.push(temp);
            }

        }
    }

    for(i=0; i<speed.length; i++){
        for(j=0; j<speed.length-i-1; j++){
            if(speed[j]>speed[j+1]){
                tempSpd = speed[j+1];
                speed[j+1] = speed[j];
                speed[j] = tempSpd;
            }
        }
    }
    // console.log(speed);
    if(data.length == 0){
        return 'No data'
    }
    return speed[speed.length-1];
    
  }
  
  console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
  // 180
  
  console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
  // 200
  
  console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
  // 175
  
  console.log(highestTopSpeed(''));
  // No data