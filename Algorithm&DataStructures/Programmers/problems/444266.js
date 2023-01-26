function solution(n) {
  var answer = 0;

  for (let i = 1; i < n + 1; i++) {
    if (isPrime(i)) answer++;
  }

  return answer;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(solution(1000000));
