// 일곱 난쟁이 문제
#include <iostream>
#include <algorithm>

using namespace std;
int feet[9];
int n=9;
int main() {
  int sum = 0;
  for (int i=0;i<n;i++) {
    cin >> feet[i];
    sum += feet[i];
  }
  sort(feet,feet+n);

  for (int i=0;i<n;i++) {
    for (int j=i+1;j<n;j++) {
      if ((sum - feet[i] - feet[j]) == 100) {
        for (int k=0;k<n;k++) {
          if ((k==i) || (k==j)) continue;
          cout << feet[k] << '\n';
        }
        return 0;
      }
    }
  }
  return 0;
}