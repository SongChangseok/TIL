// const power = (base, exponent) => Math.pow(base, exponent);
// const power = (base, exponent) => {
//   if (!exponent) return 1;
//   return base * power(base, exponent - 1);
// };

// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

// const factorial = (number) => {
//   if (!number) return 1;
//   return number * factorial(number - 1);
// };
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

// const productOfArray = (array) => {
//   if (array.length === 0) return 1;

//   const [first, ...other] = array;

//   return first * productOfArray(other);
// };

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

// const recursiveRange = (number) => {
//   if (!number) return 0;
//   return number + recursiveRange(number - 1);
// };

// console.log(recursiveRange(6)); // 21
// console.log(recursiveRange(10)); // 55

const fib = (number) => {
  if (number <= 2) return 1;
  return fib(number - 2) + fib(number - 1);
};

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
