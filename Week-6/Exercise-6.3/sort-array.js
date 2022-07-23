 function sortArray(a)
    {
          
        let lo = 0; 
        let hi = a.length - 1; 
        let mid = 0;
        let temp = 0; 
        while (mid <= hi)
        {
            if(a[mid] == 0)
            {
                temp = a[lo]; 
                a[lo] = a[mid]; 
                a[mid] = temp; 
                lo++; 
                mid++; 
            }
            else if(a[mid] == 1)
            {
                mid++; 
            }
            else
            {
                temp = a[mid]; 
                a[mid] = a[hi]; 
                a[hi] = temp; 
                hi--;
            }
              
        }
    }
      
    function printArray(arr)
    {
        let i;
        for (i = 0; i < arr.length; i++)
        {
           console.log(arr[i] + " ");
        }
        console.log("\n")
    }
      
    let arr= [2,2,1,1,0,0 ];
    sortArray(arr);
    printArray(arr); 

    //time complexity is 0(n)
    //space complexity is 0(1)