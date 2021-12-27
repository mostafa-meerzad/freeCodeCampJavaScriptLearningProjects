function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let CashInDrawer = 0;
    let change = {status: '', change: []};
    for(let i of cid){
        CashInDrawer += i[1];
        // console.log(i[1])
    }

    if (CashInDrawer < changeDue){
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
    }
    else if (changeDue === CashInDrawer){
        change.status = "CLOSED";
        change.change = cid;
    }
    else{

    }
    // console.log('this is total: ' + CashInDrawer)
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
                                ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// ------------------------------- some examples ----------------------
//
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
//["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
//
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
// ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
////should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
//
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
// ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
//// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5],
// ["DIME", 0.2], ["PENNY", 0.04]]}.
//
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],
// ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
////should return {status: "INSUFFICIENT_FUNDS", change: []}.
//
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0],
// ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// //should return {status: "INSUFFICIENT_FUNDS", change: []}.
//
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
// ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
////should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],
// ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
//----------------------------------------------------------------



//[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
// ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// should return

//["QUARTER", 0.5]]

//----------------------------------------

// price => 3.26
// payment => 100

// change due => 96.74
// console.log(Math.round((96.74 % 20) * Math.pow(10, 2))/ 100)
// console.log(Math.round((96.74 % 20 % 10) * Math.pow(10, 2))/ 100)
// console.log(Math.round((96.74 % 20 % 10 % 5) * Math.pow(10, 2))/ 100)
// console.log(Math.round((96.74 % 20 % 10 % 5 % 0.25) * Math.pow(10, 2))/ 100)
// console.log(Math.round((96.74 % 20 % 10 % 5 % 0.25 % 0.10 )* Math.pow(10, 2))/ 100)
// console.log(Math.round((96.74 % 20 % 10 % 5 % 0.25 % 0.10 % 0.05) * Math.pow(10, 2))/ 100)
// console.log(Math.round((96.74 % 20 % 10 % 5 % 0.25 % 0.10 % 0.05 % 1) * Math.pow(10, 2))/ 100)

// 96.74 - 60 => 36.74
// 36.74 - 20 => 16.74
// 16.74 - 55 => 38.26



// total = 335.41
// money in the drawer
//
// [["ONE HUNDRED", 100],
// ["TWENTY", 60],
// ["TEN", 20],
// ["FIVE", 55],
// ["ONE", 90],
// ["QUARTER", 4.25],
// ["DIME", 3.1],
// ["NICKEL", 2.05],
//["PENNY", 1.01]]

// console.log(20 < 96.74)
// console.log(Math.round(((96.74 - 60) * Math.pow(10, 2)) / 100))
// console.log(Math.round((96.74 - 60) * 100)/ 100)
// console.log(Math.round((36.74 - 20) * 100)/ 100)
// console.log(Math.round((16.74 - 10) * 100)/ 100)
// console.log(96.74 / 20)

// change due => 96.74
console.log(4.25 - 0.5)
console.log(4.25 - (4.25 - 0.5))
console.log(55 - 15)
console.log(55 - 40)
console.log()

// should return
//[["TWENTY", 60],
// ["TEN", 20],
// ["FIVE", 15],
// ["ONE", 1],
// ["QUARTER", 0.5],
// ["DIME", 0.2],
// ["PENNY", 0.04]]
// total = 96.74

let result = [];
let valOfArr = [];
let x = 0;
let remaining = 96.74;
if( remaining > 100){
    remaining -= valOfArr[0];
    result[0] = remaining;
}
else if ( remaining > 20){
    remaining -= valOfArr[1];
    result[1] = remaining
}

