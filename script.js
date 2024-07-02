//tomamos los elementos
const inputTarea = document.getElementById("tarea");
const btn = document.getElementById("agregar");
const listado = document.getElementById("listado");
const cantidad = document.getElementById("cantidad");

//variable que lleva la cantidad de tareas
let total = 0;

btn.onclick = function() {
    //controlamos si el campo esta vacio
    if (inputTarea.value == "") {
        return;
    }
    //tomamos el valor del campo
    const elemento = inputTarea.value;
    //creo un elemento li
    const li = document.createElement("li");
    //le agrego el texto al elemento
    li.textContent = elemento;
    //egrego el li al listado
    listado.appendChild(li);
    //incremento la cantidad de tareas
    total++;
    cantidad.innerHTML = total;


    //Agregamos el boton eliminar a cada elemento del listado
    const btnEliminar = document.createElement("span");
    btnEliminar.textContent = "\u00d7";
    li.appendChild(btnEliminar);


    //Agregamos la funcionalidad que elimina del listado el elemento
    btnEliminar.onclick = function() {
        li.remove();
        total--;
        cantidad.innerHTML = total;
    }

    //limpiamos el campo
    inputTarea.value = "";

}


