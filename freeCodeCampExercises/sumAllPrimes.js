//primes 1, 2, 3, 5, 7, 11
// nums  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}

function sumPrimes(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
            // console.log(i);
            total += i;
        }
    }
    // console.log(total)
    return total

}

console.log(sumPrimes(5))
// console.log(isPrime(2))