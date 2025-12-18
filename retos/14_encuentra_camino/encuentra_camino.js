const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

// console.log(findGiftPath(workshop, 'train'))
// ➜ ['storage', 'shelf', 'box1']
// console.log(findGiftPath(workshop, 'switch'))
// ➜ ['storage', 'shelf', 'box2']
// console.log(findGiftPath(workshop, 'car'))
// ➜ ['storage', 'box']
// console.log(findGiftPath(workshop, 'doll'))
// ➜ ['gift']
/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {string[]} The path to the gift
 */

function findGiftPath(workshop, gift) {
    const checkObject = (currentObj, path = []) => {
      if (currentObj === gift) {
        return path;
      }

      if (typeof currentObj === 'object' && currentObj !== null) {
        for (const key of Object.keys(currentObj)) {
          const newPath = [...path, key];
          const resultPath = checkObject(currentObj[key], newPath);

          if (resultPath.length > 0) {
            return resultPath; 
          }
        }
      }

      return [];
    };

    return checkObject(workshop);
} // 5⭐

// function findGiftPath(workshop, gift) {

//     if(Object.entries(workshop).length === 0) return []

//     const checkObject = (key,obj) => {
//         // Case 1: Base Case - Value found
//         if(obj === gift){
//             return [key]
//         }

//         // Case 2: Recursive Step - Search within nested object
//         if(typeof obj === 'object' && obj !== null){
//             for (const keyIn of Object.keys(obj)) {
//                 const r = checkObject(keyIn,obj[keyIn])
//                 if(r.length > 0){
//                     // Add the current key to the beginning of the found sub-path.
//                     return [key,...r]
//                 }
//             }
//         }

//         // Case 3: Not found in this branch
//         return []
//     }

//     for(let key in workshop){
//         const r = checkObject(key,workshop[key])
//         if(r.length > 0) return r
//     }

//     return []
// } // 4⭐

module.exports = findGiftPath