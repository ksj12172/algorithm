/**
 * 2021.04.15.목. programmers 월간 코드 챌린지 3번 문제
 * 시간 초과!
 * 부모를 임의로 0번째 노드라고 정하고 풀었음.
 * 각 점에 가중치가 부여된 트리가 주어집니다. 당신은 다음 연산을 통하여, 이 트리의 모든 점들의 가중치를 0으로 만들고자 합니다.

임의의 연결된 두 점을 골라서 한쪽은 1 증가시키고, 다른 한쪽은 1 감소시킵니다.
하지만, 모든 트리가 위의 행동을 통하여 모든 점들의 가중치를 0으로 만들 수 있는 것은 아닙니다. 당신은 주어진 트리에 대해서 해당 사항이 가능한지 판별하고, 만약 가능하다면 최소한의 행동을 통하여 모든 점들의 가중치를 0으로 만들고자 합니다.

트리의 각 점의 가중치를 의미하는 1차원 정수 배열 a와 트리의 간선 정보를 의미하는 edges가 매개변수로 주어집니다. 
주어진 행동을 통해 트리의 모든 점들의 가중치를 0으로 만드는 것이 불가능하다면 -1을, 
가능하다면 최소 몇 번만에 가능한지를 찾아 return 하도록 solution 함수를 완성해주세요. (만약 처음부터 트리의 모든 정점의 가중치가 0이라면, 0을 return 해야 합니다.)
 */

function solution(a, edges) {
  if (a.reduce((prev, cur) => prev + cur, 0) !== 0) return -1;
  const adjacent = {};
  for (const [left, right] of edges) {
    if (adjacent[left]) adjacent[left].push(right);
    else adjacent[left] = [right];
    if (adjacent[right]) adjacent[right].push(left);
    else adjacent[right] = [left];
  }
  // 부모를 0이라고 가정
  let queue = [],
    depth = [],
    check = [],
    parent = [];
  queue.push(0);
  depth[0] = 1;
  let _depth = {};
  _depth[1] = [0];
  check[0] = 1;
  parent[0] = -1;
  let maxDepth = 1;
  while (queue.length !== 0) {
    let x = queue.shift();
    for (const item of adjacent[x]) {
      if (check[item]) continue;
      check[item] = 1;
      depth[item] = depth[x] + 1;
      if (_depth[depth[x] + 1]) _depth[depth[x] + 1].push(item);
      else _depth[depth[x] + 1] = [item];
      if (maxDepth < depth[item]) maxDepth = depth[item];
      parent[item] = x;
      queue.push(item);
    }
  }
  // 가중치 0인 곳은 방문하지 않기?
  let _check = a.map(item => (item === 0 ? 1 : 0));
  let answer = 0;
  console.log('a', a);
  console.log('_depth', _depth);
  for (let i = maxDepth; i > 0; i--) {
    for (const item of _depth[i]) {
      a[parent[item]] += a[item];
      answer += Math.abs(a[item]);
      _check[item] = 1;
    }
    if (_check.reduce((prev, cur) => prev + cur, 0) === a.length) {
      return answer;
    }
  }
  return -1;
}

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
