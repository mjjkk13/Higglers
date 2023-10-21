document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aquí podrías realizar el procesamiento de la información del pago, enviarla al servidor, etc.
    // Por simplicidad, este ejemplo solo muestra un mensaje de éxito.
    
    alert("Pago exitoso. ¡Gracias por tu compra!");
});