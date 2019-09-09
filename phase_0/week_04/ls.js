///11111

function graduatesCount(arr){
    var passed = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] >= 75){
            passed++;
        }
    }
    return passed, 'orang lulus';
}

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus