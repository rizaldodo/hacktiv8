var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(data) {
  data.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"); 
  var dataDate = data[3].split('/');
  var dataDate2 = dataDate.join('-');
  var name = data[1].slice(0, 14);
  var month;
  switch(dataDate[1]){
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
  console.log('3. ', dataDate);
  console.log('4. ', dataDate2);
  console.log('5. ', name);

}

dataHandling2(input);
