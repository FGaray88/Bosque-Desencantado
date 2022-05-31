import {arma, inventario, imagen1, nombre, armaElegida, item, creditos, credits} from "./index.js"
import {capituloPrimero,muerte1, muerte2, avanzar1, muerte3, muerte4, abrirCofre, agregarInv1, llaves, salirCab, salirCab2, avanzar2, avanzar3, niebla, capituloSegundo, capituloTercero, seleccionarArma, agregarInv2, agregarInv3} from "./parteUno.js"
//import {osoLarreta,batalla,acertar,errar,escapar,garra} from "./enemyOso.js"
import {chapulin, chapulin2, chapulin3, chapulin4, chapulinA, chapulinB, chapulin4Avanzar, chapulin4Avanzar2, chapulin4Muerte, chapulin4Muerte2, chapulin4Muerte3} from "./enemyChapulin.js"
import {musico, musico2, musico3, escucharMusica, agregarMapa, evitarMusica} from "./enemyMusico.js"
import {capituloCuatro, capituloCuatro2, capituloCuatro3, capituloCuatro4, c4ConMapa, c4SinMapa, capituloCinco, capituloCinco2, capituloCinco3, capituloSeis, final, accionesFinales} from "./parteFinal.js"

function hablar(texto1){
    let voz = new SpeechSynthesisUtterance();
    speechSynthesis.cancel(voz)
    voz.text = texto1;
    voz.lang = "es-AR"
    voz.pitch = 2
    activarVoz(voz)
}

function activarVoz(a){    
    speechSynthesis.speak(a)
}


function nombreUsuario(){
    imagen1.setAttribute('src', "./images/bosquenoche.jpg")
    texto.innerHTML = "Ingresá tu nombre para comenzar"
    hablar(texto.innerHTML)
    botones.innerHTML = `<input type="text" id="nombre">
                        <button id="btnTrue">Aceptar</button>`
    btnTrue.onclick = () => nombreUser()
}

function nombreUser(){
    let nombreUsuario = document.querySelector("#nombre")
    localStorage.setItem("nombre", nombreUsuario.value)
    let User = nombreUsuario.value
    let validacionUser = User || "falsy" // Operador OR
    validacionUser==="falsy" ? Swal.fire('Debes ingresar un nombre') : comienzo() // Operador ternario
}

function error(){
    texto.innerHTML = "Debes ingresar un nombre para comenzar el juego"
    hablar(texto.innerHTML)
    botones.innerHTML = `<input type="text" id="nombre">
                        <button id="btnTrue">Aceptar</button>`
    btnTrue.onclick = () => nombreUser()
}

function comienzo (){
    imagen1.setAttribute('src', "./images/bosquenoche.jpg")
    texto.innerHTML = "CAPITULO 1 - Has despertado en medio de un bosque desconocido, en algún lugar de la Argentina, es de noche y es invierno, no tienes nada mas que lo que llevas puesto. ¿Podrás escapar por tus propios métodos?" 
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnJugar" >Ser valiente y probar el juego</button>
                        <button id="btnSalir" >Apichonarse y pedir rescate</button>`
    btnJugar.onclick = () => capituloPrimero(true)
    btnSalir.onclick = () => capituloPrimero(false)
}




export {hablar,nombreUsuario,nombreUser,error,comienzo}