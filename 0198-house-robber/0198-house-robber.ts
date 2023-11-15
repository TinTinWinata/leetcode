function recrusive(nums, p, dp){
    if(p > nums.length - 1){
        return 0;
    } else if (p > nums.length - 3){
        return nums[p]
    }
    if(dp[p] !== -1){
        return dp[p];
    }
    dp[p] = nums[p] +  Math.max(recrusive(nums, p + 2, dp), recrusive(nums, p + 3, dp)) 
    return dp[p]
}

function rob(nums: number[]): number {
    const dp = new Array(nums.length + 1).fill(-1)
    if(nums.length === 1) return nums[0]
  return  Math.max(recrusive(nums, 0, dp), recrusive(nums, 1, dp));
};