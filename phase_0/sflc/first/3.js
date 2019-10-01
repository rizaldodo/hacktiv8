function minDistanceBetweenGreatest(arr){
    var max = 0;
    var distance = [];

    for(i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    
    var sama = false;
    var count = 0;
    for(i=0; i<arr.length; i++){
        
        if(arr[i]==max){
            sama = true;
            
        } 
        if(count>1){
            
            if(distance.length == 0){
                distance.push(count);
                
            }else if(count<distance[0]){
                distance[0] = count;
            }
            count = 0;
            sama = false
        }
        
        if(sama){
            count++;
            
        }

    
    }
    if(distance.length==0){
        return 0;
    }

    console.log(distance);
}
console.log(minDistanceBetweenGreatest([ 3, 5, 2, 3, 5, 3, 5 ])); //2
console.log(minDistanceBetweenGreatest([ 1, 1, 1, 1, 1, 1 ])); //1
console.log(minDistanceBetweenGreatest([ 7, 8, 5, 2, 1, 1 ])); //0
// console.log(minDistanceBetweenGreatest([ 7, 8, 8, 8, 1, 1 ])); //0