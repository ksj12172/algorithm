/**
 * Math.min으로 하면 나중에 index가 더 작은 노드가 들어올 경우 같은 트리인데도 나중에 들어온 index로 채워지는 것 같다.
 * 그래서 실패?
 * @param {*} n
 * @param {*} costs
 */
const solution = (n, costs) => {
  // 각 섬이 몇 번째 집합에 속할 것인지
  const sets = new Array(n).fill(0).map((_, i) => i);
  costs.sort((a, b) => a[2] - b[2]);

  let link = 0;
  let answer = 0;
  for (let i = 0; i < costs.length; i++) {
    const [island1, island2, cost] = costs[i];
    if (sets[island1] !== sets[island2]) {
      sets[island1] = Math.min(sets[island1], sets[island2]);
      sets[island2] = Math.min(sets[island1], sets[island2]);
      link += 1;
      answer += cost;
    }
    if (link === n - 1) return answer;
  }
};
