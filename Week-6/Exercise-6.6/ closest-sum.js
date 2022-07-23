var closestSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;

  let closesum = nums[0] + nums[1] + nums[n - 1];
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum <= target) {
        j++;
      } else {
        k--;
      }
      if (Math.abs(closesum - target) > Math.abs(sum - target)) {
        closesum = sum;
      }
    }
  }
  return closesum;
};

console.log(closestSum([-1, 2, 1, -4], 1));

//time complexity = O(n^2)
//space complexity = O(1)
