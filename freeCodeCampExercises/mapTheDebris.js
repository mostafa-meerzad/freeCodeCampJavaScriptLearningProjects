function orbitalPeriod(arr) {
    console.log(arr)
    let finalArr = [];
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const a = 2 * Math.PI;
    const getOrbitPeriod = function(obj){

        const c = Math.pow(obj.avgAlt + earthRadius, 3);
        const b = Math.sqrt(c / GM);
        const orbPeriod = Math.round(a * b);
        return {name: obj.name, orbitalPeriod: orbPeriod}

    }
    for (let element in arr){
        // console.log(element)
        // console.log(getOrbitPeriod(arr[element]));
        finalArr.push(getOrbitPeriod(arr[element]));
    }
return finalArr
}


// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
// should return [{name: "sputnik", orbitalPeriod: 86400}].
//
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]


