function factorial(n) {
  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }
  return n;
}

console.log(factorial(4));
