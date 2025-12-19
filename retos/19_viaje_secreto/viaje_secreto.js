// console.log(revealSantaRoute([
//   ['MEX', 'CAN'],
//   ['UK', 'GER'],
//   ['CAN', 'UK']
// ]))
// → ['MEX', 'CAN', 'UK', 'GER']

// console.log(revealSantaRoute([
//   ['USA', 'BRA'],
//   ['JPN', 'PHL'],
//   ['BRA', 'UAE'],
//   ['UAE', 'JPN'],
//   ['CMX', 'HKN']
// ]))
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

// console.log(revealSantaRoute([
//   ['STA', 'HYD'],
//   ['ESP', 'CHN']
// ]))
// → ['STA', 'HYD']

/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
// function revealSantaRoute(routes) {
    
//     if(routes.length === 0) return [];
    
//     const objRoutes = {};
//     routes.forEach(route => {
//         objRoutes[route[0]] = route[1];
//     })

//     const result = [routes[0][0],routes[0][1]];
//     let key = result[1];
//     const keys = Object.keys(objRoutes);

//     for (let i = 1; i < routes.length; i++) {
//         if(keys.includes(key)){
//             const value = objRoutes[key]; 
//             result.push(value);
//             key = value;
//         }else {
//             break;
//         }
//     }

//     return result;
// } // 4⭐

function revealSantaRoute(routes) {
    
    if(routes.length === 0) return [];
    
    const objRoutes = {};
    routes.forEach(route => {
        objRoutes[route[0]] = route[1];
    })

    const result = [routes[0][0]];
    let key = result[0];
    const keys = Object.keys(objRoutes);

    while(keys.includes(key)){
        const value = objRoutes[key]; 
        result.push(value);
        key = value;

    }

    return result;
} // 5⭐

module.exports = revealSantaRoute;