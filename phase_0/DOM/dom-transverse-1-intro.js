let body = document.body;
let bodyChilds = body.children;

console.log(bodyChilds);

let contohDiv1 = document.getElementById('contoh-div-1');
let contohDivChilds = contohDiv1.children;
let contohDiv1FirstChild = contohDivChilds[0];
console.log(contohDiv1FirstChild);

let contohDiv2 = document.getElementById('contoh-div-2');
let contohDiv2Childs = contohDiv2.children;

for(let n=0; n<contohDiv2Childs.length; n++){
    let contohDivNthChild = contohDiv2Childs[n];
    console.log(contohDivNthChild)
}

let contohP1 = document.getElementById('contoh-p-1');
console.log(contohP1);

let contohP1Parent = contohP1.parentNode;
console.log(contohP1Parent);