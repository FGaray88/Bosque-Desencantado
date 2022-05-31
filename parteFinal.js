import {arma, inventario, imagen1, nombre, armaElegida, item, creditos, credits} from "./index.js"
import {hablar,nombreUsuario, nombreUser, error, comienzo} from "./init.js"
import {capituloPrimero,muerte1, muerte2, avanzar1, muerte3, muerte4, abrirCofre, agregarInv1, llaves, salirCab, salirCab2, avanzar2, avanzar3, niebla, capituloSegundo, capituloTercero, seleccionarArma, agregarInv2, agregarInv3} from "./parteUno.js"
//import {osoLarreta,batalla,acertar,errar,escapar,garra} from "./enemyOso.js"
import {chapulin, chapulin2, chapulin3, chapulin4, chapulinA, chapulinB, chapulin4Avanzar, chapulin4Avanzar2, chapulin4Muerte, chapulin4Muerte2, chapulin4Muerte3} from "./enemyChapulin.js"
import {musico, musico2, musico3, escucharMusica, agregarMapa, evitarMusica} from "./enemyMusico.js"

function capituloCuatro(){
    texto.innerHTML = "CAPITULO 4 - Sigues avanzando por el bosque y ves a lo lejos unas luces que parecieran indicar que la salida esta cerca, apuras el paso y cuando ya casi estas llegando, pisas una trampa para cazar animales y quedas colgando de un arbol, con una soga amarrada a tus pies"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCuatro2()
}

function capituloCuatro2(){
    armaElegida = inventario[0].tipo
    armaElegida=="Cuchillo" ? texto.innerHTML = "Intentas utilizar tu cuchillo para cortar la soga pero se te cae al piso" : texto.innerHTML = "Si tuvieras un cuchillo podrías cortar la soga"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCuatro3()
}

function capituloCuatro3(){
    texto.innerHTML = "En ese momento aparece el hombre que te ayudó en la cabaña, y te explica que esas nos luces no eran mas que una vision imaginaria y que de no haber caído en la trampa hubieras caído en el precipicio que estaba ahí delante, también te habla acerca de un extraño mapa que ha estado buscando durante muchos años, entiendes que el hombre vive tu misma situación. Perdido en el bosque intentando encontrar la salida"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCuatro4()
}

function capituloCuatro4(){
    let mapa = inventario[1].tipo
    mapa=="Mapa" ? c4ConMapa() : c4SinMapa()
    
}

function c4ConMapa(){
    texto.innerHTML = "Le muestras el mapa que te dió aquel músico misterioso y al interpretarlo entre los dos, consiguen al fin dar con el camino que conduce directo a la salida del bosque"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => final()
}

function c4SinMapa(){
    texto.innerHTML = "No tienes ni idea de que mapa esta hablando el paisano éste, sin embargo ambos coinciden en unir fuerzas y buscarlo juntos"
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente Capítulo</button>`
    btnCont.onclick = () => capituloCinco()
}

function capituloCinco(){
    texto.innerHTML = "Luego de caminar durante un par de horas en las que el hombre misterioso te ha explicado como interpretar ese mapa, se encuentran con un árbol que parece tener un escrito en su copa.."
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCinco2()
}

function capituloCinco2 (){
    texto.innerHTML = "El escrito indica: 'Camarón que se duerme, se lo lleva la chingada'. No entiendes que diablos significa esa frase, pero al pronunciarla en voz alta, el hombre que te acompañaba se desintegra como por arte de magia, reduciendose su cuerpo a cenizas, entre las cuales hay ahora una carta"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCinco3()
}

function capituloCinco3(){
    localStorage.setItem("Sobre", "Magico")
    texto.innerHTML = "La carta tiene un dibujo de una flecha recta apuntando a un arco íris"
    botones.innerHTML = `<button id="btnRecto">Caminar recto</button>
                        <button id="btnDerecha">Caminar a la derecha</button>
                        <button id="btnIzquierda">Caminar a la izquierda</button>`
    btnRecto.onclick = () => musico()
    btnDerecha.onclick = () => muerte2()
    btnIzquierda.onclick = () => {texto.innerHTML = "Encuentras un camino que te conduce a un tiempo-espacio ya visitado", botones.innerHTML = `<button id="btnCon">Continuar</button>`, hablar(texto.innerHTML), btnCon.onclick = () => capituloCuatro()} 
}

function capituloSeis(){
    texto.innerHTML = "Recuerdas las palabras de aquel paisano desintegrado acerca de como leer el mapa, y ahora que lo tienes descubres el camino hacia la salida del bosque"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => final()
}

function final(){
    texto.innerHTML = "Felicidades! Has escapado del bosque!"
    botones.innerHTML = `<button id="btnCont">Jugar de nuevo</button>`
    accionesFinales()
    btnCont.onclick = () => nombreUsuario()
}



function accionesFinales(){
    localStorage.clear()
    inventario.splice(inventario.lenght)
}

export {capituloCuatro, capituloCuatro2, capituloCuatro3, capituloCuatro4, c4ConMapa, c4SinMapa, capituloCinco, capituloCinco2, capituloCinco3, capituloSeis, final, accionesFinales}