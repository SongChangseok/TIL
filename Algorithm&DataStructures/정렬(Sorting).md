# 정렬(Sorting)

정렬이란 컬렉션(collection)의 항목을 재배열하는 과정이다.

## 학습 이유

1. 프로그래밍에서 정말 흔하게 사용되기 때문이다.
2. 데이터를 정렬할 수 있는 많은 방법이 있고, 각각의 장단점이 있다.

[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

## **Array.prototype.sort()**

- 자바스크립트 내장 정렬 메소드이다.
- 선택적 비교 함수(optional comparator function)를 인자로 전달 받는다.
- 이 함수를 사용해서 자바스크립트에 우리가 원하는 정렬 방식을 전달할 수 있다.
- 기본적으로 이 함수는 A와 B라는 2개의 항목이 있는 구조로 작성한다.
- 함수가 음수를 반환하면 A가 B 앞으로, 양수를 반호나하면 A가 B 뒤로 이동한다. 그리고 0일 경우에는 동일하게 취급한다.

## 버블 정렬(Bubble Sort)

배열을 **오름차순**으로 정렬을 한다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동한다.

> [ **5**, 3, 4, 1, 2 ] > [ 3, **5**, 4, 1, 2 ] > [ 3, 4, **5**, 1, 2 ] > [ 3, 4, 1, **5**, 2 ] > [ 3, 4, 1, 2, **5** ]

## 선택 정렬(Selection Sort)

버블 정렬과 비슷하지만 큰 값을 배열 끝에 위치시키는 대신 **작은 값을 한 번에 하나씩** 위치에 배열한다. 마찬가지로 처음부터 끝까지 움직이지만, 실제 정렬된 데이터는 처음부터 누적되고 있다.

> [ 5, **3**, 4, 1, 2 ] > [ 5, **3**, 4, 1, 2 ] > [ 5, **3**, 4, 1, 2 ] > [ 5, 3, 4, **1**, 2 ] > [ **1**, 5, 3, 4, 2 ]

## 삽입 정렬(Insertion Sort)

모드 요소를 앞에서부터 **이미 정렬된 배열 부분과 비교**하여 자신의 위치를 찾아 삽입하면서 정렬한다.

> [ 5, **3**, 4, 1, 2 ] > [ 3, 5, **4**, 1, 2 ] > [ 3, 4, 5, **1**, 2 ] > [ 1, 3, 4, 5, **2** ] > [ 1, 2, 3, 4, 5 ]

## 버블/선택/삽입 정렬 알고리즘의 Big-O

| 알고리즘  | 시작복잡도(최고) | 시간복잡도(평균) | 시간복잡도(최악) | 공간복잡도 |
| --------- | ---------------- | ---------------- | ---------------- | ---------- |
| 버블 정렬 | O(n)             | O(n^2)           | O(n^2)           | O(1)       |
| 선택 정렬 | O(n)             | O(n^2)           | O(n^2)           | O(1)       |
| 삽입 정렬 | O(n^2)           | O(n^2)           | O(n^2)           | O(1)       |

## 병합 정렬(Merge Sort)

재귀적 방법을 사용하여 **배열을 분할 하고 그것들을 정렬하고 다시 합치는 방법**이다. 이 정렬 알고리즘은 분할을 하는 과정에서 이미 정렬되어 있는 두 개의 배열을 합치는 과정에서 작동한다. 병합 정렬은 재귀적 방법을 사용하기 때문에 자료의 양이 많아질수록 느리게 작동하는 단점이 있다.

```jsx
// Merge function from earlier
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

| 시작복잡도(최적) | 시간복잡도(평균) | 시간복잡도(최악) | 공간복잡도 |
| --- | --- | --- | --- |
| O(n log n) | O(n log n) | O(n log n) | O(n) |

## 기수 정렬(Radix Sort)

정렬할 데이터를 각 자릿수별로 비교하는 정렬 방법이다. 배열의 요소들을 **각 자릿수별로 정렬**하는 방법으로 가장 낮은 자리부터 시작하여 거꾸로 배열하는 방식이다. 기수 정렬은 자릿수별로 비교하므로 배열의 요소들이 비교적 작거나 일정한 범위에 속할 때 시간 복잡도가 O(n)이 되고 거의 모든 상황에서 시간 복잡도가 O(nk)이 된다.

```jsx
function getDigit(num, i) {
  // num 이라는 숫자에서 i 번째 자리의 숫자를 가져오는 함수
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // 숫자의 자릿수를 구하는 함수
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  // 배열 안에 있는 숫자들 중 가장 많은 자릿수를 가진 숫자를 찾아주는 함수
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
  // 기수 정렬을 하는 함수
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length: 10}, () => []);
    // 10개의 빈 배열로 구성된 배열을 만들어줌
    for(let i = 0; i < nums.length; i++){
      let digit = getDigit(nums[i],k);
      // nums 배열 안의 각 숫자들의 k 번째 자리 숫자를 가져옴
      digitBuckets[digit].push(nums[i]);
      // 각 자리의 숫자를 인덱스로 하는 digitBuckets 배열에 해당 숫자를 넣어줌
    }
    nums = [].concat(...digitBuckets);
    // 각 자리별로 정렬이 끝난 digitBuckets 배열을 합침
  }
  return nums;
}
```

![기수 정렬](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8ea7733-7d8f-4252-98be-1873f06491a1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230209T064143Z&X-Amz-Expires=86400&X-Amz-Signature=c44a7058ca5530391877d548fa62f8fd39d6482f1742204ea95c7b529d566488&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

| 시작복잡도(최적) | 시간복잡도(평균) | 시간복잡도(최악) | 공간복잡도 |
| --- | --- | --- | --- |
| O(nk) | O(nk) | O(nk) | O(n + k) |

## 각 정렬의 사용 용도

- 버블 정렬(Bubble Sort) : 배열의 요소들이 서로 인접한 두 개씩 비교하면서 정렬하는 방법이다. 배열의 요소들이 비교적 적은 경우에 사용하기 적합하다.
- 선택 정렬(Selection Sort) : 배열의 요소들 중 가장 작은 값을 찾아서 그 값을 배열의 맨 앞에 위치한 값과 교체하는 방법이다. 버블 정렬과 비슷하지만, 정렬할 배열의 요소가 많은 경우에 좀 더 효율적으로 정렬할 수 있다.
- 삽입 정렬(Insertion Sort) : 배열에서 정렬할 요소를 하나씩 꺼내서 앞에서부터 차례대로 비교하면서 정렬하는 방법이다. 배열의 요소가 비교적 적은 경우에 사용하기 적합하다.
- 병합 정렬(Merge Sort) : 배열을 분할하고 그것들을 정렬하고 다시 합치는 방법이다. 재귀적 방법을 사용하기 때문에 자료의 양이 많아질수록 느리게 작동한다.
- 퀵 정렬(Quick Sort) : 피벗이라 불리는 값을 기준으로 정렬하는 방법이다. 각 단계마다 피벗을 기준으로 배열이 분할되는 방식이므로 시간 복잡도가 O(nlogn) 이 되고 병합 정렬보다 효율적이다.
- 기수 정렬(Radix Sort) : 정렬할 데이터를 각 자릿수별로 비교하는 정렬 방법이다. 배열의 요소들을 각 자릿수별로 정렬하는 방법으로 가장 낮은 자리부터 시작하여 거꾸로 배열하는 방식이다. 기수 정렬은 자릿수별로 비교하므로 배열의 요소들이 비교적 작거나 일정한 범위에 속할 때 시간 복잡도가 O(n)이 되고 거의 모든 상황에서 시간 복잡도가 O(nk)이 된다.

## 참고

[Sorting (Bubble, Selection, Insertion, Merge, Quick, Counting, Radix) - VisuAlgo](https://visualgo.net/en/sorting)

## 출처

[udemy](https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28560341#overview)