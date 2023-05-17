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

console.log(txtSalida);

btnEncriptar.addEventListener("click",  function() {
    const msj = mensaje.value.toLowerCase();

    function encriptar(newText){
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
            }
        };
        return newText;
    }

    const msjEncriptado = encriptar(msj);

    
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

    console.log(msjEncriptado);
});

btnDesencriptar.addEventListener("click",  function() {
    const msj = mensaje.value.toLowerCase();

    function desencriptar(newText){
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
            }
        };
        return newText;
    }

    const msjEncriptado = desencriptar(msj);

    
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

    console.log(msjEncriptado);
});

btnCopiar.addEventListener("click", function() {
    let textoCopiado = mensajeFinal.innerText;
    // console.log(textoCopiado);
    navigator.clipboard.writeText(textoCopiado);
});