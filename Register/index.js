
    var canvas = document.getElementById('signature-pad');
    var signaturePad = new SignaturePad(canvas);

    // Botón para limpiar el canvas
    document.getElementById('clear').addEventListener('click', function () {
        signaturePad.clear();
    });

    // Al enviar el formulario, guardamos la firma en un input oculto
    document.querySelector('form').addEventListener('submit', function (e) {
        if (signaturePad.isEmpty()) {
            alert("Por favor, firma antes de enviar.");
            e.preventDefault();  // Evitar que el formulario se envíe sin firma
        } else {
            var firmaData = signaturePad.toDataURL('image/png');  // Convertir la firma a base64
            document.getElementById('firmaInput').value = firmaData;  // Guardar en el input oculto
        }
    });

