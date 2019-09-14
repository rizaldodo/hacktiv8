var barang = [
   {
       brand: 'stacattu',
       type: 'sepatu',
       price: 1500000 
   },
   {
       brand: 'zoro',
       type: 'baju',
       price: 500000
   },
   {
       brand: 'H&N',
       type: 'baju',
       price: 250000
       
   },
   {
       brand: 'uniklooh',
       type: 'sweater',
       price: 175000 
   },
   {
       brand: 'casingHp',
       type: 'aksesoris',
       price: 50000
   }

] 

function shoppingTime(memberId, money){

 var result = {};
 var changeMoney = money;
 var listPurchased = [];

    if(memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }
    if(memberId === ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    }else if(money < 50000 || money === undefined){
        return 'Mohon maaf, uang tidak cukup';
    }
    for(i=0; i<barang.length; i++){
        if(changeMoney >= barang[i].price){
            changeMoney -= barang[i].price;
            listPurchased.push(barang[i].type + ' ' + barang[i].brand);
        }
       
    }

  
    result['memberId'] = memberId;
    result['money'] = money;
    result['listPurchased'] = listPurchased;
    result['changeMoney'] = changeMoney;
return result;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja