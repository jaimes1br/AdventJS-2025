// console.log(packGifts([2, 3, 4, 1], 5)) // 2 
// console.log(packGifts([3, 3, 2, 1], 3)) // 3
// console.log(packGifts([1, 1, 1, 1], 2)) // 2
// console.log(packGifts([5, 6, 1], 5)) // null
// console.log(packGifts([1, 2, 3, 4, 5], 10)) // 2
// console.log(packGifts([], 10)) // 0 

/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {

    if(gifts.length === 0) return 0;

    const max = Math.max(...gifts);
    if(max > maxWeight) return null;
    
    let sleighs = 0;
    let currentSleighWeight = 0;
    gifts.forEach(gift => {
        if (currentSleighWeight + gift <= maxWeight) {
            currentSleighWeight += gift;
        } else {
            sleighs++;
            currentSleighWeight = gift;
        }
    });

    if(currentSleighWeight > 0) sleighs++;

    return sleighs;
} // 5⭐

// function packGifts(gifts, maxWeight) {

//     if(gifts.length === 0) return 0;

//     const max = Math.max(...gifts);
//     if(max > maxWeight) return null;
    
//     let sleighs = 0;
//     let currentSleighWeight = 0;
//     gifts.forEach(gift => {
//         const currentCount = currentSleighWeight + gift;

//         if(currentCount < maxWeight) {
//             currentSleighWeight += gift;
//         }

//         if(currentCount === maxWeight){
//             sleighs++;
//             currentSleighWeight = 0;
//         }

//         if(currentCount > maxWeight){
//             sleighs++;
//             currentSleighWeight = gift;
//         }
//     });

//     if(currentSleighWeight > 0) sleighs++;

//     return sleighs;
// } // 4⭐

module.exports = packGifts;