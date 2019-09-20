function countStar(stars) {
    var starBank = [];
    var sumStars = 0;
    for(i=0; i<stars.length; i++){
       var countStars = 0;
        for(j=0; j<stars[i].length; j++){
            if(stars[i][j] === '*'){
                countStars++
            }
        }
        starBank.push(countStars);

    }
    for(i=0; i<starBank.length; i++){
        sumStars += starBank[i];
    }
    return (sumStars/starBank.length).toFixed(2);
  }
  
  console.log(countStar([
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', ' '],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', ' '],
  ]));
  // 3.33
  
  console.log(countStar([
    ['*', '*', '*', '*', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', ' '],
    ['*', '*', '*', '*', '*'],
  ]));
  // 4.22