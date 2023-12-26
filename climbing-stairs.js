function climbStairs(n) {
  const dp = [1, 1]; // base cases

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
}

const n = 5;
console.log(`The number of distinct ways to climb ${n} steps is ${climbStairs(n)}.`);
