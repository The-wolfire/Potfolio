document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('mensajeError');

    // Verificación simulada
    if (user === "admin" && pass === "1234") {
        errorMsg.style.color = "#22c55e"; // Verde
        errorMsg.textContent = "¡Acceso concedido! Redirigiendo...";
        
        // Guardamos que el usuario está logueado
        sessionStorage.setItem('usuarioLogueado', user);

        // ¡Aquí está la magia! Redirigimos a la nueva página después de 1 segundo
        setTimeout(() => {
            window.location.href = "notas.html";
        }, 1000);
    } else {
        errorMsg.style.color = "#ef4444"; // Rojo
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});