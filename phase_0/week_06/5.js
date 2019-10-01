/**
 * =========================
 * Mengumpulkan poin belanja
 * =========================
 * 
 * Ibu sedang mengumpulan poin belanja dan kita diminta membantunya.
 * Dari list barang yang ingin ibu beli, yang sudah ibu urutkan dari
 * pentingnya barang itu, kumpulkanlah sebanyak mungkin poin belanja
 * dengan modal yang diberikan.
 * 
 * Ibu mau kita membeli barang sesuai dari list ibu. 
 * Jika sudah sampai barang terakhir di list dan 
 * kita masih ada sisa uang, maka kita mulai lagi membeli
 * dari barang pertama di list.
 * 
 * Daftar Harga Barang:
 * | Nama        | Harga        | Poin  |
 * | ----------- | ------------ | ----- |
 * | Shampoo     | Rp    20.000 |  100  |
 * | Sabun       | Rp    10.000 |   90  |
 * | Kompor      | Rp 1.000.000 |   65  |
 * | Bantal      | Rp    25.000 |   20  |
 * | Daging Sapi | Rp   300.000 |   15  |
 * 
 * Jadi saat punya uang Rp. 40.000,-
 * Kita harusnya membeli shampoo 1 dan sabun 2 (bukan shampoo 2)
 * karena kita beli dulu shampoo, lalu sabun, lalu tidak cukup uang untuk
 * barang berikut di list sampai Daging Sapi, baru kita mulai lagi
 * dari beli shampoo
 *
 * Dan saat punya uang Rp. 55.000,-
 * Kita harusnya membeli shampoo 1, sabun 1, dan bantal 1
 */

function belanja(modal) {
  var list = {
      'Shampoo' : {
          harga : 20000,
          poin : 100
      },
      'Sabun' : {
          harga : 10000,
          poin : 90
      },
      'Kompor' : {
          harga : 10000000,
          poin : 65
      },
      'Bantal' : {
          harga : 25000,
          poin : 20
      },
      'Daging Sapi' : {
          harga : 20000,
          poin : 15
      }
      
      

  }
var result = {};
var counterShampoo = 0;
var counterSabun = 0;
var counterKompor = 0;
var counterBantal = 0;
var counterDaging = 0;
var poin = 0
// for(key in list){
    while(modal >= list['Sabun']['harga']){
        if(modal>=list['Shampoo']['harga']){
            modal -= list['Shampoo']['harga'];
            counterShampoo++;
            poin+=list['Shampoo']['poin']
            
        }
        if(modal>=list['Sabun']['harga']){
            modal -= list['Sabun']['harga'];
            counterSabun++;
            poin+=list['Shampoo']['poin']
        }
        if(modal>=list['Kompor']['harga']){
            modal -= list['Kompor']['harga'];
            counterKompor++;
            poin+=list['Shampoo']['poin']
        }
        if(modal>=list['Bantal']['harga']){
            modal -= list['Bantal']['harga'];
            counterBantal++;
            poin+=list['Shampoo']['poin']
        }
        if(modal>=list['Daging Sapi']['harga']){
            modal -= list['Daging Sapi']['harga'];
            counterDaging++;
            poin+=list['Shampoo']['poin']
        }
        
        
    }
    
    var belanja = {'Shampoo' : counterShampoo,
                    'Sabun' : counterSabun,
                    'Kompor' : counterKompor,
                    'Bantal' : counterBantal,
                    'Daging Sapi' : counterDaging};

    var result = {belanja, modal, poin}
return result;

  }
  
  console.log(belanja(100000))
  // { belanja: { Shampoo: 2, Sabun: 3, Bantal: 1 },
  //   kembalian: 5000,
  //   totalPoin: 490 }
  
  console.log(belanja(1000000))
  // { belanja: { Shampoo: 7, Sabun: 8, Bantal: 7, 'Daging Sapi': 2 },
  //   kembalian: 5000,
  //   totalPoin: 1590 }
  
  console.log(belanja(1150500))
  // { belanja: { Shampoo: 3, Sabun: 4, Kompor: 1, Bantal: 2 },
  //   kembalian: 500,
  //   totalPoin: 765 }
  
  console.log(belanja(0))
  // {
  //   belanja: 'Kosong',
  //   kembalian: 0,
  //   totalPoin: 0
  // }