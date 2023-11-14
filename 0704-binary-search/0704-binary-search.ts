function binarySearch(nums: number[], target: number, left: number, right: number){
    if(right < left){
        return -1;
    }
    const mid = Math.floor((left + right) / 2)
    if(nums[mid] === target){
        return mid;
    }else if(nums[mid] > target){
        right = mid - 1;
    }else{
        left = mid + 1;
    }
    return binarySearch(nums, target, left, right);
}

function search(nums: number[], target: number): number {
    if(nums.length === 1 && nums[0] === target){
        return 0;
    }
  return binarySearch(nums, target, 0, nums.length - 1);  
};