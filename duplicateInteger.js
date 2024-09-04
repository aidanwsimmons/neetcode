// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let uniques = new Set(nums)
        return uniques.size != nums.length
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap = {}
        for(let i = 0; i < nums.length; i++){
            if(numMap[nums[i]]) return true
            else{
                numMap[nums[i]] = 1
            }
        }
        return false
    }
}