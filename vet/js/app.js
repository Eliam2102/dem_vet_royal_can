document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        // Obtener los valores del formulario
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Validar las credenciales
        if (username === 'admin' && password === 'admin') {
            // Redirigir al usuario a index.html
            window.location.assign('index.html');
        } else {
            // Mostrar un mensaje de error
            alert('Credenciales inválidas. Por favor, inténtelo de nuevo.');
        }
    });
});
//Formulario para el proceso del registro de cliente
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formRegCliente').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores del formulario
        var nombreCliente = document.getElementById('nombre').value;
        var telefono = document.getElementById('telefono').value;
        var email = document.getElementById('email').value;
        var direccion = document.getElementById('direccion').value;
        var nombreMascota = document.getElementById('nombreMascota').value;
        var tipoMascota = document.getElementById('tipoMascota').value;
        var raza = document.getElementById('raza').value;
        var edad = document.getElementById('edad').value;
        var sexo = document.querySelector('input[name="sexo"]:checked').value;
        var peso = document.getElementById('peso').value;
        var servicio = document.querySelector('input[name="servicio"]:checked').value;

        // Crear una nueva fila en la tabla
        var tablaClientes = document.getElementById('tablaClientes');
        var nuevaFila = tablaClientes.insertRow(-1);
        var celdaNombre = nuevaFila.insertCell(0);
        var celdaTelefono = nuevaFila.insertCell(1);
        var celdaEmail = nuevaFila.insertCell(2);
        var celdaDireccion = nuevaFila.insertCell(3);
        var celdaNombreMascota = nuevaFila.insertCell(4);
        var celdaTipoMascota = nuevaFila.insertCell(5);
        var celdaRaza = nuevaFila.insertCell(6);
        var celdaEdad = nuevaFila.insertCell(7);
        var celdaSexo = nuevaFila.insertCell(8);
        var celdaPeso = nuevaFila.insertCell(9);
        var celdaServicio = nuevaFila.insertCell(10);

        // Asignar los valores a las celdas de la nueva fila
        celdaNombre.textContent = nombreCliente;
        celdaTelefono.textContent = telefono;
        celdaEmail.textContent = email;
        celdaDireccion.textContent = direccion;
        celdaNombreMascota.textContent = nombreMascota;
        celdaTipoMascota.textContent = tipoMascota;
        celdaRaza.textContent = raza;
        celdaEdad.textContent = edad;
        celdaSexo.textContent = sexo;
        celdaPeso.textContent = peso;
        celdaServicio.textContent = servicio;

        // Limpiar el formulario
        document.getElementById('formRegCliente').reset();
    });
});
