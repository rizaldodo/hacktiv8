function initialGroupingDescending(arr){
    var name = [];
    
     for(i=0; i<arr.length; i++){
        var any = false;
        for(j=0; j<name.length; j++){
          if(arr[i][0] === name[j][0]){
            name[j].push(arr[i]);  
            any = true;

          }
        }
        if(!any){
            name.push([arr[i][0], arr[i]])
        }
    }
    for(i=0; i<name.length; i++){
        for(j=0; j<name.length-i-1; j++){
            if(name[i][0] < name[i+1][0]){
                var temp = name[i];
                name[i] = name[i+1];
                name[i+1] = temp;
            }
        }
    }
    
    console.log(name)
}
console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/