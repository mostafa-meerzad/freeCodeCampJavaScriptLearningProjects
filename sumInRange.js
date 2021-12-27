function sumAll(num1, num2){
    // To Do
    // distinguish the smallest num and biggest num
    // sum all the nums between those numbers
    // return the sum

    let first, last, sum = 0;
    if (num1 < num2){
        first = num1;
        last = num2;
    }
    else{
        first = num2;
        last = num1;
    }

    for(first; first <= last; first++){
        sum += first
    }
    return sum
}

console.log(sumAll(1,4))
console.log(sumAll(4,1))