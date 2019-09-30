// function changeMe(arr){
//     var result = {};
//     if(!arr.length){
//        return console.log(arr)
//     }

//     for(i=0; i<arr.length; i++){

//             result['firstName'] = arr[i][0];
//             result['lastName'] = arr[i][1];
//             result['gender'] = arr[i][2];
//             if(!arr[i][3] || arr[i][3]>2019){
//                 result['age'] = 'Invalid Birth Year'
//             }else{
//                 result['age'] = 2019 - arr[i][3];

//             }
//             console.log((i+1) + '.' + arr[i][0] + ' '+ arr[i][1])
//             console.log(result);
//     }
//     // return result + console.log('aaa');
// }
// // TEST CASES
// changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// // { firstName: 'Christ',
// //   lastName: 'Evans',
// //   gender: 'Male',
// //   age: 37 }
// // 2. Robert Downey:
// // { firstName: 'Robert',
// //   lastName: 'Downey',
// //   gender: 'Male',
// //   age: 'Invalid Birth Year' }
// changeMe([]); // ""

// function shoppingTime(memberId, money){
//     var result = {};
//     changeMoney = money;
//     var item = [
//         {
//             brand : 'stacattu',
//             price : 1500000,
//             type : 'sepatu'
//        },
//        {
//             brand : 'zoro',
//             price : 500000,
//             type : 'baju'
//        },
//        {
//            brand : 'h&n',
//            price : 250000,
//            type : 'baju'
//        },
//        {
//             brand : 'uniklooh',
//             price : 175000,
//             type : 'sweater'
//        },
//        {
//             brand : 'casingHp',
//             price : 50000,
//             type : 'aksesoris'
//        }
// ]


//     if(!memberId){
//         return 'Mohon maaf, toko X hanya berlaku untuk member saja';
//     }else if(money < 50000){
//         return 'Mohon maaf, uang tidak cukup';
//     }
//     var listPurchased = [];
//     for(i=0;i<item.length; i++){
//         if(money > item[i].price){
//             listPurchased.push(item[i].type + ' ' + item[i].brand);
//             changeMoney -= item[i].price;
//         }
//     }
//     result['memberId'] = memberId;
//     result['money'] = money;
//     result['listPurchased'] = listPurchased;
//     result['change'] = changeMoney;

//     return result;
    
// }
// // TEST CASES
// // console.log(shoppingTime('1820RzKrnWn08', 2475000));
// //   //{ memberId: '1820RzKrnWn08',
// //   // money: 2475000,
// //   // listPurchased:
// //   //  [ 'Sepatu Stacattu',
// //   //    'Baju Zoro',
// //   //    'Baju H&N',
// //   //    'Sweater Uniklooh',
// //   //    'Casing Handphone' ],
// //   // changeMoney: 0 }
// // console.log(shoppingTime('82Ku8Ma742', 170000));
// // //{ memberId: '82Ku8Ma742',
// // // money: 170000,
// // // listPurchased:
// // //  [ 'Casing Handphone' ],
// // // changeMoney: 120000 }
// // console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
// // console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
// // console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

// function countProfit(shoppers){
//     var result = [];
//     var listBarang = [ 
//         { 
//             brand : 'Sepatu Stacattu',
//             price : 1500000, 
//             qty :10
//         },
//         {
//             brand : 'Baju Zoro', 
//             price : 500000, 
//             qty : 2
//         },
//         {
//             brand : 'Sweater Uniklooh', 
//             price : 175000, 
//             qty : 1
//         }
//   ];
//   if(shoppers.length == 0){
//       return shoppers;
//   }

//   for(i=0; i<listBarang.length; i++){
//     var sold = 0;  
//     var buyer = [];
//     var detail = {};
//     for(j=0; j<shoppers.length; j++){
//           if(shoppers[j].product === listBarang[i].brand && listBarang[i].qty >= shoppers[j].amount){
//             listBarang[i].qty -= shoppers[j].amount;
//             sold += shoppers[j].amount;
//             buyer.push(shoppers[j].name);
//         }
//         // console.log(buyer);
//       }
//       detail['product'] = listBarang[i].brand;
//       detail['shoppers'] = buyer;
//       detail['leftOver'] = listBarang[i].qty;
//       detail['profit'] = sold * listBarang[i].price;
//       result.push(detail);
//   }
//   return result;

// }
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
// //[ { product: 'Sepatu Stacattu',
// //   shoppers: [ 'Windi', 'Vanessa' ],
// //   leftOver: 5,
// //   totalProfit: 7500000 },
// // { product: 'Baju Zoro',
// //   shoppers: [],
// //   leftOver: 2,
// //   totalProfit: 0 },
// // { product: 'Sweater Uniklooh',
// //   shoppers: [],
// //   leftOver: 1,
// //   totalProfit: 0 } ]

// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([])); //[]

// function formTrainSeating(passengers) {
//     var gerbong = [[], [], [], [], []];

//     for(i = 0; i<passengers.length; i++){
//         // for(j=0; j<gerbong.length; j++){
//             if(passengers[i] === 'A'){
//                 gerbong[0].push(passengers[i]);
//             }else if(passengers[i] === 'B'){
//                 gerbong[1].push(passengers[i]);
//             }else if(passengers[i] === 'C'){
//                 gerbong[2].push(passengers[i]);
//             }else if(passengers[i] === 'D'){
//                 gerbong[3].push(passengers[i]);
//             }else if(passengers[i] === 'E'){
//                 gerbong[4].push(passengers[i])
//             }
//         // }
//     }

//     return gerbong;

//   }
  
//   console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
//   console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
//   console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
//   console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
//   console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]

// var data = [
//     ['Name', 'Batch'],
//     ['Yusuf', 'Joyful'],
//     ['Icha', 'Infinite'],
//     ['Mahdi', 'Humble'],
//     ['Stef', 'Glory'],
//     ['Dhita', 'Fearless']
// ]
// function spice(data){

//     var result = [];
//     // var obj = {};

//     for(i=1; i<data.length; i++){
        
//            result.push({
//                  Name : data[i][0],
//                  Batch :  data[i][1]
//            }); 
//         // console.log(data[i][0]);
//         // console.log(data[i][1]);
//     }
//     // result.push(obj);
//     return result;
// }

// console.log(spice(data));

/*
ALGHORITM
Buat penampung posisi koordinat dalam bentuk array
Buat variable boolean any dengan nilai false
Buat looping untuk mencari koordinat array yang berisi '*'
    Setelah '*' ketemu maka PUSH koordinat tersebut pada array penampung yang sudah di  deklarasikan di awal kemudian return nilai fungsi pada koordinat.
Jika looping tidak menemukan '*' maka set nilai any menjadi true
jika nilai any true maka fungsi aka me return 'No Drone'.
*/

// function dronePosition(arr){
//     var coordinate = [];
//     var any = false;
//     for(i=0; i<arr.length; i++){
//         for(j=0; j<arr[i].length; j++){
//             if(arr[i][j] === '*'){
//              coordinate.push(i);
//              coordinate.push(j);
//              return coordinate;
//             }
//             else if(arr[2][2] === ''){
//                 any = true;
//             }
//         }
//     }
//     if(any){
//         return 'No Drone';
//     }
// }

// console.log(dronePosition([
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '*']
//   ])); // 2, 2
  
//   console.log(dronePosition([
//     ['', '', ''],
//     ['', '*', ''],
//     ['', '', '']
//   ])); // 1, 1
  
//   console.log(dronePosition([
//     ['', '', '*'],
//     ['', '', ''],
//     ['', '', '']
//   ])); // 0, 2
  
//   console.log(dronePosition([
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ])); // No drone

// function howManyGifts(max, gifts){
//     count = 0;
//     // sortedGift = gifts;
//     for(i=0; i<gifts.length; i++){
//         for(j=0;j<gifts.length-i-1; j++){
//             if(gifts[j]>gifts[j+1]){
//                 temp = gifts[j];
//                 gifts[j] = gifts[j+1];
//                 gifts[j+1] = temp;
//             }
//         }
//     }
//     for(i=0; i<gifts.length; i++){
//         if(max >= gifts[i]){
//             max -= gifts[i];
//             count++
//         }
//     }
//     return count;
// }
// console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
// console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
// console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
// console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
// console.log(howManyGifts(0, [10000, 3000])); // 0

function productCategories(product){
    var type = [];
    var any = false;
    var result = {};
    
    for(i=0; i<product.length; i++){
        if(type.length == 0){
            type.push(product[i][2]);
        }
        // var qty=1;
        for(j=0; j<type.length; j++){
            if(type[j] === product[i][2]){
                any = true;
                qty++;
            }else{
                any = false;
            }

        }
        if(!any){
            
            type.push(product[i][2]);
        }
        
    }
    for(i=0 ;i<type.length; i++){
        var qty = 0;
        for(j=0; j<product.length; j++){
            if(product[j][2] == type[i]){
                qty++;
            }
        result[type[i]] = qty;
        }
        
    }

    return result;
    
}

console.log(productCategories([
    ['Mouse Logitech', 150000, 'Mouse'],
    ['ATI Radeon', 800000, 'Graphic Card'],
    ['NVIDIA Card', 760000, 'Graphic Card'],
    ['Samsung Harddisk 1TB', 1300000, 'Harddisk'],
  ]));
  // { Mouse: 1, 'Graphic Card': 2, Harddisk: 1 }