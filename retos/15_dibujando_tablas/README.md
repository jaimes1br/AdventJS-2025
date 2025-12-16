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
function findGiftPath(workshop, gift) {

    if(Object.entries(workshop).length === 0) return []

    const checkObject = (key,obj) => {
        // Case 1: Base Case - Value found
        if(obj === gift){
            return [key]
        }

        // Case 2: Recursive Step - Search within nested object
        if(typeof obj === 'object' && obj !== null){
            for (const keyIn of Object.keys(obj)) {
                const r = checkObject(keyIn,obj[keyIn])
                if(r.length > 0){
                    // Add the current key to the beginning of the found sub-path.
                    return [key,...r]
                }
            }
        }

        // Case 3: Not found in this branch
        return []
    }

    for(let key in workshop){
        const r = checkObject(key,workshop[key])
        if(r.length > 0) return r
    }

    return []
} // 4⭐
```

## Solución propuesta #2 5 ⭐

```javascript
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
}
```
