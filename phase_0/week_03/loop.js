var joyful = ['Rizal', 'Alif', 'Faqih', 'Rendo'];

for(i=0; i<joyful.length; i++){
    for(j=0; j<joyful[i].length; j++){
        console.log(joyful[i][j]);
        if(joyful[i][j] === 'a' || joyful[i][j] ==='A'){
            console.log(joyful[i][j], ' ada huruf a');
        }
    }
    console.log('');
}