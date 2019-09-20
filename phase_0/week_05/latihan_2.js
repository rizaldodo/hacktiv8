// /**
//  * ===================
//  * Proxytia BUT Object
//  * ===================
//  * 
//  * [DESCRIPTION]
//  * Masih ingat dengan proxitia? Kali ini buatlah sebuah function yang mengecek apakah karakter yang kamu buat
//  * sudah valid untuk bermain di proxytia.
//  * 
//  * [INSTRUCTIONS]
//  * 1. fungsi menerima 3 parameter: `name, role, weapon`
//  * 2. fungsi akan mengecek apakah role dan senjata yang digunakan sudah valid atau belum
//  * 
//  * [RULES]
//  * 1. `Dilarang menggunakan built-in functions`
//  * 2. Asumsi semua parameter selalu terisi
//  */

function proxytiaObject(name, role, weapon) {

    var proxytia = {
      ksatria: ['pedang', 'tombak'],
      tabib: ['gada'],
      penyihir: ['tongkat'],
      programmer: ['tongkat']
    }
  
    if(proxytia[role] === undefined) return 'Role invalid.';
    else{
        var countWeapon = 0;
        for(i=0; i<=proxytia[role].length; i++){
        if(countWeapon == proxytia[role].length){
            countWeapon = 0;
          return 'Senjata invalid.';  
           
        }else if(weapon === proxytia[role][i]){
            return 'Selamat datang di Proxytia '+ role +' ' + name +', gunakan ' + weapon + 'mu untuk bermain.';

          }else{
            //   console.log(proxytia[role][i] + i);
              countWeapon++
          }
      }
    }

    // Write your code here
//     if(proxytia[role] === undefined){
//         return 'Role invalid';
//     }else{
//         for(key in proxytia){
//             // console.log(key);
//             for(i=0; i<=proxytia[key].length; i++){
//                 // console.log(weapon, '===', proxytia[key][i] ,'&&', role ,'===', key)
//                 if(i == proxytia[key].length){
//                         return 'Senjata invalid.'
//                     }
//                 if(weapon === proxytia[key][i] && role === key){
//                         return  'Selamat datang di Proxytia'+ role +' ' + name +', gunakan ' + weapon + 'mu untuk bermain.'
//                 }
//             }
            
//         }
//     }
    
  }
  
  console.log(proxytiaObject('Ucup', 'ksatria', 'tombak'))
  // Selamat datang di Proxytia ksatria Ucup, gunakan tombakmu untuk bermain.
  
  console.log(proxytiaObject('Icha', 'penyihir', 'pedang'))
  // Senjata invalid.
  
  console.log(proxytiaObject('Armedi', 'programmer', 'tongkat'))
//   // Role invalid
  
  console.log(proxytiaObject('Stef', 'penyihir', 'tongkat'))
  // Selamat datang di Proxytia penyihir Stef, gunakan tongkatmu untuk bermain.