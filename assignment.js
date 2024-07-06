
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


function matchFinder(string1, string2){
  if ( typeof string1 !== 4 || string2 !== 8){
    console.log('please enter a string')
  }

}

const finder = matchFinder('John Doe' , 9)