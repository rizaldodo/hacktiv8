//pseudocode
/*
STORE result equals {}
    FOR each index of parameter
    STORE couter equals to 0
      DO check every index, 
        if any same value of index DD counter add by 1
*/

function counter(arr) {
    // var arrStr = '' + arr
    var result = {};
   
    for(i=0; i<arr.length; i++){
        if(result[arr[i]] === undefined){
            result[arr[i]] = 1
        }else{
            result[arr[i]]++;
        }
    }
    return result;
  }

  
  console.log(counter(['Joyful', 'Infinite', 'Humble', 'Joyful', 'Glory', 'King', 'Humble', 'Infinite']))
  // { Joyful: 2, Infinite: 2, Humble: 2, Glory: 1, King: 1 }
  
  console.log(counter([true, true, false, true, false, true, false, false, true, false]))
  // { true: 5, false: 5 }
  
  console.log(counter([1, 2, 3, 4, 5, 6, 4, 3, 2, 5, 6, 8, 7, 6, 9, 8, 7, 0, 8, 7, 6, 5, 4, 3]))
  // {
  //   '0': 1,
  //   '1': 1,
  //   '2': 2,
  //   '3': 3,
  //   '4': 3,
  //   '5': 3,
  //   '6': 4,
  //   '7': 3,
  //   '8': 3,
  //   '9': 1
  // }