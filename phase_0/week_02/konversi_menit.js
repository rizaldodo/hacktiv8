
function konversiMenit(raw){
    var minutes = raw % 60;
    var hours = Math.floor(raw/60);
    if(minutes < 10){
        return hours + ':0' + minutes;
    }else{
        return hours + ':' + minutes;
    }
}

console.log(konversiMenit(120));
