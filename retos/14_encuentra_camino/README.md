# Reto #14: 🗃 Encuentra el camino al regalo

## Fácil 🟢  | Puntuación:  5⭐ Extra: 2⭐

En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
Ahora guardan los regalos en un **objeto mágico con profundidad limitada**, donde **cada valor aparece una sola vez**.

Santa necesita una forma rápida de saber **qué camino de claves** debe seguir para encontrar un regalo concreto.

Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el **array de claves** que hay que recorrer para llegar a ese valor.

**Reglas:**

* El objeto tiene **como máximo 3 niveles de profundidad.**
* El valor a buscar **aparece como mucho una vez.**
* El objeto solo contiene **otros objetos y valores primitivos** (strings, numbers, booleans).
* Si el valor no existe, devuelve un array vacío.

🧩 **Ejemplos**

```javascript
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

findGiftPath(workshop, 'train')
// ➜ ['storage', 'shelf', 'box1']

findGiftPath(workshop, 'switch')
// ➜ ['storage', 'shelf', 'box2']

findGiftPath(workshop, 'car')
// ➜ ['storage', 'box']

findGiftPath(workshop, 'doll')
// ➜ ['gift']

findGiftPath(workshop, 'plane')
// ➜ []
```

## Solución propuesta #1 4 ⭐

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
