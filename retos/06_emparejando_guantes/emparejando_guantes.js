// const gloves = [
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'red' },
//   { hand: 'R', color: 'green' },
//   { hand: 'L', color: 'blue' },
//   { hand: 'L', color: 'green' }
// ]

// console.log(matchGloves(gloves)) // ["red", "green"]

// const gloves2 = [
//   { hand: 'L', color: 'gold' },
//   { hand: 'R', color: 'gold' },
//   { hand: 'L', color: 'gold' },
//   { hand: 'L', color: 'gold' },
//   { hand: 'R', color: 'gold' }
// ]

// console.log(matchGloves(gloves2)) // ["gold", "gold"]

// const gloves3 = [
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'green' },
//   { hand: 'L', color: 'blue' }
// ]

// console.log(matchGloves(gloves3)) // []

// const gloves4 = [
//   { hand: 'L', color: 'green' },
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'red' },
//   { hand: 'R', color: 'green' }
// ]

// console.log(matchGloves(gloves4)) // ['red', 'green']

/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */

function matchGloves(gloves) {
    const waiting = {}; 
    const result = []; 

    for (const g of gloves) {
        const c = g.color;
        const hand = g.hand;
        const handO = (hand === 'L' ? 'R' : 'L');

        if (!waiting[c]) {
            waiting[c] = { L: 0, R: 0 };
        }

        if (waiting[c][handO] > 0) {
            waiting[c][handO]--; 
            
            result.push(c); 
            
        } else {
            waiting[c][hand]++;
        }
    }

    return result;
}

module.exports = matchGloves

// FALLA EN ORDEN
// function matchGloves(gloves) {
 
//     const colors = Object.groupBy(gloves, ({ color }) => color);
//     const result = [];

//     for(let c in colors){
//         const t = { 'L': 0, 'R': 0 };
//         colors[c].forEach(e => {
//             t[e.hand] ++
//         });

//         const min = Math.min(t.L,t.R)
//         const matched = Array(min).fill(c)
//         result.push(matched)
//     }

//     return result.flat()
// }