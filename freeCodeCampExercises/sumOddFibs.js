function sumFibs(num) {
    //fib --> 0,1,1,2,3,5,8,13
    let x = 0, y = 1;
    let fibSeries = [1];
    let sumOddFibs = 0;
    for (let i = 1; i < num; i++) {
        z = x
        x = y;
        y = z + y
        fibSeries.push(y)
    }
    // console.log(fibSeries)
    for (let j=0; j<fibSeries.length; j++){
        // console.log(fibSeries[j])
        if ((fibSeries[j] <= num) && (fibSeries[j] % 2 !== 0)){
            sumOddFibs += fibSeries[j]
        }
    }
    // console.log(sumOddFibs)
    return sumOddFibs

    // return fibSeries.filter(item => item % 2 !== 0).reduce((partial_sum, a) => partial_sum + a, 0)
}
console.log(sumFibs(1000));
