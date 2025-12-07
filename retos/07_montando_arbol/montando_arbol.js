// console.log(drawTree(2, 'o', 2))

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let tree = '';

  for (let i = 0; i < height; i++) {
    const level = '*'.repeat(i + 1) + '*'.repeat(i);
    tree += level;
  }
  
  let t = tree.split('');
  
  for (let j = 1; j <= (height * height); j++) {
    if(! (j%frequency) ){
      t[j-1] = ornament;
    } 
  }
  
  let newt = t.join('');
  let f = '';
  
  for (let i = 0; i < height; i++) {
    const take = 2*i + 1;
    const spaces = ' '.repeat( height - 1 - i);
    f += spaces + newt.substring(0, take) + '\n';
    newt = newt.slice(take,);
  }

  const base = ' '.repeat(height-1) + '#';
  return f += base;
}

module.exports = drawTree
