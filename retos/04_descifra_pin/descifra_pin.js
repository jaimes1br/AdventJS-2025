// console.log(decodeSantaPin('[1++][2-][3+][<]')) // "3144"
// console.log(decodeSantaPin('[9+][0-][4][<]')) // "0944"
// console.log(decodeSantaPin('[1+][2-]')) // null (solo 2 dígitos)
/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {

    const values = code.replaceAll('[','').split(']');
    values.pop()

    if(values.length < 4 || values.length > 4) return null

    let pin = '';
    const opps = {
        '+' : 1,
        '-' : -1
    }

    for (let i = 0; i < 4; i++) {
        if( values[i] === '<'){
            pin += pin[i-1]            
        }else {
            let num = values[i][0]
            let opp = values[i].slice(1,).split('')
            for(let o of opp){
                num = +num + opps[o]
            }

            if(num > 9) {
                num = num % 10
            }

            if(num < 0){
                num = 10 + num  
            }
                
            pin += num
        }
    }

    return pin
}

module.exports = decodeSantaPin