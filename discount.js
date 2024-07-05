
// 1.if the ticket number is less then 100, per ticket price: 100
// 2.if the ticket number is more then 100, but less than 200, first 100 tickets will be 100, rest will be 90tk per piece 
// 3. if the ticket number is more then 200, 
//    first 100 .---> 100tk
//    101-200 ----> 90tk
//    200+ ----> 70tk

function ticketPrice(ticketQuantity){
   const first100Rate = 100;
   const second100Rate = 90;
   const restRate = 70;
   if(ticketQuantity <=100){
    const price = ticketQuantity * first100Rate
     return price
   }
   else if( ticketQuantity <= 200){
    const first100Price = 100 * first100Rate
    const restTicketQuantity = ticketQuantity - 100
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Price + restTicketPrice
    return totalPrice
   }
}

const  price = ticketPrice(180)
console.log(price)
