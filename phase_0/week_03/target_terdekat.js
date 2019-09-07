function targetTerdekat(arr) {
    // you can only write your code here!
    // cari jarak x dan o
    var posX = [];
    var posO = '';
    var gap = [];

    for(i=0; i<arr.length; i++){
      if(arr[i] === 'x'){
        posX.push(i);
      }else if(arr[i] === 'o'){
        posO = i;
      }
    }

    for(i=0; i<posX.length; i++){
      temp = absolut(posX[i] - posO);
      gap.push(temp);
    }

    var min = gap[0];
    for(i=0; i<gap.length; i++){
      if(gap[i] < min){
        min = gap[i];
      }
    }
    
    if (posX < 1){
      return 0;
    }

    return min;

  }

function absolut(n){
    if(n<0){
      return n*(-1);
    }else{
      return n*1;
    }
  }
  // console.log(absolut(-4));
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2