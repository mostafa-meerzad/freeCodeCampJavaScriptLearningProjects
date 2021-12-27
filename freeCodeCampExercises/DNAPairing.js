function pairElement(str) {
    let result = [];
    const pairOfA = 'T', pairOfT = 'A', pairOfG = 'C', pairOfC = 'G';
    for (let i = 0; i < str.length; i++) {
        let subArr = [];
        if (str[i] === 'A') {
            subArr.push(str[i])
            subArr.push(pairOfA)
        } else if (str[i] === 'T') {
            subArr.push(str[i])
            subArr.push(pairOfT)
        } else if (str[i] === 'C') {
            subArr.push(str[i])
            subArr.push(pairOfC)
        } else if (str[i] === 'G') {
            subArr.push(str[i])
            subArr.push(pairOfG)
        }

        result.push(subArr)
    }
    return result
}


console.log(pairElement('GCG'))