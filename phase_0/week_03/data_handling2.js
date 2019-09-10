var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/10/1989", "Membaca"];

function sort(date){
  var result = date.sort(function(a,b){
    return Number(a) < Number(b)
  });
  return result;
}
function dataHandling2(data) {
   
  // data.pop();
  data.splice(1,1, 'Roman Alamsyah Elsharawy');
  data.splice(2,1, 'Provinsi Bandar Lampung');
  data.splice(4,1, 'Pria', 'SMA International Metro')
  // data.push('Pria', 'SMA International Metro')

  var dataDate = input[3];
  var dateSplit = dataDate.split('/')
 
  var dataDate2 = dateSplit.join('-');
  var name = data[1].slice(0, 14);
  var month;
  // console.log(data);
  switch(dateSplit[1]){
    case '01':
      month = 'Januari';
      break;  
    case '02':
      month = 'Februari';
      break;  
    case '03':
      month = 'Maret';
      break;  
    case '04':
      month = 'April';
      break;  
    case '05':
      month = 'Mei';
      break;  
    case '06':
      month = 'Juni';
      break;  
    case '07':
      month = 'Juli';
      break;  
    case '08':
      month = 'Agustus';
      break;  
    case '09':
      month = 'September';
      break;  
    case '10':
      month = 'Oktober';
      break;  
    case '11':
      month = 'November';
      break;  
    case '12':
      month = 'Desember';
      break;  
  }

  console.log('1. ', data);
  console.log('2. ', month);
  console.log('3. ', sort(dateSplit));
  console.log('4. ', dataDate2);
  console.log('5. ', name);

}

dataHandling2(input);
