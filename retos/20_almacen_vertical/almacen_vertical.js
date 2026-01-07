/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
    const limit = warehouse.length ;
    const newWarehouse = [...warehouse];

    drops.forEach(drop => {       
        for (let i = limit; i > 0; i--) {
            if(newWarehouse[i-1][drop] === '.'){
                newWarehouse[i-1][drop] = '#';
                break;
            }
        }
    })
  
    return newWarehouse;
}

module.exports = dropGifts
