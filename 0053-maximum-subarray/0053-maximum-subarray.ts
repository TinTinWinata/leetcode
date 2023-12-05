function maxSubArray(nums: number[]): number {
    let maxSum = Number.NEGATIVE_INFINITY;
    let currSum = 0;
    for(const num of nums){
        currSum += num;
        if(currSum > maxSum){
            maxSum = currSum;
        }
        
        if(currSum < 0){
            currSum = 0;
        }
    }
    return maxSum;
};