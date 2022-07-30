function nextGreaterElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let greater = arr[i];
    let flag = 0;
    for (let j = i; j < arr.length; j++) {
      if (greater < arr[j]) {
        greater = arr[j];
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      greater = -1;
    }
    console.log(arr[i] + " -> " + greater);
  }
}

let arry = [1, 3, 5, 4, 7, 8, 2];
nextGreaterElement(arry);

//Time Complexity: O(N^2)
//Auxiliary Space: O(N)
