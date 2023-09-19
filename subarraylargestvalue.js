
function largestOfFour(arr) {
    let largestarray = []
    let largestarrayvalue = -999
    
    for (let i = 0; i < arr.length; i++) {
        let largevalue = -999;
        let currentarray = arr[i];
        for (let j = 0 ; j < currentarray.length; j++){
            //console.log(currentarray[j])
            if (currentarray[j] > largevalue){
                largevalue = currentarray[j];
                
            }
            
            }
            
            largestarray.push(largevalue);
            
            }
            console.log(largestarray);
            return largestarray
            for (let u = 0; u < largestarray.length; u++){
                if(largestarray[u] > largestarrayvalue){
                    largestarrayvalue=largestarray[u];
                } 
            }
            console.log(largestarrayvalue);
            for (let q = 0; q < arr.length; q++) {
             if (arr[q].includes(largestarrayvalue)){
                //console.log(arr[q])
                let finalarr = arr[q]
                console.log(finalarr)
                return finalarr

               
            }
                

            }

            
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);