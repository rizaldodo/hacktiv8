function balikString(str){
	var reverse = '';

	for(i=str.length-1; i>=0; i--){
		// console.log(str[i]);
    reverse += str[i];
	}
  return reverse;
}
console.log(balikString('uqhdkauhd'));