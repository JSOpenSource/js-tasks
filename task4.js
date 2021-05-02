// Write a function which takes an array as input and sorts the array using bubble sort. Also print the array state as output on each pass

// function bubbleSort(array: number[]){
      // sort logicc
      // print state of array on each pass
      // return sortedArray;
// }

//sandhya task-4
        let movies = ['Arora', 'star war', 'karate kid', 'layer cake', 'mango tree'];
        console.log(movies.sort());

        //number
        let number = [40, 2, 3, 128, 143, 151, 1, -1, 100, 0];
        console.log(number.sort()); //not ok
        //solution using custome sort
        let sortedNum = number.sort( (a,b)=>{
            console.log('sorting',  a, b);
            if(a>b) return 1;
            else if(a<b) return -1;
            else return 0;
        });
        console.log(sortedNum);

        //object
        let people = [
                     {"id":123, "name":"sandhya", "email":"sandhya@gmail.com"},
                     {"id":984, "name":"kumari", "email":"kumari@gmail.com"},
                     {"id":012, "name":"zora", "email":"zora@gmail.com"},
                     ];

        // sorting array of object using cutome sort
        let sortedPeople = people.sort((a,b)=>{
           
            if(a.id > b.id) return 1;
            else if(a.id < b.id) return -1;
             return 0;
        });
        console.log(sortedPeople);  
