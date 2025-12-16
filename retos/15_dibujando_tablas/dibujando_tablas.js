// console.log(drawTable(
//   [
//     { name: 'Charlie', city: 'New York' },
//     { name: 'Alice', city: 'London' },
//     { name: 'Bob', city: 'Paris' }
//   ],
//   'name'
// ))
// console.log(drawTable([
//         { id: 'zebra', active: true },
//         { id: 'alpha', active: false }
//       ], 'id'))
// console.log(drawTable(
//   [
//     { gift: 'Book', quantity: 5 },
//     { gift: 'Music CD', quantity: 1 },
//     { gift: 'Doll', quantity: 10 }
//   ],
//   'quantity'
// ))
/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {

    if(data.length === 0) return '';
    const sorted = [...data];

    if(typeof data[0][sortBy] === 'number'){
        sorted.sort((a,b) => a[sortBy] - b[sortBy])
    } else {
        sorted.sort((a,b) => a[sortBy].localeCompare(b[sortBy]))
    }

    let sizes = {}
    Object.keys(data[0]).forEach(key => {
        sizes[key] = 0;

        sorted.forEach(value => {
            const l = `${value[key]}`.length;
            if(sizes[key] < l) sizes[key] = l;
        });
    })
    

    let line = '';
    let headers = '';

    Object.keys(sizes).forEach((key,i) => {
        line += '+-' + ''.padEnd(sizes[key],'-') + '-';

        const char = 65 + i;
        const c = String.fromCharCode(char);
        headers += '| ' + c.padEnd(sizes[key],' ') + ' ';
    })

    line += '+';
    headers += '|';

    const r = [line, headers, line]; 
    sorted.forEach(value => {
        let line = '';
        for(let key in value){
            const str = `${value[key]}`;
            line += `| ${str.padEnd(sizes[key],' ')} `;
        }

        r.push(line + '|')
    })
     
    r.push(line);
    return r.join('\n');
}

module.exports = drawTable;