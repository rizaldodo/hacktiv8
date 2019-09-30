function initialObjectGrouping(studentsArr) {
  var result = {};
  for(i=0; i<studentsArr.length; i++){
    var any = false;
    for(key in result){
      if(studentsArr[i][0] === key){
        result[key].push(studentsArr[i])
        any = true;
      }
    }
    if(!any){
      result[studentsArr[i][0]] = [studentsArr[i]]
    }
  }

  return result;
    console.log(result);
}


console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}


*/