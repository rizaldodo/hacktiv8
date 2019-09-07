function groupAnimals(arr) {
    var sortArr = arr.sort();
    var result = [];
    var temp = [];

    for(i=0; i<sortArr.length; i++){
       temp.push(sortArr[i])
       if(sortArr[i+1] !== undefined){
           if(sortArr[i][0] !== sortArr[i+1][0]){
            //    temp.push(sortArr[i+1]);
               result.push(temp);
               temp = [];
           }
       } 
    }
    result.push(temp);
    return result
  
  }
  
//   // TEST CASES
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// anoa, ayam , cacing, cicak, kancil, kuda, unta