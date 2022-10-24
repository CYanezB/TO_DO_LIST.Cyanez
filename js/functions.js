const inputTarea = document.getElementById('inputTarea')
const selectPrioridad = document.getElementById('selectPrioridad')
const form = document.querySelector('header');
const tareas = document.getElementById('tareas');
// const filtroPrioridad = document.getElementById('selectPrioridad');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTarea = {
        tarea: inputTarea.value,
        prioridad: selectPrioridad.value,
    }

    arrTareas.push(newTarea);

    pintarTareas(newTarea)
});

function load() {
    arrTareas = JSON.parse(localStorage.getItem('arrayTareas')) || []
    arrTareas.forEach((tarea) => {
        pintarTareas(tarea)
    })
}

function pintarTareas(tarea) {

    // Recorrer los clientes y pintarlos

    const article = document.createElement('article');

    const h2Nombre = document.createElement('h2');
    h2Nombre.innerText = `${tarea.tarea}`;

    article.className += tarea.prioridad + ' d-flex'
    const btnBorrar = document.createElement('button')
    btnBorrar.innerText = 'Borrar';
    btnBorrar.className = 'btnBorrar';
    btnBorrar.addEventListener('click', (event) => {

        event.target.parentNode.remove();

        arrTareas = arrTareas.filter((t) => {
            return t.tarea !== tarea.tarea;
        });

        localStorage.setItem('arrayTareas', JSON.stringify(arrTareas))
    });
    localStorage.setItem('arrayTareas', JSON.stringify(arrTareas))

    article.append(h2Nombre, btnBorrar);

    tareas.append(article);
}

function filtrarPorPrioridad() {
    const filtroPrioridad = document.getElementById('filterPrioridad');
    tareas.innerHTML = ''
    arrTareas.forEach((tarea) => {
        if (tarea.prioridad === filtroPrioridad.value) {
            pintarTareas(tarea)
        }
    })
}

function filtrarPorTexto() {
    const filtroTexto = document.getElementById('filterText');
    tareas.innerHTML = ''
    arrTareas.forEach((tarea) => {
        if (tarea.tarea.includes(filtroTexto.value)) {
            pintarTareas(tarea)
        }
    })

}