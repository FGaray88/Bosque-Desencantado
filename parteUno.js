import {arma, inventario, imagen1, nombre, armaElegida, item, creditos, credits} from "./index.js"
import {hablar,nombreUsuario, nombreUser, error, comienzo} from "./init.js"
//import {osoLarreta,batalla,acertar,errar,escapar,garra} from "./enemyOso.js"
import {chapulin, chapulin2, chapulin3, chapulin4, chapulinA, chapulinB, chapulin4Avanzar, chapulin4Avanzar2, chapulin4Muerte, chapulin4Muerte2, chapulin4Muerte3} from "./enemyChapulin.js"
import {musico, musico2, musico3, escucharMusica, agregarMapa, evitarMusica} from "./enemyMusico.js"
import {capituloCuatro, capituloCuatro2, capituloCuatro3, capituloCuatro4, c4ConMapa, c4SinMapa, capituloCinco, capituloCinco2, capituloCinco3, capituloSeis, final, accionesFinales} from "./parteFinal.js"


function capituloPrimero (t){
    if(t){
        imagen1.setAttribute('src', "./images/bosquenoche.jpg")
        texto.innerHTML = "Tu valentía es asombrosa, deberás moverte en distintas direcciones hasta encontrar la salida del bosque. Adelante, da el primer paso. Hacia donde deseas moverte?"
        hablar(texto.innerHTML)
        botones.innerHTML = `
                    <button id="btnOp1">Derecha</button>
                    <button id="btnOp2">Izquierda</button>
                    <button id="btnOp3">Adelante</button>
                    <button id="btnOp4">Atras</button>`
        btnOp1.onclick = () => muerte1()
        btnOp2.onclick = () => muerte2()
        btnOp3.onclick = () => avanzar1()
        btnOp4.onclick = () => avanzar2()
    }else {
//        imagen1.setAttribute('src', "./images/chapulinchile.jpg")
        texto.innerHTML = "Un superheroe ha venido a tu rescate, por desgracia era el chapulín colorado y no ha sido de mucha ayuda. Ambos mueren congelados"
        hablar(texto.innerHTML)
        botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
        btnReiniciar.onclick = () => comienzo()
    }    // Aca no utilicé operador ternario por que me haría el código mas largo en lugar de minificar
}

function muerte1 (){
    texto.innerHTML = "Avanzas en completa oscuridad con la mala suerte de que caes en un pozo, que luego comienza a derrumbarse, y mueres al caerte una roca en la cabeza"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
}

function muerte2 (){
    texto.innerHTML = "Caminas unos metros y te encuentras con 'Slenderman', quien sin dudarlo un segundo, te devora de un bocado"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    accionesFinales()
    btnReiniciar.onclick = () => comienzo()
}

function avanzar1 (){
    imagen1.setAttribute('src', "./images/cabaña.jpg")
    texto.innerHTML = "Te encuentras una cabaña abandonada, luego de requisarla, encuentras algo de comida y unas llaves"
    hablar(texto.innerHTML)
    botones.innerHTML = `
                        <button id="btnComer">Comer</button>
                        <button id="btnLlaves">Inspeccionar llaves</button>
                        <button id="btnSalCab">Salir de la cabaña</button>`
    btnComer.onclick = () => muerte3()
    btnLlaves.onclick = () => llaves()
    btnSalCab.onclick = () => salirCab()
}

function muerte3 (){
    texto.innerHTML = "Has ingerido la comida sin notar que estaba envenenada, comienzas a perder la noción hasta que mueres"
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    hablar(texto.innerHTML)
    btnReiniciar.onclick = () => comienzo()
}

function llaves(){
    imagen1.setAttribute('src', "./images/interiorcabaña.jpg")
    texto.innerHTML = "luego de una mirada mas profunda descubres que la llave abre un cofre misterioso que está en la casa"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnAbr">Abrir el cofre</button>
                        <button id="btnHuir">Salir corriendo de la Cabaña</button>`
    btnAbr.onclick = () => abrirCofre()
    btnHuir.onclick = () => salirCab2()
}

function salirCab (){
    texto.innerHTML = "'FEAR BUILDS WALLS' | tu propio miedo te impide salir de la cabaña"
    hablar("tu propio miedo te impide salir de la cabaña")
    botones.innerHTML = `<button id="btnVolver">Volver atras</button>`
    btnVolver.onclick = () => avanzar1()
}

function salirCab2 (){
    texto.innerHTML = "FEAR BUILDS WALLS | tu propio miedo te impide salir de la cabaña"
    hablar("tu propio miedo te impide salir de la cabaña")
    botones.innerHTML = `<button id="btnVolver">Volver atras</button>`
    btnVolver.onclick = () => llaves()
}

function abrirCofre (){
    texto.innerHTML = "Al insertar la llave en la cerradura del cofre notas ruidos de pasos por detrás de ti, te volteas y lo último que ves, es a un hombre partirte un palo en la chirimoya"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnContinuar">Continuar al capitulo 2</button>`
    btnContinuar.onclick = () => capituloSegundo()
}

function avanzar2(){
    imagen1.setAttribute('src', "./images/bosqueniebla.jpg")
    texto.innerHTML = "Te has topado con una espesa niebla, el camino parece volverse cada vez mas sinuoso"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnVolv">Volver</button>
                        <button id="btnAden">Adentrarse en la niebla</button>
                        <button id="btnOtro">Buscar otro camino</button>`
    btnVolv.onclick = () => capituloPrimero(true)
    btnAden.onclick = () => niebla()
    btnOtro.onclick = () => {texto.innerHTML = "Encuentras un camino que te conduce al lugar donde estabas al comienzo", botones.innerHTML = `<button id="btnCon">Continuar</button>`, hablar(texto.innerHTML), btnCon.onclick = () => capituloPrimero(true)} 
}

function niebla (){
    imagen1.setAttribute('src', "./images/autoAbandonado.jpg")
    texto.innerHTML = "Has cruzado al otro lado de la niebla y te encuentras un vehículo con un neumático desinflado"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnNeum">Cambiar neumático del vehículo</button>
                        <button id="btnVeh">Entrar en el vehículo</button>
                        <button id="btnSeguir">Seguir avanzando a pié</button>`
    btnNeum.onclick = () => muerte4()
    btnVeh.onclick = () => avanzar3()
    btnSeguir.onclick = () => {texto.innerHTML = "Encuentras un camino que te conduce al lugar donde estabas al comienzo", botones.innerHTML = `<button id="btnCon">Continuar</button>`, hablar(texto.innerHTML), btnCon.onclick = () => capituloPrimero(true)} 
}

function muerte4 (){
    texto.innerHTML = "Desmontas el neumático desinflado y te das cuenta de que no tienes repuesto ni forma de repararlo, una figura oscura se aparece por detrás de ti y roba tu alma"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
}

function avanzar3(){
    texto.innerHTML = "Has tenido suerte, el vehículo tenía las llaves puestas y funciona normalmente, conduces hasta una cabaña y al bajarte del auto un hombre se acerca rápidamente por detrás y te pega con un palo en la cabeza"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnContinuar">Continuar al capítulo 2</button>`
    btnContinuar.onclick = () => capituloSegundo()
}

function capituloSegundo(){
    //imagen1.setAttribute('src', "./images/hombre.jpg")
    texto.innerHTML = "CAPITULO 2 - ..Luego de unos minutos abres los ojos. Estas sentado y atado a una silla, y el hombre que te atacó esta de pie delante de ti. Te mira fijamente a los ojos.."
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnAccept">Continuar</button>`
    btnAccept.onclick = () => seleccionarArma()
}

function seleccionarArma() {
    let Usuario = localStorage.getItem("nombre")
    texto.innerHTML = "Hola "+Usuario+". Estas aquí, atrapado en tus propios pensamientos y no podrás salir solo, por eso decidí ayudarte, como estabas muy nervioso tuve que golpearte y atarte a esta silla, pero ahora que te has tranquilizado te liberaré y te daré mi ayuda. Te regalaré una de mis ármas que podrán serte de utilidad en el futuro, pero solo puedes elegir una"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCu">Elegir Cuchillo</button>
                        <button id="btnPalo">Elegir Palo</button>
                        <button id="btnRev">Elegir Revolver</button>`
    btnCu.onclick = () => agregarInv1()
    btnPalo.onclick = () => agregarInv2()
    btnRev.onclick = () => agregarInv3()
}

function agregarInv1(){
    inventario.push(new arma ("Cuchillo", "50"))
    texto.innerHTML = "Ahora tienes un "+inventario[0].tipo+" en tu inventario"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnContinue">Continuar</button>`
    btnContinue.onclick = () => capituloTercero()
}

function agregarInv2(){
    inventario.push(new arma ("Palo", "30"))
    texto.innerHTML = "Ahora tienes un "+inventario[0].tipo+" en tu inventario"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnContinue">Continuar</button>`
    btnContinue.onclick = () => capituloTercero()
}

function agregarInv3(){
    inventario.push(new arma ("Revolver", "100"))
    texto.innerHTML = "Ahora tienes un "+inventario[0].tipo+" en tu inventario"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnContinue">Continuar</button>`
    btnContinue.onclick = () => capituloTercero()
}

function capituloTercero(){
    imagen1.setAttribute('src', "./images/cabaña2.jpg")
    texto.innerHTML = "CAPITULO 3 - Ya estás fuera de la cabaña, otra vez con el bosque como destino, pero esta vez estás del otro lado y tienes tres posibles caminos, cual eliges?"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnDer">Camino de la derecha</button>
                        <button id="btnIzq">Camino de la izquierda</button>
                        <button id="btnRec">Camino siguiendo recto</button>`
    btnDer.onclick = () => osoLarreta()
    btnIzq.onclick = () => chapulin()
    btnRec.onclick = () => musico()
}

export {capituloPrimero,muerte1, muerte2, avanzar1, muerte3, muerte4, abrirCofre, agregarInv1, llaves, salirCab, salirCab2, avanzar2, avanzar3, niebla, capituloSegundo, capituloTercero, seleccionarArma, agregarInv2, agregarInv3}