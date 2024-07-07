

let array = [1, 2, 5]
function canPay(give , price){
   if(array.length === 0){
    return 'please give a proper array'
   }
   let sum  = 0
    for(let i =0 ; i<array.length; i++){
        sum += array[i];
   }
    if(sum >= price){
       return true;
   }
   else{
    return false;
   }
}
const pay = canPay(array, 10)
// console.log(pay)