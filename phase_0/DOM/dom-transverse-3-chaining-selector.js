let contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

let contohP1 = contohDiv1.children[0];
console.log(contohP1);

let strongElem = contohP1.children[0];
console.log(strongElem);

console.log(contohDiv1.children[0].children[0]);

let h1Elem = contohDiv1.previousElementSibling;
console.log(h1Elem);

let justNull = h1Elem.previousElementSibling;
console.log(justNull);

console.log(contohDiv1.previousElementSibling.previousElementSibling);
