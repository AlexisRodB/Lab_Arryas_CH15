# 🍲 Fogón Andino · Arreglos de objetos y funciones

Generation Colombia · Cohorte 15 · JavaScript · Taller calificable

---

## 🧭 ¿Qué es esto?

### El caso de negocio

Fogón Andino es un restaurante que quiere dejar la libreta del mesero y tomar los pedidos con un sistema.
En 8 ejercicios vas a construir ese sistema: la carta, el pedido de la mesa y la cuenta con IVA.

### La calificación es automática

Cada vez que subes tu código, GitHub corre unos **tests** que revisan tus funciones.
En pocos minutos ves tu nota de **0.0 a 5.0** y qué te falta corregir.

### ¿Qué es un test?

**Definición técnica:** un test es un código que ejecuta tu función con datos conocidos y compara lo que retorna con el resultado esperado.

**En la vida real:** es como el control de calidad de una cocina. Antes de que el plato salga, alguien lo revisa; si algo falla, te dice exactamente qué.

### ¿Qué es un test de estructura?

Algunos ejercicios piden una herramienta concreta, como `push` o `pop`.
Un test de estructura lee tu código y revisa que **sí la usaste**. Si llegas al resultado por otro camino, ese test no pasa.

---

## 🍽️ El menú del restaurante

### Así se ve cada plato

Todos los ejercicios usan un menú como este: un **arreglo de objetos**, donde cada objeto es un plato.

```javascript
const menu = [
  { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
  { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
  { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
  { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
  { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
];
```

### Cómo usarlo para probar

Tus funciones **reciben** el menú por parámetro: no lo escribas dentro de la función.
Si quieres probar a mano, pega este menú en un archivo aparte (por ejemplo `prueba.js`) y llama tus funciones desde ahí.

---

## 📋 Los 8 ejercicios

### Tabla general

| # | Tema | Archivo | Función que debes crear |
|---|---|---|---|
| 01 | Acceso a un plato | `ejercicios/01-acceso-a-un-plato.js` | `describirPlato` |
| 02 | Carta numerada | `ejercicios/02-carta-numerada.js` | `cartaNumerada` |
| 03 | Solo disponibles | `ejercicios/03-solo-disponibles.js` | `soloDisponibles` |
| 04 | Platos por categoría | `ejercicios/04-platos-por-categoria.js` | `platosPorCategoria` |
| 05 | Agregar al pedido (`push`) | `ejercicios/05-agregar-al-pedido.js` | `agregarAlPedido` |
| 06 | Cancelar el último (`pop`) | `ejercicios/06-cancelar-ultimo.js` | `cancelarUltimo` |
| 07 | Calcular la cuenta con IVA | `ejercicios/07-calcular-cuenta.js` | `calcularCuenta` |
| 08 | Cerrar la mesa (integrador) | `ejercicios/08-cerrar-mesa.js` | `cerrarMesa` |

### ¿Dónde está el enunciado?

Al inicio de cada archivo, en los comentarios.
Ahí están las reglas, los ejemplos y una pista.

### ¿Y el prompt-sync del taller?

Aquí no se usa. Lo que el mesero escribiría por teclado llega como **parámetro** de la función.
Así los tests pueden probar tu código sin que nadie escriba nada.

---

## ⏰ Fecha límite

### Cuándo cierra

**Sábado 10 de octubre de 2026 a las 11:59 p. m.** (hora de Colombia).

### Qué pasa después

Después de esa hora puedes seguir haciendo `git push`, pero **tu nota ya no cambia**.
Si abres tu Pull Request por primera vez después del cierre, queda con la etiqueta **⏰ Fuera de plazo**.

---

## 🚀 Paso 1 · Crea tu copia del repo (Fork)

### ¿Qué es un Fork?

**Definición técnica:** un fork es una copia de un repositorio en tu propia cuenta de GitHub. Puedes modificarla sin afectar el original.

**En la vida real:** la profe tiene el cuaderno original y tú le sacas fotocopia. Escribes en tu fotocopia, no en el cuaderno de la profe.

### Cómo hacerlo

1. Entra al repositorio de la profe en GitHub.
2. Arriba a la derecha, haz clic en **Fork**.
3. Deja todo como está y haz clic en **Create fork**.

### Cómo saber que quedó bien

Arriba a la izquierda debe decir **TU-USUARIO / EjerciciosArraysCh15**.
Debajo aparece en letra pequeña: *forked from …*

---

## 💻 Paso 2 · Descarga tu copia al computador (Clone)

### Copia la dirección de TU fork

En **tu** fork (no en el de la profe), haz clic en el botón verde **Code** y copia la URL que termina en `.git`.

### Clona desde VS Code

Abre la terminal de VS Code (`Ctrl + ñ` o menú **Terminal → New Terminal**), ubícate en la carpeta donde guardas tus proyectos y escribe esto. Cambia la URL por la que copiaste:

```bash
git clone https://github.com/TU-USUARIO/EjerciciosArraysCh15.git
```

### Abre la carpeta del proyecto

Entra a la carpeta que se acaba de crear y ábrela en VS Code:

```bash
cd EjerciciosArraysCh15
code .
```

---

## ✍️ Paso 3 · Resuelve los ejercicios

### Dónde escribes tu código

Abre el archivo del ejercicio, por ejemplo `ejercicios/01-acceso-a-un-plato.js`.
Escribe tu solución **dentro** de la función, donde dice `// Tu código aquí`.

### Tres reglas de oro

- **No le cambies el nombre** a la función.
- **No borres** la última línea, la de `module.exports`: por ahí es por donde el test usa tu función.
- **Usa `return`**: el test revisa lo que tu función retorna, no lo que imprime con `console.log`.

### En el ejercicio 08

Las líneas con `require` ya vienen escritas: traen tus funciones de los ejercicios 03, 05 y 07.
No las borres. Si uno de esos ejercicios tiene un error, el 08 también falla.

### Ejemplo de cómo se ve un ejercicio resuelto

Este es un ejemplo **distinto** a los 8 ejercicios, solo para que veas la forma. Una función que recibe un arreglo de números y retorna cuántos hay:

```javascript
function contarNumeros(numeros) {
  return numeros.length;
}

module.exports = { contarNumeros };
```

---

## 🧪 Paso 4 · Prueba tu nota en tu computador

### Corre todos los tests

En la terminal de VS Code, dentro de la carpeta del proyecto, escribe:

```bash
npm test
```

No necesitas `npm install`: los tests usan herramientas que ya vienen con Node.js.

### Cómo leer el resultado

- ✅ el ejercicio pasó todos sus tests
- 🟡 pasó algunos tests
- ❌ no pasó ninguno
- Debajo de cada ✗ aparece **qué** esperaba el test

Al final ves tu **nota de 0.0 a 5.0**. Es la misma que te va a poner GitHub.

### Corre un solo ejercicio

Si quieres revisar solo uno, agrega su número. Por ejemplo, para el 03:

```bash
npm test -- 03
```

---

## ☁️ Paso 5 · Sube tu código a tu fork

### Los 3 comandos de siempre

Cada vez que quieras guardar tu avance en GitHub, corre estos 3 comandos en orden:

```bash
git add .
git commit -m "Resuelvo ejercicios 01 al 03"
git push
```

### ¿Qué hace cada uno?

- `git add .` → prepara todos tus cambios (como meter las cosas en una caja).
- `git commit -m "..."` → cierra la caja y le pone una etiqueta con un mensaje.
- `git push` → envía la caja a tu fork en GitHub.

---

## 📬 Paso 6 · Entrega: abre tu Pull Request (solo UNA vez)

### ¿Qué es un Pull Request?

**Definición técnica:** un Pull Request (PR) es una solicitud para proponer tus cambios al repositorio original. Ahí se revisan y se comentan.

**En la vida real:** es como radicar un documento en una oficina. Lo entregas una vez, queda con número de radicado, y cualquier corrección se agrega a ese mismo trámite.

### Cómo abrirlo

1. Entra a **tu fork** en GitHub.
2. Haz clic en **Contribute** y luego en **Open pull request**.
3. En el título escribe tu **nombre y apellido completos**. Por ejemplo: `Laura Gómez Pérez`.
4. Haz clic en **Create pull request**.

### Muy importante

**Abre un solo PR.** Cuando hagas `git push` otra vez, tu PR se actualiza solo y se vuelve a calificar.
No hace falta abrir uno nuevo.

---

## 🎯 Paso 7 · Mira tu nota en GitHub

### Dónde aparece

Espera 1 o 2 minutos después de cada `git push` y entra a tu Pull Request:

- Aparece un **comentario automático** con tu nota y una tabla por ejercicio.
- A la derecha verás una etiqueta, por ejemplo **Nota 4.2**.
- El enlace **Ver qué falta por corregir** te muestra qué tests fallaron.

### ¿Quieres subir la nota?

Corrige en VS Code, revisa con `npm test` y haz de nuevo el **Paso 5**.
El comentario y la etiqueta se actualizan solos.

### Ojo con la fecha límite

Después del **sábado 10 de octubre a las 11:59 p. m.**, los `git push` ya no cambian tu nota.
Si tu primera entrega llega tarde, el PR queda con **⏰ Fuera de plazo**.

---

## 🚫 Archivos que NO debes modificar

### La lista

- La carpeta `tests/`
- La carpeta `scripts/`
- La carpeta `.github/`
- El archivo `package.json`

### ¿Qué pasa si los modificas?

Tu PR queda marcado con la etiqueta **⚠️ Revisar** y la profe lo revisa a mano.
Además, GitHub siempre califica con los tests originales, así que modificarlos no cambia tu nota.

---

## 🆘 Errores frecuentes

### "npm no se reconoce como un comando"

No tienes Node.js instalado, o VS Code se abrió antes de instalarlo.
Instálalo desde [nodejs.org](https://nodejs.org) (versión LTS) y reinicia VS Code.

### "No encuentro tu función"

Sale cuando le cambiaste el nombre a la función o borraste la línea `module.exports`.
Compara tu archivo con el enunciado.

### "Se intentó leer … de algo que vale undefined"

Pasa por una de dos razones:

- Tu función no tiene `return` (o usaste `console.log`, que muestra pero **no retorna**).
- Le pediste una propiedad, como `.nombre`, a una posición que no existe. Valida primero con `=== undefined`.

### "Tiempo agotado: revisa si tienes un ciclo infinito"

Tu ciclo `for` nunca termina.
Revisa que la condición en algún momento se vuelva `false` (por ejemplo, `i < menu.length`).

### "Tu código debería usar…"

Es un test de estructura: el enunciado pide `push`, `pop` o llamar a tus funciones, y tu código no lo hace.
Lee otra vez el enunciado del ejercicio.

### "Hay un error de sintaxis (SyntaxError) en…"

El mensaje dice **en qué archivo** está el error: un paréntesis, una llave o una comilla sin cerrar.
Ojo: un error en el 03, el 05 o el 07 también hace fallar el 08, porque el 08 los usa.

### "Please tell me who you are" al hacer commit

Git no sabe quién eres. Configúralo una sola vez con tu nombre y el correo de tu cuenta de GitHub:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@ejemplo.com"
```

### "Permission denied" o error 403 al hacer push

Clonaste el repo de la profe en vez de tu fork.
Vuelve al **Paso 2** y clona la URL de **tu** fork.

---

<sub>© 2026 Ana Alvarado · Educadora Tech & Desarrolladora Full Stack · Todos los derechos reservados · linkedin.com/in/ana-alvarado-instructora-full-stack</sub>
