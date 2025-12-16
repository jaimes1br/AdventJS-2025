# Reto #15: ✏ Dibujando tablas

## Medio 🟠  | Puntuación:  5⭐ Extra: 3⭐

**Al Polo Norte ha llegado ChatGPT** y el elfo *Sam Elfman* está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función **``drawTable``** que reciba un **array de objetos** y lo convierta en una **tabla de texto**.

La tabla dibujada debe tener:

* Cabecera con letras de columna (**``A``**, **``B``**, **``C…``**).
* El contenido de la tabla son los valores de los objetos.
* Los valores deben estar alineados a la izquierda.
* Los campos dejan siempre un espacio a la izquierda.
* Los campos dejan a la derecha el espacio necesario para alinear la caja.

La función recibe un segundo parámetro **``sortBy``** que indica el nombre del campo por el que se deben **ordenar las filas**. El orden será **alfabético ascendente** si los valores son strings y **numérico ascendente** si son números.

Mira el ejemplo para ver cómo debes dibujar la tabla:

🧩 **Ejemplos**

```javascript
drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
)
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
)
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+
```

## Solución propuesta

```javascript
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
```
