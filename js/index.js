const textArea = document.getElementById('write-textbox');
const mensaje = document.getElementById('copy-textbox');
const mensajeClass = document.querySelector('.aside__textbox')

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function esTextoEncriptado(texto) {
    const patronesEncriptados = ["enter", "imes", "ai", "ober", "ufat"];
    return patronesEncriptados.some(patron => texto.includes(patron));
}
function encriptar(stringEncriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase(); // Elimina la segunda declaración
    // Recorro el stringEncriptado
    for(let i = 0; i < matriz.length; i++) {
        // Compruebo si dentro del string a encriptar están las llaves de la matriz
        if(stringEncriptar.includes(matriz[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return stringEncriptar;
}
function desencriptar(stringDesencriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase(); // Elimina la segunda declaración
    // Recorro el stringEncriptado
    for(let i = 0; i < matriz.length; i++) {
        // Compruebo si dentro del string a encriptar están las llaves de la matriz
        if(stringDesencriptar.includes(matriz[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    
    return stringDesencriptar;
}

function btEncriptar() {
    const texto_encriptado = encriptar(textArea.value);
    //pregunto si el textarea no esta vacio
    if(textArea.value != ''){
        mensaje.value = texto_encriptado;
        textArea.value = '';
        mensajeClass.style.backgroundImage="none";
        mensajeClass.style.backgroundColor = "rgba(50, 36, 157, 0.7)";
    }
    //si esta vacio
    else{
        mensaje.placeholder="No hay texto para encriptar";
    }

}
function btDesencriptar() {
    const texto = textArea.value;
    if (texto !== '') {
        if (esTextoEncriptado(texto)) {
            const texto_desencriptado = desencriptar(texto);
            mensaje.value = texto_desencriptado;
            textArea.value = '';
            mensajeClass.style.backgroundImage = "none";
            mensajeClass.style.backgroundColor = "rgba(50, 36, 157, 0.7)";
        } else {
            mensaje.value = ''; // Limpiar el valor del mensaje
            mensaje.placeholder = 'El texto no está en un formato encriptado válido';
        }
    } else {
        mensaje.value = ''; // Limpiar el valor del mensaje
        mensaje.placeholder = "No hay texto para desencriptar";
    }
}
function btCopiar() {
    if (mensaje.value !== '') {
        mensaje.select();
        mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

        try {
            document.execCommand('copy');
            //alert('Texto copiado al portapapeles');
        } catch (err) {
            mensaje.placeholder = 'Error al copiar el texto';
        }
    } else {
        mensaje.placeholder = 'No hay texto para copiar';
    }
}