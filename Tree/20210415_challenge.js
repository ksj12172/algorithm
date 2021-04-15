/**
 * 2021.04.15.목. programmers 월간 코드 챌린지 3번 문제
 * 맞는지 확인 못했음. 테스트 3개 해본건 맞았음.
 * 부모를 임의로 0번째 노드라고 정하고 풀었음.
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
  let _check = a.map(item => (item === 0 ? 1 : 0));
  let answer = 0;
  // console.log('_depth', _depth);
  // console.log('maxDepth', maxDepth);
  for (let i = maxDepth; i > 0; i--) {
    // console.log('depth', i);
    for (const item of _depth[i]) {
      // console.log('item', item);
      // console.log('a[item]', a[item]);
      // console.log('parent', parent[item]);
      a[parent[item]] += a[item];
      // console.log('a[parent]', a[parent[item]]);
      answer += Math.abs(a[item]);
      _check[item] = 1;
      // console.log('answer', answer);
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
