function findDelta(arr){
    var posX = [];
    var posY = [];

    for(i=0; i<arr.length; i++){
        for(j=0; j<arr[i].length; j++){
            if(arr[i][j] !== ' '){
                posX.push(j);
                posY.push(i);
            }
        }
    }
    if (posX.length < 2){
        return 'Range invalid';
    }
    var rangeX = Math.abs(posX[0] - posX[1]);
    var rangeY = Math.abs(posY[0] - posY[1]);
    var range = rangeX + rangeY;
    console.log('pos x : ',posX,'pos y : ', posY);
   
    return range;
}

var arr1 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ]
  console.log(findDelta(arr1)) // 3
  
  var arr2 = [
    [' ', ' ', ' ', ' ', '*'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', '*', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ]
  console.log(findDelta(arr2)) // 5
  
  var arr3 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ]
  console.log(findDelta(arr3)) // Jarak tidak ditemukan