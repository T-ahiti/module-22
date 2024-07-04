
function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
     const perChairWood = 3
     const perTableWood = 10
     const perBedWood = 50

     const chairWood = chairQuantity * perChairWood
     const bedWood = bedQuantity * perBedWood
     const tableWood = tableQuantity * perTableWood

     const totalWood = chairWood + bedWood + tableWood

     return totalWood;

    //  console.log(chairQuantity, tableQuantity, bedQuantity)
}

const totalWood = woodCalculator(2, 3, 5)
console.log(totalWood)