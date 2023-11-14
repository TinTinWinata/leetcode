function binarySearch(nums: number[], target: number, left: number, right: number){
    const mid = Math.floor((right + left)  / 2);
    if(right <= left){
        if(nums[left] < target){
            return left + 1;
        }else{
            return left;
        }
    }
    if(nums[mid] === target){
        return mid;
    }
    else if(nums[mid] > target){
        right = mid - 1;
    }else if(nums[mid] < target){
        left = mid + 1;
    }
    return binarySearch(nums, target, left, right);
}

function searchInsert(nums: number[], target: number): number {
    return binarySearch(nums, target, 0, nums.length - 1)
};