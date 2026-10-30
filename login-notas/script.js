document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('mensajeError');

    // Simulación de verificación (Aquí luego conectarías con tu base de datos SQL/PHP)
    if (user === "admin" && pass === "1234") {
        errorMsg.style.color = "#22c55e";
        errorMsg.textContent = "¡Acceso concedido! Redirigiendo...";
        
        setTimeout(() => {
            // Redirige a una página de notas (puedes crearla después)
            alert("Bienvenido al sistema de notas");
        }, 1000);
    } else {
        errorMsg.style.color = "#ef4444";
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});