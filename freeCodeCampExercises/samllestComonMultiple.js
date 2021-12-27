function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    console.log('this is first value of upperBound ' + upperBound)
    for (let i = min; i <= max; i++) {
        upperBound *= i;
        // console.log(upperBound)
    }
    // console.log('this is upperBound ' + upperBound)
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // console.log('this is value of multiple ' + multiple)
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        // console.log('this is divisorCount ' + divisorCount)
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

// console.log( smallestCommons([1, 5]))

// 1, 2, 3, 4, 5
// 60 multiple of all numbers