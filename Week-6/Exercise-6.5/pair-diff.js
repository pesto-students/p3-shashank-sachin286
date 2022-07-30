function pairDiff(arr, diff) {
  let mymap = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i] + diff;
    if (mymap.has(value)) return 1;
  }

  return 0;
}

console.log(pairDiff([5, 10, 3, 2, 50, 80], 78));
console.log(pairDiff([-10, 10], 30));

//time complexity - n(n)
//space complexity - 0(n)
