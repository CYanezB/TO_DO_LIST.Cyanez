## TODOSES

- A cada tarea le ponemos un IDENTIFICADOR
- Maquetación y estilos
- A partir de un array con tareas creadas, ver cómo las pinto
- Cómo inserto una nueva
- Cómo se borra
  - Borro el elemento del array buscándolo por su ID
  - pinto las tareas con el método de pintar
  - actualizo el array en LocalStorage
- Filtro por prioridad
- Filtro por palabra

- LocalStorage

```html
<section>
    <article>
        <h2>Sacar a pasear al perrito</h2>
        <p>URGENTE</p>
        <button data-tareaid="349">Borrar</button>
    </article>
    <article>
        <h2>Estudiar Promesas JS</h2>
        <p>URGENTÍSIMO</p>
        <button data-tareaid="9">Borrar</button>
    </article>
</section>
```

```javascript
// En la creación de la tarea
// DENTRO DEL BUCLE
const button = document.createElement("button");
button.innerText = "Borrar";
button.dataset.tareaid = tarea.id;

button.addEventListener("click", (event) => {
  // Todas las sentencias de borrado de la tarea
  event.target.dataset.tareaid;
  // Con este ID,
  //  - Lo busco en el array y lo borro
  //  - Vuelvo a pintar el array
  //  - Guardo el array de nuevo en LocalStorage
});
```
