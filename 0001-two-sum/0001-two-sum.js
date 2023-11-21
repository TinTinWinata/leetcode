/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        const getted = map.get(nums[i]);
        if(getted !== undefined){
            if(nums[i] + nums[i] === target)
            return [getted, i];
        }
        map.set(nums[i], i);
    }
    let res;
    for(let i=0;i<nums.length;i++){
        const curr = nums[i];
        const secTarget = target - curr;
        const getted = map.get(secTarget);
        if(getted !== undefined && getted != i){
            return [i, getted]
        }  
    }
    return res;
};