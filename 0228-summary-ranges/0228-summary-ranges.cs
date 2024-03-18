public class Solution {
    public IList<string> SummaryRanges(int[] nums) {
        int start = 0;
        int end = -1;
        IList<string> answers = new List<string>(); 
        for(int i=1;i<nums.Length+1;i++){
            int prev = nums[i - 1];
            int current = i >= nums.Length ? -99 : nums[i];
            if(current - prev == 1){
                end = i;
            }else {
                if(end == -1){
                    answers.Add($"{nums[start]}");
                }else {
                    answers.Add($"{nums[start]}->{nums[end]}");
                }
                start = i;
                end = -1;
            }
        }
        
        return answers;
    }
}