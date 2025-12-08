// console.log(findUniqueToy('Gift')) // 'G'
// console.log(findUniqueToy('sS')) // ''
// console.log(findUniqueToy('reindeeR'))// 'i'

// console.log(findUniqueToy('AaBbCc')) // ''
// console.log(findUniqueToy('abcDEF')) // 'a'
// console.log(findUniqueToy('aAaAaAF')) // 'F'
// console.log(findUniqueToy('sTreSS')) // 'T'
// console.log(findUniqueToy('z')) // 'z'

/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
// function findUniqueToy(toy) {

//     let reviewed = ''
//     for (let i = 0; i < toy.length; i++) {
//         const l = toy[i].toLowerCase();
//         const rest = toy.slice(i+1,).toLowerCase();

//         if(!rest.includes(l) && !reviewed.includes(l)) return toy[i];

//         reviewed += l
//     }


//     return ''
// } // 4 ⭐

function findUniqueToy(toy) {
    const values = {};
    for (let i = 0; i < toy.length; i++) {
        const l = toy[i].toLowerCase();

        if(!values[l]) values[l] = 1
        else values[l]++
    }

    for(let opc in values){
        if(values[opc] === 1){
            const i = toy.toLowerCase().indexOf(opc)
            return toy[i]

        }
    }

    return ''
} // 5⭐

module.exports = findUniqueToy