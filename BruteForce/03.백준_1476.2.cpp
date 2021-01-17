#include <iostream>
using namespace std;
// 왜 시간초과지?
int main() {
  int E,S,M;
  cin >> E >> S >> M;
  int e=1,s=1,m=1;
  for (int i=2;;i++) {
    e = (e+1)%15;
    s = (s+1)%28;
    m = (m+1)%19;
    if (e==0) e=15;
    if (s==0) s=28;
    if (m==0) s=19;
    if (e==E && s==S && m==M) {
      cout << i<< '\n';
      return 0;
    }
  }
}