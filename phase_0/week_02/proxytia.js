var nama = 'sapi';
var peran = 'tabib';

if (nama === '' && peran === '') {
    console.log('Nama dan Peran harus di isi !');
}else if (nama === '') {
    console.log('Nama harus di isi!');
}else if (peran === '') {
    console.log('Halo bro ' + nama + ', Silahkan pilih peran mu untuk memulai game!' )
}else if (peran === 'ksatria') {
    console.log('Selamat datang di dunia Proxytia saudara/i ' + nama);
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu !!!!');
}else if (peran === 'tabib') {
    console.log('Selamat datang di dunia Proxytia saudara/i ' + nama);
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka !!!!'); 
}else if (peran === 'penyihir') {
    console.log('Selamat datang di dunia Proxytia saudara/i ' + nama);
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenaganmu !!!!');
}else {
    console.log('Wahai saudara/i ' + nama + ' yang terhormat')
    console.log('Peran yang anda pilih tidak ada, silahkan pilih salah satu peran anda sebagai ksatria atau tabib, atau penyihir');
}