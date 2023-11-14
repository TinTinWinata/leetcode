function recrusive(n: number, dp: number[]){
  if(n <= 2){
    return n;
  }
  if(dp[n] !== -1) return dp[n]
  dp[n] = recrusive(n - 1, dp) + recrusive(n - 2, dp)
  return dp[n]
}

function climbStairs(n: number): number {
  const dp: number[] = new Array(n + 1).fill(-1)
  return recrusive(n, dp);
};