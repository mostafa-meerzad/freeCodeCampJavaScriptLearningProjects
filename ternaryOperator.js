//======================= single conditional operator ====================================

function withoutTernaryOp(num) {
    let baseNum = 10;
    if (num > baseNum)
        return "bigger than base";
    else
        return "smaller than base"

}

console.log(withoutTernaryOp(9))
console.log(withoutTernaryOp(12))

console.log('------------------------------------')

// conditional operator or ternary operator:
function withTernaryOp(num) {
    // a ? b :c;   // base structure.
    // 'a' is the condition, 'b' is the statement to run if 'a' is true, 'c' is the statement to run if 'a' in false.
    let baseNum = 10;
    return num > baseNum ? "bigger than base" : "smaller than ";
}

console.log(withoutTernaryOp(2))
console.log(withoutTernaryOp(21))

//======================= multiple conditional operator ====================================
function multipleConditionalOperator(num) {
    let baseNum = 10;
    return num > baseNum ? "bigger than 10"
        : num === 10 ? "equal to 10"
            : num < baseNum ? "smaller than 10"
                : "unknown";
}

console.log(multipleConditionalOperator('sdf'))
