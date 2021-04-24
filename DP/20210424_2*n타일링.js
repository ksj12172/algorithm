let fs = require('fs');

let path = '/dev/stdin';
// let path = '../input/test.txt';
let n = parseInt(
  fs
    .readFileSync(path)
    .toString()
    .split(/\r?\n/)[0]
);

if (n === 1) {
  console.log(1);
} else if (n === 2) {
  console.log(2);
} else {
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
  }
  console.log(dp[n - 1]);
}
