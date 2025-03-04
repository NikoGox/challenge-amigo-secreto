// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Obtener el campo de texto
    const nombreAmigo = inputAmigo.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta si el campo está vacío
        return; // Detener la ejecución si no hay nombre válido
    }

    const listaAmigos = document.getElementById('listaAmigos'); // Obtener la lista de amigos
    const nuevoAmigo = document.createElement('li'); // Crear un nuevo elemento de lista
    nuevoAmigo.textContent = nombreAmigo; // Asignar el nombre al nuevo elemento
    listaAmigos.appendChild(nuevoAmigo); // Agregar el nuevo elemento a la lista

    inputAmigo.value = ""; // Limpiar el campo de texto
    inputAmigo.focus(); // Enfocar el campo de texto para facilitar la entrada del siguiente nombre
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').getElementsByTagName('li'); // Obtener la lista de amigos
    const totalAmigos = listaAmigos.length; // Obtener la cantidad de amigos en la lista

    // Validar si hay amigos en la lista
    if (totalAmigos === 0) {
        alert("No hay nombres en la lista para sortear.");
        return; // Detener la ejecución si no hay amigos
    }

    const indiceAleatorio = Math.floor(Math.random() * totalAmigos); // Generar un índice aleatorio
    const amigoSecreto = listaAmigos[indiceAleatorio].textContent; // Obtener el nombre del amigo seleccionado

    const resultado = document.getElementById('resultado'); // Obtener el contenedor de resultados
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`; // Mostrar el resultado
}

// Eventos para los botones (opcional, ya que usas onclick en el HTML)
document.addEventListener('DOMContentLoaded', function () {
    // Agregar evento al botón "Añadir"
    document.querySelector('.button-add').addEventListener('click', agregarAmigo);

    // Agregar evento al botón "Sortear amigo"
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});
