var fs = require('fs');
// toString()으로 변환 필요???
// var input = fs.readFileSync("../dev/test.txt").toString().split(/\r?\n/);
var input = fs
  .readFileSync('input/stdin')
  .toString()
  .split(/\r?\n/);

// n : 사람의 수, 친구 관계의 수 M
const [n, m] = input
  .splice(0, 1)[0]
  .split(' ')
  .map(item => parseInt(item));
// 인접행렬
const matrix = new Array(n).fill([]);
// 인접리스트
const list = new Array(n).fill([]);
// 간선리스트
const edges = [];
input.forEach(item => {
  const [first, second] = item.split(' ').map(_ => parseInt(_));
  matrix[first][second] = matrix[second][first] = true;
  list[first].push(second);
  list[second].push(first);
  edges[edges.length] = [first, second];
  edges[edges.length] = [second, first];
});
const turn = m * 2;
let a, b, c, d, e;
for (let i = 0; i < turn; i++) {
  for (let j = 0; j < turn; j++) {
    a = edges[i][0];
    b = edges[i][1];
    c = edges[j][0];
    d = edges[j][1];
    if (a == b || a == c || a == d || b == c || b == d || c == d) continue;
    if (!matrix[b][c]) continue;
    for (let e of list[d]) {
      if (e == a || e == b || e == c || e == d) continue;
      console.log(1);
      break;
    }
  }
}
console.log(0);
// 출력
// process.stdout.write(right.pop());
// console.log('');
