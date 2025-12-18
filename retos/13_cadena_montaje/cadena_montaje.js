console.log(runFactory(['>>.'])) // 'completed'
console.log(runFactory(['>>>'])) // 'broken'
console.log(runFactory(['>><']) ) // 'loop'
console.log(runFactory(['>>v','..<'])) // 'completed'
console.log(runFactory(['>>v', '<<<'])) // 'broken'
console.log(runFactory(['>v.','^..'])) // 'completed'
console.log(runFactory(['v.', '^.'])) // 'loop'
console.log(runFactory([]));
/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {

    if (!factory || factory.length === 0) return 'broken';
    
    const limitX = factory.length;
    const limitY = factory[0].length;
    const visited = new Set();

    const moves = {
        '>': [0,1],
        '<': [0,-1],
        '^': [-1,0],
        'v': [1,0]
    }

    let cx = 0;
    let cy = 0;

    while(true) {

        const posKey = `${cx}${cy}`;
        if (visited.has(posKey)) return 'loop';
        visited.add(posKey);

        const step = factory[cx][cy];

        if(step === '.') return 'completed';

        const [nX,nY] = moves[step];
        cx += nX;
        cy += nY;


        if(cx < 0 || cy < 0 || cx >= limitX || cy >= limitY ) return 'broken';

    }
}

module.exports = runFactory