# Reto #7: 🎄 Montando el árbol

## Fácil 🟢  | Puntuación:  5⭐ Extra: 3⭐

¡Es hora de decorar el **árbol de Navidad** 🎄! Escribe una función que reciba:

* **``height``** → la altura del árbol (número de filas).
* **``ornament``** → el carácter del adorno (por ejemplo, **``"o"``** o **``"@"``**).
* **``frequency``** → cada cuántas posiciones de asterisco aparece el adorno.

El árbol se dibuja con asteriscos **``*``**, pero **cada** **``frequency``** **posiciones**, el asterisco se reemplaza por el adorno.

El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si **``frequency``** es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

El árbol debe estar centrado y tener un tronco **``#``** de una línea al final.

🧩 **Ejemplos**

```javascript
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #
```

## Solución propuesta 8⭐

```javascript
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

```

---
