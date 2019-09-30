function miniSudokuBoard(text) {
    var result = []
    var temp = [];
    var count = 0;
    for(i=0; i<text.length; i++){
        temp.push(text[i])
        count++;
        if(count>2){
            result.push(temp);
            temp = [];
            count = 0;
        }
    }
    if(text.length<9 && text.length>0){
        return 'Invalid input';
    }else if(text === ''){
        return 'Empty board';
    }
    return result;
    
  }
  
  console.log(miniSudokuBoard('005030081'));
  // /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
  console.log(miniSudokuBoard('105802000'));
  // [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
  console.log(miniSudokuBoard('608730000'));
  // [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
  console.log(miniSudokuBoard('096040001'));
  // [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
  console.log(miniSudokuBoard('87109'));
  // Invalid input
  console.log(miniSudokuBoard(''));
  // Empty board