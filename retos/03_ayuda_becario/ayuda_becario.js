// const g1 = drawGift(4, '*')
// console.log(g1)
// /*
//  ****
//  *  *
//  *  *
//  ****
//  */

// const g2 = drawGift(3, '#')
// console.log(g2)
/*
###
# #
###
*/

// const g3 = drawGift(2, '-')
// console.log(g3)
// /*
// --
// --
// */

// const g4 = drawGift(1, '+')
// console.log(g4)
// // ""  pobre becario…
/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {

    if(size < 2 ) return '';

    const top = symbol.repeat(size); 
    let gift = top  + '\n';
    for (let i = 0; i < size - 2; i++) {
        gift += symbol + ' '.repeat(size - 2) + symbol + '\n';
    }

    gift += top;
    return gift;
}

module.exports = drawGift