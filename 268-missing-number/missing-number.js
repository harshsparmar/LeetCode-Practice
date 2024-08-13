/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // let sum = 0;
    // let othersum = 0;
    // let n = nums.length;
    // for (let i = 0; i < n; i++) {
    //     sum += nums[i]
    //     othersum += n - i
    // }
    return nums.length * (nums.length + 1) / 2 - nums.reduce((acc, num) => num + acc)
    // return othersum - sum
};