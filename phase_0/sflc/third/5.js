function deleteUndefinedKeys(data) {
    var result = [];
    for(i=0; i<data.length; i++){
      var newData = {};
      for(key in data[i]){
          if(data[i][key] !== undefined){
            newData[key] = data[i][key];
          }
        }
        result.push(newData);
      }
    // console.log(result)
    return result;
    
  }
  
  console.log(deleteUndefinedKeys([
    {
      name: 'Dimitri',
      address: undefined,
      email: 'dimitri@mail.com',
      age: undefined,
      gender: 'male'
    },
    {
      name: 'Alexei',
      address: 'Earth',
      email: undefined,
      age: 18,
      gender: 'male'
    }
  ]));
  /*
    [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
      { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
  */
  
  console.log(deleteUndefinedKeys([
    {
      band: 'Ghost',
      formed: 2006,
      members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
      genre: 'Heavy Metal',
      rating: undefined
    },
    {
      band: 'BABYMETAL',
      formed: undefined,
      members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
      genre: 'Kawaii Metal',
      rating: undefined
    },
    {
      band: 'Avatar',
      formed: 2006,
      members: undefined,
      genre: undefined,
      rating: 5
    }
  ]));
  