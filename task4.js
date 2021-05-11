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
