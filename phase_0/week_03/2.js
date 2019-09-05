function computeGrade(nilai){

    if(nilai >= 85 && nilai <= 100){
        return 'A';
    }else if(nilai >= 80 && nilai <= 84){
        return 'A-';
    }else if(nilai >= 75 && nilai <= 79){
        return 'B+';
    }else if(nilai >= 70 && nilai <= 74){
        return 'B';
    }else if(nilai >= 65 && nilai <= 69){
        return 'B-';
    }else if(nilai >= 60 && nilai <= 64){
        return 'C+';
    }else if(nilai >= 55 && nilai <= 59){
        return 'C';
    }else if(nilai < 55 ){
        return 'Tidak lulus';
    }else if(nilai > 100 ){
        return 'CHEATER';
    }
}

console.log(computeGrade(11));