function naikAngkot(arr){
    var route = ['A','B','C','D','E','F'];
    var passanger = [];
    for(i=0; i<arr.length; i++){
        var onBoard = false;
        var details = {};
        var fares = 0;
        for(j=0;j<route.length;j++){
            if(arr[i][2] === route[j]){
                break;
            }
            if(arr[i][1] === route[j]){
                onBoard = true;
            }
            if(onBoard){
                fares += 2000;
            }

        }
        
    details['penumpang'] = arr[i][0];
    details['naikDari'] = arr[i][1];
    details['tujuan'] = arr[i][2];
    details['bayar'] = fares;
    passanger.push(details);
    }
    return passanger;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]