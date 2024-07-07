


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
console.log(maker)