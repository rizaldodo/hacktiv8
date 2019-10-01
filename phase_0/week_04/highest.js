function highestScore(students){
    
    var group = [];
    var result = {};

    for(i=0; i<students.length; i++){
        if(group.length == 0){
            group.push(students[i].class);
        }
        var ada = false;
        for(j=0; j<group.length; j++){
            if(students[i].class === group[j]){
                ada = true;
            }
        }
        if(!ada){
            group.push(students[i].class);
        }

    }

    for(i=0; i<group.length; i++){
      var obj = {};
      var highest = 0
      for(j=0; j<students.length; j++){
        if(group[i] === students[i].class && students[i].score > highest){
          highest = students[i].score;

          obj['name'] = students[i].name;
          obj['score'] = students[i].score; 
        }
      }
      result[group[i]] = obj;
    }

    return result;


}
console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}