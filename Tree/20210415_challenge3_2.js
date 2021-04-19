// source : https://www.cckn.dev/problem-solve/(JS)%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%20-%20%EB%AA%A8%EB%91%90-0%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0/
const solution = (a, edges) => {
  if (a.reduce((prev, cur) => prev + cur, 0) !== 0) return -1;
  const adjacent = new Array(a.length).fill(0).map(() => new Array());
  edges.forEach(([a, b]) => {
    adjacent[a].push(b);
    adjacent[b].push(a);
  });
  let result = BigInt(0);
  // let result = 0;

  let visited = new Array(a.length).fill(false);
  const stack = [[0, null]]; // 임의의 root node 0 넣어주기, [target node, parent node]

  while (stack.length) {
    const [cur, parent] = stack.pop();

    if (visited[cur]) {
      result += BigInt(Math.abs(a[cur]));
      a[parent] += a[cur];
      a[cur] = 0;
      continue;
    }
    visited[cur] = true;
    stack.push([cur, parent]);
    // pop해서 visited 체크하고나서 자식들을 넣는다 => leaf node부터 계산 가능
    for (const next of adjacent[cur]) {
      if (!visited[next]) stack.push([next, cur]);
    }
  }
  return result;
};

console.log(
  solution(
    [-5, 0, 2, 1, 2],
    [
      [0, 1],
      [3, 4],
      [2, 3],
      [0, 3]
    ]
  )
); //9
console.log(
  solution(
    [1, 1, 1, 1, -4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ]
  )
); // 10
