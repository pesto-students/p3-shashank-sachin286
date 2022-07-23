function maxSubArraySum(a, size) {
  let current_sum = 0;
  let maximum_sum = 0;

  for (let i = 0; i < size; i++) {
    current_sum = current_sum + a[i];
    if (current_sum > maximum_sum) maximum_sum = current_sum;

    if (current_sum < 0) current_sum = 0;
  }
  return maximum_sum;
}

let x = [1, 2, -3, -9, -7];
console.log("max sub array = " + maxSubArraySum(x, x.length));

//Space complexity = 0(1) + 2
//Time complexity = 0(n)
