// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

let primes = [];
let isPrime;

for (let i = 0; i <= 100; i++) {
	isPrime = true;
	if (i === 0 || i === 1) {
		continue;
	}

	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			// not prime
			isPrime = false;
			break;
		}
	}

	if (isPrime) {
		primes.push(i);
	}
}

console.log(primes);
