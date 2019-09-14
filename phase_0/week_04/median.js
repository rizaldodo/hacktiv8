function cariMedian(arr){
    var median;
    var mid = arr.length/2;
    if(arr.length % 2 == 0){
        median = (arr[mid-1] + arr[mid])/2;
    }else if(arr.length % 2 == 1){
        // Math.ceil(mid);
        median = arr[Math.ceil(mid-1)];
    }
    // for(i=0; i<arr.length; i++){
    //     for(j=0; j<arr.length-i-1; j++){
    //         if(arr[j]>arr[j+1]){
    //             temp = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = temp;

    //         }
    //     }
    // }
    return median;
    
}
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5