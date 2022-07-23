function pairDiff(arr, diff) {
  
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (j == i) {
            continue;
          } else if ((arr[i] - arr[j] == diff) || (arr[j] - (arr[i]) == diff)) {
            return 1;
          }
        }
      }
      return 0;
    }
    
    console.log(pairDiff([5, 10, 3, 2, 50, 80], 78));
    console.log(pairDiff([-10, 10], 30));
    
    //time complexity - n^2
    //space complexity - 0(1)