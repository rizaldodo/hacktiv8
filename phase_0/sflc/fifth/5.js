function getReport(studentGrades) {
  var result = [];
  var tempObj = {};
  for(i=0; i<studentGrades.length; i++){
    var passed = [];
    var failed = [];
    if(studentGrades[i]['classCode'] === 'A'){
      if(studentGrades[i]['score'] >= 70){
        passed.push(studentGrades[i]['name'])
      }else{
        failed.push(studentGrades[i]['name'])
      }
    }else
    if(studentGrades[i]['classCode'] === 'B'){
      if(studentGrades[i]['score'] >= 70){

      }else{
  
      }
    }else
    if(studentGrades[i]['classCode'] === 'C'){
      if(studentGrades[i]['score'] >= 70){

      }else{

      }
    }

  }
  console.log(result);
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/