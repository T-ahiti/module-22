
function cubeNumber(number){
    let num = Math.abs(number)
    const cubicNumber = num * num * num;
    if(typeof number !== '3'){
      //  console.log('please enter a number')
    }
    return cubicNumber;
}
const youCubic = cubeNumber(-9)
// console.log(youCubic)




function matchFinder(string1, string2){
  if ( typeof string1 !== 'string' || typeof string2 !== 'string'){
    return 'please enter a string';
  }
  else if( string1.includes(string2) || string2.includes(string1) ){
    return true;
  }  
  for (let i = 0; i < string1.length; i++) {
    for (let j = i + 1; j <= string1.length; j++) {
      const substring = string1.substring(i, j);
      if (string2.includes(substring)) {
        return true;
      }
    }
  }
  return false;
  
}
const finder = matchFinder('john doe','ohn')
console.log(finder)






function sortMaker(array){
  if(  array[0] ===array [1]){
      return 'equal';
  }
  else if( array[0] <=0 || array[1] <=0){
      return 'invalid input'
  }
  else if( array[0] >=0 && array[1] >=0){
    let max = Math.max(array[0], array[1])
    let min = Math.min(array[0], array[1])
    array[0] = max
    array[1] = min
    return array
  }
}
const maker = sortMaker([2, 4]);
// console.log(maker)

