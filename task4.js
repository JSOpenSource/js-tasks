// Write a function which takes an array as input and sorts the array using bubble sort. Also print the array state as output on each pass

// function bubbleSort(array: number[]){
      // sort logicc
      // print state of array on each pass
      // return sortedArray;
// }

//Raj-bhat
function bubblesort(){
    var a=[3,2,1];
    if(a.length>0){
        for ( let i=0;i<a.length;i++){
            for ( let j=0;j<a.length;j++){
                var temp;
                if(a[j]>a[j+1]){
                    temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
                console.log(a);    
             }
         }
     }
     else {
        console.log("Invalid input");
     }
}
bubblesort();

//Sachin
function sortArrayUsingBubbleSortTechnique(inpArr){
    for(i = 0; i< inpArr.length-1; i ++ ) 
    {
      var swap = false; // To keep track if there are no swaps 
      for ( j = 0; j<inpArr.length-1;j++) {           
           if(inpArr[j] > inpArr[j+1]) {
             swap =true;
             let temp = inpArr[j+1];
             inpArr[j+1]= inpArr[j] ;
             inpArr[j]= temp;
           }           
       } 
       if(swap===false)    
       { 
         break ;
       }
       console.log('after pass ' + i + ' ' + inpArr);
    }
    return(inpArr);
}