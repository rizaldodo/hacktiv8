function graduates(students){
  var group = [];
  var result = {};

  for(i=0; i<students.length; i++){
    if(group.length === 0){
      group.push(students[i].class);
    }
    var exist = false;
    for(j=0; j<group.length; j++){
      if(group[j] === students[i].class){
        exist = true;
        break;
      }
    }
    if(!exist){
      group.push(students[i].class);
    }
  }


  for(i=0; i<group.length; i++){
    var details = [];
    for(j=0; j<students.length; j++){
      if(group[i] === students[j].class && students[j].score > 75){
        details.push({
          name: students[j].name,
          score: students[j].score
        });

      }  
    }
    result[group[i]] = details;
    
  }
  // console.log(group)
  return result;

}
console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}