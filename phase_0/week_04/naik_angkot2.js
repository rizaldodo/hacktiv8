function naikAngkot(arrPenumpang){
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var passanger = [];
    for(i=0; i<arrPenumpang.length; i++){
        var fares = 0;
        var onBoard = false;
        var temp = {};
        for(j=0; j<rute.length; j++){
            if(arrPenumpang[i][2] === rute[j]){
                break;
            }else if(arrPenumpang[i][1] === rute[j]){
                onBoard = true; 
            }
            if(onBoard){
                fares+=2000;
            }
            
        }
        temp['penumpang'] = arrPenumpang[i][0];
        temp['naikDari'] = arrPenumpang[i][1];
        temp['tujuan'] = arrPenumpang[i][2];
        temp['bayar'] = fares;

        passanger.push(temp);
    }

    return passanger;

}

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]