# 검색(Searching)

## 선형 검색(Linear Search)

- 세트 간격으로 이동하면서 한 번에 하나의 항목을 확인하는 식으로 모든 항목을 확인한다.
- indexOf, includes, find, findIndex

## 이진 검색(Binary Search)

- 선형 검색보다 크게 개선된 알고리즘이다.
- 확인을 할 때마다 남은 항목의 절반을 없앨 수 있다.
- **정렬되어 있는 데이터**에서만 작동한다.

<aside>
💡 구현 방식의 기본적인 개념은 분할 정복이다.
주어진 정렬된 배열에서 15를 검색
1. [ 1, 3, 4, 6, 8, 9, **11**, 12, 15, 16, 17, 18, 19]
2. [ ~~1, 3, 4, 6, 8, 9, 11,~~ 12, 15, **16**, 17, 18, 19]
3. [ ~~1, 3, 4, 6, 8, 9, 11,~~ 12, **15**, 16, ~~17, 18, 19~~]

</aside>

## 출처

[udemy](https://www.udemy.com/course/best-javascript-data-structures/learn/lecture/28560139#overview)
