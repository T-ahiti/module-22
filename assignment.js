
function cubeNumber(number){
    let num = Math.abs(number)
    const cubicNumber = num * num * num;
    if(typeof number !== '3'){
       console.log('please enter a number')
    }
    return cubicNumber;
}

const youCubic = cubeNumber(-9)
// console.log(youCubic)


