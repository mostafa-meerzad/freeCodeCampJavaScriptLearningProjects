function checkCashRegister(price, cash, cid) {
    let changeDueValue = cash - price;
    let cashInDrawer = 0;
    let change = {status: '', change: []};
    for (let i of cid) {
        cashInDrawer = Math.round((cashInDrawer + i[1]) * 100 ) / 100;
    }

    if (cashInDrawer < changeDueValue  ) {
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
    } else if (changeDueValue === cashInDrawer) {
        change.status = "CLOSED";
        change.change = cid;
    } else {
        let basicDollarUnits = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];  //These numbers represents Dollar bills and coins.
        let changeDue = [
            ["ONE HUNDRED", 0],
            ["TWENTY", 0],
            ["TEN", 0],
            ["FIVE", 0],
            ["ONE", 0],
            ["QUARTER", 0],
            ["DIME", 0],
            ["NICKEL", 0],
            ["PENNY", 0]
        ];
        cid.reverse();
        for (let item in basicDollarUnits) {

            if (changeDueValue >= basicDollarUnits[item]) {

                const cidValue = cid[item][1]; // get the money in a specific part of the drawer. (hundreds part)

                if (changeDueValue < cidValue) {
                    // get un-divisible-value to know how much we can't pay of this drawer part. (should be rounded)
                    let unDivisibleVal = Math.round((changeDueValue % basicDollarUnits[item]) * 100) / 100;
                    let paymentValue = Math.round((changeDueValue - unDivisibleVal) * 100) / 100;
                    changeDue[item][1] = paymentValue;
                    changeDueValue = Math.round((changeDueValue - paymentValue) * 100) / 100;

                } else {

                    let unDivisibleVal = Math.round((changeDueValue - cidValue) * 100) / 100;
                    let paymentValue = Math.round((changeDueValue - unDivisibleVal) * 100) / 100; // find how much we should pay
                    changeDue[item][1] = paymentValue;
                    changeDueValue = Math.round((changeDueValue - paymentValue) * 100) / 100;

                }
            }
        }
        if (changeDueValue !== 0){
            change.status = 'INSUFFICIENT_FUNDS';
            change.change = [];
        }
        else{
            change.status = "OPEN";
            change.change = changeDue.filter(item => item[1] !== 0);
        }

    }
    return change
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
    ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log('---------------------------------=========---------------')
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
