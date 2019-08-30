
var num1 = 5;
var num2 = 4;

function compareNumber(num1, num2) {
    if(num1 < num2){
        return true;
    }else if(num1 > num2){
        return false;
    }else if(num1 == num2){
        return -1;
    }
}

console.log(compareNumber(2,2));