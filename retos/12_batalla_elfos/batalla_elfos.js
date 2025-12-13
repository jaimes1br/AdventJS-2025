// console.log(elfBattle('A', 'B')) // 0
// console.log(elfBattle('AAB', 'BBA')) //0
// console.log(elfBattle('AFA', 'BBA')) // 1
// console.log(elfBattle('AFAB', 'BBAF')) // 1
// console.log(elfBattle('AA', 'FF')) //2
// console.log(elfBattle('F', 'B')) //1
// console.log(elfBattle('FF', 'FF')) //0
/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  
    let l1 = 3;
    let l2 = 3;
    // Move outcomes: key = elf1Move + elf2Move, value = [elf1 health change, elf2 health change]
    const moves = {
        AA: [-1,-1],
        AB: [0,0],
        AF: [-2,-1],
        BA: [0,0],
        BB: [0,0],
        BF: [-2,0],
        FA: [-1,-2],
        FB: [0,-2],
        FF: [-2,-2],
    }

    for (let i = 0; i < elf1.length; i++) {
        const m = elf1[i] + elf2[i];
        const [v1,v2] = moves[m];
        l1 += v1;
        l2 += v2;

        if(l2 > 0 && l1 <= 0) return 2;
        if(l1 > 0 && l2 <= 0) return 1;
    }

    if(l1 > l2) return 1;
    if(l2 > l1) return 2;
    return 0
}

module.exports = elfBattle;