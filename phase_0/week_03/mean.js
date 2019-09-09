function cariMean(arr){
    var sumOf = 0;
    for(i=0; i<arr.length; i++){
        sumOf += arr[i];
    }
    var avg = sumOf/arr.length;
    // if(avg-(Math.floor(avg) < 0.5)){
    //     return Math.floor(avg);
    // }
    // if(avg-(Math.floor(avg) >= 0.5)){
    //     return Math.ceil(avg);
    // }
    return Math.round(avg);
}
// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7