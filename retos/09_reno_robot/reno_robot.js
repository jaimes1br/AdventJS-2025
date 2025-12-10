// const board = `\n.....\n.*#.*\n.@...\n.....\n`;

// console.log(moveReno(board, 'D')) // fail
// console.log(moveReno(board, 'U')) // 'success'
// console.log(moveReno(board, 'RU')) // 'crash'
// console.log(moveReno(board, 'RRRUU')) // 'success'
// console.log(moveReno(board, 'DD')) //'crash'
// console.log(moveReno(board, 'UUU')) //'success'
// console.log(moveReno(board, 'RR')) //'fail' 

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
// function moveReno(board, moves) {
  
//     const temp = board.split('\n');
//     temp.pop();
//     temp.shift()

//     let newBoard = [];
//     let pos = { x: 0, y: 0 };

//     for (let i = 0; i < temp.length; i++) {
//         if(temp[i].includes('@')){
//             let y = temp[i].indexOf('@');
//             pos.x = i;
//             pos.y = y;
//         }

//         newBoard.push(temp[i].split(''));        
//     }

//     const opts = { D: 1, U: -1, L: -1, R: 1} ;

//     for(let m of moves){
//         if(m === 'D' || m === 'U' ){
//             pos.x += opts[m];
//         }else{
//             pos.y += opts[m];
//         }

//         if(!newBoard[pos.x] || !newBoard[pos.x][pos.y] || newBoard[pos.x][pos.y] === '#' ){
//             return 'crash'
//         }

//         if(newBoard[pos.x][pos.y] === '*'){
//             return 'success'
//         }

//     }

//     return 'fail';
// } // 4 ⭐

function moveReno(board, moves) {
  
    const nb = board.slice(1, -1).split('\n');
    let row, line;

    for(const [i,l] of nb.entries()){
        const index = l.indexOf('@');
        if(index !== -1){
            row = i;
            line = index;
            break;
        }
    }
    
    for(let m of moves){
        const opts = {
            'U': [row - 1, line],
            'D': [row + 1, line],
            'R': [row, line + 1],
            'L': [row, line - 1],
        }

        const [newr,newl] = opts[m];

        if(!nb[newr] || !nb[newr][newl] || nb[newr][newl] === '#' ){
            return 'crash'
        }

        if(nb[newr][newl] === '*'){
            return 'success'
        }

        row = newr;
        line = newl;
    }

    return 'fail';
} // 5 ⭐ 

module.exports = moveReno