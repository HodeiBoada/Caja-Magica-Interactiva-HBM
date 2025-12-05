`use strict`;

function cambiarTexto(){
    let opciones = ["¡Hola!","¿Cómo estás?","Aprendiendo DOM","DOM Aprendido", "¡Adiós!"]
    let btnTexto = document.getElementById("btnTexto");
    let miCaja = document.getElementById("miCaja");
    let i = 0;
    btnTexto.addEventListener("click", ()=>{
        miCaja.textContent = opciones[i];
        i = (i + 1) % opciones.length;
        
    })
}

export {cambiarTexto};


