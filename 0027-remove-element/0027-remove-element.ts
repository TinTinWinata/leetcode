function removeElement(nums: number[], val: number): number {
  // In place -> algorithm untuk tidak membuat array baru
  // [3,2,2,3], val = 3
  let count = 0;
  for(let i=0;i<nums.length;i++){
    const num = nums[i];
    if(num !== val){
      nums[count] = num;
      count += 1;
    }
  }
  return count;
};