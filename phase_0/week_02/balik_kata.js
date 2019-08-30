
var word = 'aksdkajdladljewa';

function balikKata(word){
    var reverse = ''
    for(var i = word.length-1; i >= 0; i--){
        reverse += word[i];
    }
    return reverse;
}

console.log('Hasil balik kata dari ' + '\'' + word + '\''+' yaitu ' + '\'' + balikKata(word) + '\'');