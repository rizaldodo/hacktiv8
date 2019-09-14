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

function formTrainSeating(passengers) {
    var gerbong = [[], [], [], [], []];

    for(i = 0; i<passengers.length; i++){
        // for(j=0; j<gerbong.length; j++){
            if(passengers[i] === 'A'){
                gerbong[0].push(passengers[i]);
            }else if(passengers[i] === 'B'){
                gerbong[1].push(passengers[i]);
            }else if(passengers[i] === 'C'){
                gerbong[2].push(passengers[i]);
            }else if(passengers[i] === 'D'){
                gerbong[3].push(passengers[i]);
            }else if(passengers[i] === 'E'){
                gerbong[4].push(passengers[i])
            }
        // }
    }

    return gerbong;

  }
  
  console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
  console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
  console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
  console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
  console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]