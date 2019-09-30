var data = [
    { nama: 'Harry Potter',
     nilai: 80, 
     asrama: 'Griffindor' 
    },
    { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
    { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
    { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
    { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
    { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
    { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
    { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
  ];
function raportAsrama(data){

    var result = [{
        asrama : 'Griffindor',
        gagal : [],
        lulus : []
    },
    {
        asrama : 'Ravenclaw',
        gagal : [],
        lulus : []
    },
    {
        asrama : 'Slytherin',
        gagal : [],
        lulus : []
    }
        
];
    for(i=0; i<data.length; i++){
        if(data[i].asrama === 'Griffindor' && data[i].nilai >= 70){
            result[0].lulus.push(data[i].nama);

        }else if(data[i].asrama === 'Griffindor' && data[i].nilai < 70){
            result[0].gagal.push(data[i].nama);
        }
        if(data[i].asrama === 'Ravenclaw' && data[i].nilai >= 70){
            result[1].lulus.push(data[i].nama);

        }else if(data[i].asrama === 'Ravenclaw' && data[i].nilai < 70){
            result[1].gagal.push(data[i].nama);
        }
        if(data[i].asrama === 'Slyterin' && data[i].nilai >= 70){
            result[2].lulus.push(data[i].nama);

        }else if(data[i].asrama === 'Slyterin' && data[i].nilai < 70){
            result[2].gagal.push(data[i].nama);
        }

        
    }


    // var asrama = [];
    // var detail = {};
    // var gagal = [];
    // var lulus = [];

    // for(i=0; i<data.length; i++){
    //     if(asrama.length = 0){
    //         asrama.push(data[i].asrama);
    //     }
    //     var ada = false;
    //     for(j=0; j<asrama.length; j++){
    //         if(asrama[j] === data[i].asrama ){
    //             ada = true;
    //             break;
                
    //         }
    //     }
    //     if(!ada){
    //         asrama.push(data[i].asrama);
    //     }
    // }
    // console.log(asrama);

    // for(i=0; i<data.length; i++){
    //     if(data[i].asrama === 'Griffindor' && data[i].nilai >= 70 ){
    //         detail['asrama'] = 'Griffindor';
    //         detail['lulus'] = lulus.push(data[i].nama);
    //     } 
    // }

    return result;
}
console.log(raportAsrama(data));
/*
[
  {
    asrama: 'Griffindor',
    gagal: ['Dean Thomas', 'Ginny Weasley'],
    lulus: ['Harry Potter']
  },
  {
    asrama: 'Ravenclaw',
    gagal: ['Cho Chang', 'Penelope Clearwater'],
    lulus: []
  },
  {
    asrama: 'Slyterin',
    gagal: ['Gregory Goyle'],
    lulus: ['Pansy Parkinson', 'Tom Marvolo Riddle']
  }
]
*/