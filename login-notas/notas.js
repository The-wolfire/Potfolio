// Verificar si el usuario está logueado, si no, lo patea al login
if (!sessionStorage.getItem('usuarioLogueado')) {
    window.location.href = "index.html";
}

const contenedor = document.getElementById('contenedorNotas');
const btnNueva = document.getElementById('btnNuevaNota');
const btnSalir = document.getElementById('btnCerrarSesion');

// Cargar notas al iniciar
let notas = JSON.parse(localStorage.getItem('misNotas')) || [];

function renderizarNotas() {
    contenedor.innerHTML = '';
    
    if (notas.length === 0) {
        contenedor.innerHTML = '<p style="color: #94a3b8; text-align: center; width: 100%;">No tienes notas. ¡Crea una nueva!</p>';
        return;
    }

    notas.forEach((nota, index) => {
        const div = document.createElement('div');
        div.className = 'nota-card';
        div.innerHTML = `
            <textarea onblur="guardarEdicion(${index}, this.value)" placeholder="Escribe aquí...">${nota.texto}</textarea>
            <button class="btn-borrar" onclick="borrarNota(${index})"><i class="fas fa-trash"></i></button>
        `;
        contenedor.appendChild(div);
    });
}

// Función para crear nota
btnNueva.addEventListener('click', () => {
    notas.unshift({ texto: "" }); // Agrega al principio
    guardarEnMemoria();
    renderizarNotas();
});

// Función para guardar cuando dejas de escribir
window.guardarEdicion = function(index, nuevoTexto) {
    notas[index].texto = nuevoTexto;
    guardarEnMemoria();
};

// Función para borrar
window.borrarNota = function(index) {
    if(confirm("¿Seguro que quieres borrar esta nota?")) {
        notas.splice(index, 1);
        guardarEnMemoria();
        renderizarNotas();
    }
};

function guardarEnMemoria() {
    localStorage.setItem('misNotas', JSON.stringify(notas));
}

// Cerrar sesión
btnSalir.addEventListener('click', () => {
    sessionStorage.removeItem('usuarioLogueado');
    window.location.href = "index.html";
});

// Iniciar
renderizarNotas();