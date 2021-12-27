let date = new Date();
let time = {
    hr:0,
    min:0,
    sec:0,
    state:'am'
}
function adder(para){
    para['sec'] ++
}

console.log(time)
setInterval(()=>{adder(time)},1000)
setInterval(()=>{
    console.log(time)
}, 3000)
