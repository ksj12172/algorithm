#include <iostream>
using namespace std;
int main() {
  int E,S,M;
  cin >> E >> S >> M;
  E-=1;
  S-=1;
  M-=1;
  for (int i=0;;i++) {
    if (i%15 == E && i%28 ==S && i%19==M) {
      cout << i+1 << '\n';
      break;
    }
  }
  return 0;
}