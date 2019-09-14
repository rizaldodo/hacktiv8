function highestScore(students){

    var result = {};
    var group = [];
    for(i=0; i<students.length;i++){
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
      var objStudent = {};
      var highest = 0;
      for(j=0; j<students.length; j++){
        if(students[j].class === group[i] && students[j].score > highest){
          highest = students[j].score;

          objStudent['name'] = students[j].name;
          objStudent['score'] = students[j].score;
        }
        result[group[i]] = objStudent;
      }

    }
    return result;
}

// TEST CASE
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