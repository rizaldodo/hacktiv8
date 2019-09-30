function bestFunctionChart(str){
    var band = [];
    var song = [];
    var result = {};
    for(i=0; i<str.length; i++){
        var hurufJudul = '';
        var hurufBand = '';
        var dash = false;
        for(j=0; j<str[i].length; j++){
            if(str[i][j] !== '-'){
                hurufJudul += str[i][j];
                
            }else if(str[i][j] === '-'){
                dash = true;
            }

            if(dash){
                hurufBand += str[i][j];
            }
        }
        band.push(hurufBand);
        song.push(hurufJudul);
    }
    console.log(song);
    console.log(band);

}

console.log(bestFunctionChart(['Melamarmu-Badai','Melamarmu-Badai', 'Demi Cinta-Kerispatih', 'Tak Lekang Oleh Waktu-Kerispatih', 'Demi Cinta-Kerispatih', 'Melamarmu-Badai']));
/*
{
  Badai: [
    {'song title': 'Melamarmu', total: 3}
  ],
  Kerispatih: [
    {'song title': 'Demi Cinta', total: 2},
    {'song title': 'Tak Lekang Oleh Waktu', total: 1}
  ]
}
*/