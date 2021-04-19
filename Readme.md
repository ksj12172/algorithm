[ 트리 + dfs 문제]

- pop해서 visited 체크하고나서 자식들을 넣는다 => leaf node부터 계산 가능, O(n)으로 풀 수 있다

[ C++ ]

- 모든 테스트 케이스에서 같은 값인 변수는 int main() 바깥에 쓴다.
  상수처럼 사용한다.
- cpp도 if 괄호 생략하고 한 줄로 쓸 수 있군

- vector

1. vector<string> a(크기);
2.

int x = 9;
vector<int> vec1(4,x); // x로 초기화된 4개의 원소를 가지고 있다

3. swap(a[i][j], a[i][j+1]); => 값 바꿀 수 있다
4. vector를 함수 인자로 넘기면 포인터로 넘어간다
   따라서 함수 선언시
   int check(vector<string> &a){} 와 같이 적어야 한다
5. vector변수.size()

- sort(start, end+1)
  이는 sort(배열,배열+배열크기)로 적는 것이다.
  #include <algorithm> 해야 한다

- 변수 선언이 for문 안에서는 또 따로인가보다
