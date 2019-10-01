function steam(arr) {
    if(arr.length == 0){
        return {subTotal : 0}
    }
    var result = {};
    var listGame = {
      gta5 : {
          name : 'Grand Theft Auto V',
          genre : 'action',
          price : 290000
      },
      aco : {
          name : `Assasin's Creed Odyssey`,
          genre : 'rpg',
          price : 500000
      },
      csgo : {
          name : 'Counter Strike: Global Offensive',
          genre : 'first-person shooter',
          price : 120000
      },
      pubg : {
          name : `Playerunknown's Battlegrounds`,
          genre : 'first-person shooter',
          price : 210000
      },
      mhw : {
          name : 'Monster Hunter: World',
          genre : 'action',
          price : 250000
      }
  }
  var subTotal = 0;
  var tempAction = []; 
  var tempFps = [];
  var tempRpg = [];
  for(game in listGame){
    for(i=0; i<arr.length; i++){
          if(arr[i] == game){
              subTotal += listGame[game].price;

                if(listGame[game].genre === 'action'){
                  tempAction.push({
                      title : listGame[game].name
                  })
                  result['action'] = tempAction; 
                }else if(listGame[game].genre === 'first-person shooter'){
                    tempFps.push({
                        title : listGame[game].name
                    })
                    result['first-person shooter'] = tempFps; 
                }else if(listGame[game].genre === 'rpg'){
                    tempRpg.push({
                        title : listGame[game].name
                    })
                    result['rpg'] = tempRpg; 
              }
          }
      }
  }
  result['subTotal'] = subTotal;

return result;
}


console.log(steam([]))
// // {
// //   subTotal: 0
// // }

console.log(steam(['gta5', 'aco']))
// {
//   action: [{ title: 'Grand Theft Auto' }],
//   rpg: [{title: 'Assassins Creed Odyssey'}],
//   subTotal: 750000
// }

console.log(steam(['aco', 'pubg', 'mhw']))
// {
//   rpg: [{ title: 'Assassins Creed Odyssey'}],
//   'first-person shooter': [{ title: 'Playerunknowns Battlegrounds'}],
//   action: [{ title: 'Monster Hunter: World'}],
//   subTotal: 960000
// }

console.log(steam(['gta5', 'aco', 'pubg', 'csgo', 'mhw']))
// {
//   action: [
//     {
//       title: 'Grand Theft Auto V'
//     }, {
//       title: 'Monster Hunter: World'
//     }
//   ],
//   rpg: [
//     {
//       title: 'Assassins Creed Odyssey'
//     }
//   ],
//   'first-person shooter': [
//     {
//       title: 'Playerunknowns Battlegrounds'
//     }, {
//       title: 'Counter Strike: Global Offensive'
//     }
//   ],
//   subTotal: 1370000
// }