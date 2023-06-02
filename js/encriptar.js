mensaje = document.getElementById("mensaje");
mensajeFinal = document.getElementById("textoSalida");

btnEncriptar = document.getElementById("btnEncriptar");
btnDesencriptar = document.getElementById("btnDesencriptar");
btnCopiar = document.getElementById("btnCopiar");

img = document.getElementById("imgMuneco");
encabezado = document.getElementsByClassName("encabezado-salida")[0];

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const remplazar = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

const txtSalida = mensajeFinal.innerText;

/* Validar la cadena ingresado */
function validarTexto(msj) {
    const regex = /^[a-z\s]*$/

    if (!regex.test(msj)) {
        alerta();
        return false;
    }
    return true;
}

/* Función del botón encriptar */ 
btnEncriptar.addEventListener("click",  function() {
    const msj = mensaje.value;

    if (!validarTexto(msj)) {
        return;
    }

    function encriptar(newText){
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
            }
        };
        return newText;
    }

    const msjEncriptado = encriptar(msj);

    validarTextoVacio(msjEncriptado);
});

/* Función del botón desencriptar */ 
btnDesencriptar.addEventListener("click",  function() {
    const msj = mensaje.value;
    
    if (!validarTexto(msj)) {
        return;
    }

    function desencriptar(newText){
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
            }
        };
        return newText;
    }

    const msjEncriptado = desencriptar(msj);

    validarTextoVacio(msjEncriptado);
});

/* Función del botón copiar */ 
btnCopiar.addEventListener("click", function() {
    let textoCopiado = mensajeFinal.innerText;
    navigator.clipboard.writeText(textoCopiado);
});

/* Validar si la cadena esta vacio */ 
function validarTextoVacio(msjEncriptado) {
    if (msjEncriptado.trim() === "") {
        mensajeFinal.innerHTML = txtSalida;
        encabezado.classList.remove("hidden");
        img.classList.remove("hidden");
        btnCopiar.classList.add("hidden");
    } else {
        mensajeFinal.innerHTML = msjEncriptado;
        encabezado.classList.add("hidden");
        img.classList.add("hidden");
        btnCopiar.classList.remove("hidden");
    }
}

/* sweetalert */ 
function alerta() {
    Swal.fire({
        title: '¡Error!',
        text: 'Solo permite letras minúsculas y sin acentos',
        icon: 'warning',
        confirmButtonText: 'Cancelar'
    })
}