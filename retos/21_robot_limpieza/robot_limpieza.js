console.log(clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
));

console.log(clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2]
));


// [
//     ['#', '.', '#'],
//     ['#', '.', '#'],
//     ['#', '.', '#']
//   ],

//  [
//     ['#', '.', '#'],
//     ['#', '.', '#'],
//     ['#', '#', '#']
//   ],
//  [
//     ['.', '.', '.'],
//     ['#', '.', '#'],
//     ['#', '.', '#'],
//   ],
// [
//   ['.', '.', '#'],
//   ['#', '.', '#'],
//   ['#', '.', '#']
// ]

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {

    if(warehouse.length === 0) return [];
    
    const limit = warehouse.length ;
    let newWarehouse = [...warehouse];
    const cols = warehouse[0].length;

    const verifyRow = () => {
        for (let r = limit - 1; r >= 0; r--) {
            if (newWarehouse[r].every( cell => cell === '#' )) {
                newWarehouse.splice(r, 1);

                newWarehouse.unshift(new Array(cols).fill('.') )
            }
        }
    }


    drops.forEach(drop => {       
        for (let i = limit - 1; i >= 0; i--) {
            if(newWarehouse[i][drop] === '.'){
                newWarehouse[i][drop] = '#';
                verifyRow();
                break;
            }
        }
    })

  
    return newWarehouse;
}

module.exports = clearGifts


// function clearGifts(warehouse, drops) {
//     const limit = warehouse.length ;
//     const newWarehouse = [...warehouse];

//     drops.forEach(drop => {       
//         for (let i = limit; i > 0; i--) {
//             if(newWarehouse[i-1][drop] === '.'){
//                 newWarehouse[i-1][drop] = '#';
//                 if(!newWarehouse[limit-1].includes('.')){
//                     const newRow = new Array(warehouse[0].length).fill('.')
//                     newWarehouse.pop();
//                     newWarehouse.unshift(newRow);                    
//                 }
    
//                 break;
//             }
//         }
//     })
  
//     return newWarehouse;
// }
