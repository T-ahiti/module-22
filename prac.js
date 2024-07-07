
let address = {
    street : 10,
    house  : '15A',
    society: 'Earth Perfect'
}

function findAdress(object){
    let values = []
    for(let key in object){
        if(object.hasOwnProperty(key)){
            values.push(object[key])
        }
    }
 return values.join(',')
}

const find = findAdress(address)
console.log(find)