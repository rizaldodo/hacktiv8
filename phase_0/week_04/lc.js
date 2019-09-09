function merge(arr1, arr2){
    var arrMerge = [];
    var arrMerge2 = [];

    for(i=0; i<arr1.length; i++){
        arrMerge.push(arr1[i]);
        
    }
    for (i=0; i<arr2.length; i++){
        var temp = [];
        for (j=0; j<arrMerge.length; j++){
            if(arr2[j] !== arrMerge[i]){
                temp.push(arr2[i]);
            }
        }
        arrMerge.push(temp);
    }
    // for(i=0; i<arr2.length; i++){
    //     arrMerge.push(arr2[i]);
    // }

    // for(i=0; i<arrMerge.length; i++){
    //     for(j=i; j<arrMerge.length; j++){
    //         if(arrMerge[i] !== arrMerge[j]){
    //             arrMerge2.push(arrMerge[j]);
    //         }
    //     }
    // }
    return arrMerge;
}

// function graduatesCount(arr){
//     var passed = 0;
//     if (arr.length < 1){
//         return 'Data kosong';
//     }

//     for(i=0; i<arr.length; i++){
//         if(arr[i] >= 75){
//             passed++;
//         }
//     }
//     if (passed == 0){
//         return 'Tidak ada yang lulus';
//     }else if(passed == arr.length){
//         return 'Semua lulus';
//     }
//     return passed + ' orang lulus';
// }

// function reverseAll(arr){
//     var arrReversed = [];
    

//     for(i=arr.length-1; i>=0; i--){
//         var temp = '';
//         for(j=arr[i].length-1; j>=0; j--){
//             temp += arr[i][j];
//         }
//         arrReversed.push(temp);
//     }
//     return arrReversed;
// }
// console.log(reverseAll(['dimitri', 'sergei', 'alexei']));
// // ['iexela', 'iegres', 'irtimid']

// console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// // [ 'ollem', 'raen', 'teilwal', 'arik' ]

// console.log(reverseAll([]));
// // []

function bubbleSort(arr) {
    
    for (var i =0; i<arr.length-1;i++) {
        for (var j =0; j<arr.length-i-1;j++) {
            if (arr[j] > arr[j+1]) {
                //SWAP j+1 and j
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
 }
//  console.log(bubbleSort([50,45,99,1,23,44,43]));
                    //  0  1  2   3


// console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
// console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
// console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
// console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
// console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
// console.log(graduatesCount([])); // Data kosong
console.log(merge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
console.log(merge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));

//pseudo
/*
========1111111111111111111=========
1. store array scores with any value
2. store passed with value equals to 0
3. for each index array scores grater than 75,
     passed incline with 1
4. if array scores length equals to 0, 
     display 'Data kosong'
5. else if passed equal to array length 
     display 'semua lulus'
6. else if passed equal to 0 
     display 'Tidak ada yang lulus'
     
========2222222222222222222==========
1. STORE arr with any value name
2. STORE store arrReverse equals to []
3. FOR each arr[i], i  equals to length of arr minus 1
     STORE temp equals to ''
     FOR each arr[i][j], j equals to length of arr[i] minus 1
        PUSH arr[i][j] to temp
        j--
     END FOR
     PUSH temp to arrReverse
   END FOR
4. RETURN to arrReverse

========3333333333333333333==========
1. STORE arr1 with any name 
2. STORE arr2 with any name
3. STORE arrMerge with []
4. FOR each arr[i]
     PUSH arr1[i] to arrMerge
   END FOR
5. FOR each arr2[i]
     STORE counter equals to 0
     FOR each arrMerge[j]
       check if arr2[i] equals to arrMerge[j]
       counter ++
     END FOR
       IF counter below 0
         PUSH arr2[i] to arrMerge
       END IF
    END FOR
6. RETURN arrMerge

*/