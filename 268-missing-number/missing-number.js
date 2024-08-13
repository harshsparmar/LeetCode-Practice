/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = 0;
    let othersum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        // othersum += (nums.length - i)
    }
    return nums.length*(nums.length+1)/2 - sum
};