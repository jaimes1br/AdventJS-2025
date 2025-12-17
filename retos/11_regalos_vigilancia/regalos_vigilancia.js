// console.log(findUnsafeGifts([
//   '.*.',
//   '*#*',
//   '.*.'
// ])) // ➞ 0)

// console.log(findUnsafeGifts([
//   '...',
//   '.*.',
//   '...'
// ])) // ➞ 1

// console.log(findUnsafeGifts([
//   '*.*',
//   '...',
//   '*#*'
// ])) // ➞ 2

// console.log(findUnsafeGifts([
//   '.....',
//   '.*.*.',
//   '..#..',
//   '.*.*.',
//   '.....'
// ])) // ➞ 4

/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
    const maxRow = warehouse.length;
    const maxCol = warehouse[0].length;
    const moves = [
        [-1,0],
        [1,0], 
        [0,-1],
        [0,1]
    ];
    let result = 0;

    for(let r = 0; r < maxRow; r++){
        for(let c = 0; c < maxCol; c++){
            const value = warehouse[r][c];
            
            if(value === '*'){
                let flag = true;
                moves.forEach(move => {
                    const [nx,ny] = move
                    let tx = r + nx;
                    let ty = c + ny;
                    if(tx >= 0 && ty >= 0 && tx < maxRow && ty < maxCol){
                        if(warehouse[tx][ty] === '#') flag = false; 
                    }
                })

                if(flag) result++ 
            }
        }
    }

    return result;
}

module.exports = findUnsafeGifts;