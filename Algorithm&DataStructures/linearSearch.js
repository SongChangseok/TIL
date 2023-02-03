// 선형 검색
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
};

console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1

// 이진 검색
const binarySearch = (array, value) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleValue = array[middle];

    if (middleValue === value) return middle;

    if (middleValue > value) right = middle - 1;
    else left = middle + 1;
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
