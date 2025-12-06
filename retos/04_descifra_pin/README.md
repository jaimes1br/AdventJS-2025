# Reto #4: 📚 Descifra el pin de Santa

## Medio 🟠  | Puntuación:  5⭐ Extra: 2⭐

Los elfos han encontrado el **código cifrado** que protege la puerta del taller de Santa 🔐. El PIN tiene **4 dígitos**, y está escondido dentro de bloques como estos:

```javascript
    [1++][2-][3+][<]
```

**Escribe una función que descifre el PIN a partir del código.**

El código está formado por bloques entre corchetes **``[...]``** y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma **``[nOP...]``**, donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

* **``+``** suma 1
* **``-``** resta 1

El resultado siempre es un dígito (aritmética mod 10), por ejemplo **``9 + 1 → 0``** y **``0 - 1 → 9``**.

También existe el bloque especial **``[<]``**, que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver **``null``**.

🧩 **Ejemplos**

```javascript
decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)
```

## Solución propuesta

```javascript
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
        } else {
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
```

---
