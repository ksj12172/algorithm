#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// segmentation fault 났음 ( core dumped )
void preAnswer(vector<string> &a,vector<int> &rowArr, vector<int>&colArr) {
  int n = a.size();
  for (int i=0;i<n;i++) {
    int ans = 1;
    int cnt = 1;
    // i가 행일 때
    for (int j=1;j<n;j++) {
      if (a[i][j] == a[i][j-1]) {
        cnt += 1;
        if (ans < cnt) ans = cnt;
      } else cnt=1;
    }
    rowArr[i] = ans;
    ans = 1;
    cnt = 1;
    for (int j=1;j<n;j++) {
      if (a[j][i] == a[j-1][i]) {
        cnt += 1;
        if (ans<cnt) ans = cnt;
      } else cnt=1;
    }
    colArr[i] = ans;
  }
}

int check(vector<string> &a,vector<int> &rowArr, vector<int> &colArr,
          int rowNum1, int rowNum2, int colNum1, int colNum2) {
  int n = a.size();
  int ans=1;
  for (int j=1;j<n;j++) {
    int cnt=1;
    if (a[rowNum1][j] == a[rowNum1][j-1]) {
      cnt+=1;
      if (ans<cnt) ans=cnt;
    } else cnt = 1;    
  }
  int temp1 = rowArr[rowNum1];
  rowArr[rowNum1] = ans;

  int temp2 = -1;
  if (rowNum2 != -1) {
    ans = 1;
    for (int j=1;j<n;j++) {
      int cnt=1;
      if (a[rowNum2][j] == a[rowNum2][j-1]) {
        cnt+=1;
        if (ans<cnt) ans=cnt;
      } else cnt = 1;    
    }
    temp2 = rowArr[rowNum2];
    rowArr[rowNum2] = ans;
  }
  ans = 1;
  for (int i=1;i<n;i++) {
    int cnt = 1;
    if (a[i][colNum1] == a[i-1][colNum1]) {
      cnt += 1;
      if (ans<cnt) ans = cnt;
    } else cnt = 1;
  }
  colArr[colNum1] = ans;

  if (colNum2 != -1) {
    ans =1;
    for (int i=1;i<n;i++) {
      int cnt = 1;
      if (a[i][colNum2] == a[i-1][colNum2]) {
        cnt += 1;
        if (ans<cnt) ans = cnt;
      } else cnt = 1;
    }
    colArr[colNum2] = ans;
  }
  
  int max=1;
  for (int i=0;i<n;i++) {
    if (max < rowArr[i]) max = rowArr[i];
    if (max < colArr[i]) max = colArr[i];
  }
  return max;
}

int main() {
  int n;
  cin >> n;
  vector<string> a(n);
  for (int i=0;i<n;i++) {
    cin >> a[i];
  }
  vector<int> rowArr(n,1);
  vector<int> colArr(n,1);
  preAnswer(a, rowArr, colArr);

  int ans = 1;
  for (int i=0;i<n;i++) {
    for (int j=0;j<n;j++) {
      if (j+1<n) {
        swap(a[i][j],a[i][j+1]);
        int temp = check(a,rowArr,colArr,i,-1,j,j+1);
        if (ans <temp) ans = temp;
        swap(a[i][j], a[i][j+1]);
      }
    }
    for (int j=0;j<n;j++) {
      if (j+1<n) {
        swap(a[i+1][j],a[i][j]);
        int temp = check(a,rowArr,colArr,i,i+1,j,-1);
        if (ans <temp) ans = temp;
        swap(a[i+1][j],a[i][j]);
      }
    }
  }
  return 0;
}