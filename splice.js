
const friends = [12, 54, 453, 63, 78, 35, 85, 556]

const partial = friends.splice(3,7, 99, 23, 34, 4324, 23, 442)
//  7 indicates koyta element ke shorabo
// 99 theke 442 indicate kore ei elements gula  input dite hobe
console.log(partial)
console.log(friends)

// splice slice er motoi but kono part alada korle real one theke vanish hoye jay
