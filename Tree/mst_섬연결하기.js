// n : 섬의 개수, costs = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]
// 성공한 코드!
const solution = (n, costs) => {
  // 각 섬이 몇 번째 집합에 속할 것인지
  const parent = new Array(n).fill(0).map((_, i) => i);
  const size = new Array(n).fill(1);
  costs.sort((a, b) => a[2] - b[2]);

  const getParent = x => {
    if (parent[x] === x) return x;
    return getParent(parent[x]);
  };

  const isSameParent = (x, y) => {
    if (getParent(x) === getParent(y)) return true;
    return false;
  };
  // 트리 높이기 줄이기 위해서 size 배열 만들고 무조건 size가 더 큰 트리를 부모로
  const union = (a, b) => {
    const x = getParent(a);
    const y = getParent(b);

    if (size[x] > size[y]) {
      parent[y] = x;
      size[x] += size[y];
    } else {
      parent[x] = y;
      size[y] += size[x];
    }
  };

  let link = 0;
  let answer = 0;
  for (let i = 0; i < costs.length; i++) {
    const [island1, island2, cost] = costs[i];
    if (!isSameParent(island1, island2)) {
      union(island1, island2);
      link += 1;
      answer += cost;
    }
    if (link === n - 1) return answer;
  }
};

console.log(
  solution(5, [
    [0, 1, 5],
    [1, 2, 3],
    [2, 3, 3],
    [3, 1, 2],
    [3, 0, 4],
    [2, 4, 6],
    [4, 0, 7]
  ])
); // 15
