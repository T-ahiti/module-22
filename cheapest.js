
const phones = [
    {
        name: 'samsung',
        camera: 12,
        storage: '32gb',
        price: 36000,
        color: 'silver'
    },

    {
        name: 'vivo',
        camera: 12,
        storage: '32gb',
        price: 26000,
        color: 'silver'
    },

    {
        name: 'iphn',
        camera: 12,
        storage: '32gb',
        price: 34000,
        color: 'silver'
    }, 

    {
        name: 'Xiaomi',
        camera: 12,
        storage: '32gb',
        price: 96000,
        color: 'silver'
    },

    {
        name: 'oppo',
        camera: 12,
        storage: '32gb',
        price: 3000,
        color: 'silver'
    },

    {
        name: 'nokia',
        camera: 12,
        storage: '32gb',
        price: 36000,
        color: 'silver'
    },

    {
        name: 'walton',
        camera: 12,
        storage: '32gb',
        price: 8000,
        color: 'silver'
    }
];

function cheapestPhone(phones){
    let cheapest = phones[0]
    for(let i=0; i<phones.length; i++){
        const phone = phones[i]
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest
}

const mySelection = cheapestPhone(phones)
console.log(mySelection)