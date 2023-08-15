const listaNotas = document.getElementById("listaNotas");
const nuevaNotaInput = document.getElementById("nuevaNota");
const botonAgregar = document.getElementById("botonAgregar");

botonAgregar.addEventListener("click", crearNota);

function crearNota() {
  const nuevaNotaTexto = nuevaNotaInput.value.trim();

  if (nuevaNotaTexto === "") {
    return;
  }

  const elementoTarea = document.createElement("li");
  const textoTarea = document.createElement("span");
  const botonEliminar = document.createElement("button");

  textoTarea.innerText = nuevaNotaTexto;
  botonEliminar.innerText = "Eliminar";

  elementoTarea.appendChild(textoTarea);
  elementoTarea.appendChild(botonEliminar);
  listaNotas.appendChild(elementoTarea);

  botonEliminar.addEventListener("click", function () {
    elementoTarea.remove();
  });

  nuevaNotaInput.value = "";
}
