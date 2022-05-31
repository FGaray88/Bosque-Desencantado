import {arma, inventario, imagen1, nombre, armaElegida, item, creditos, credits} from "./index.js"
import {hablar,nombreUsuario, nombreUser, error, comienzo} from "./init.js"
import {capituloPrimero,muerte1, muerte2, avanzar1, muerte3, muerte4, abrirCofre, agregarInv1, llaves, salirCab, salirCab2, avanzar2, avanzar3, niebla, capituloSegundo, capituloTercero, seleccionarArma, agregarInv2, agregarInv3} from "./parteUno.js"
//import {osoLarreta,batalla,acertar,errar,escapar,garra} from "./enemyOso.js"
import {chapulin, chapulin2, chapulin3, chapulin4, chapulinA, chapulinB, chapulin4Avanzar, chapulin4Avanzar2, chapulin4Muerte, chapulin4Muerte2, chapulin4Muerte3} from "./enemyChapulin.js"
import {capituloCuatro, capituloCuatro2, capituloCuatro3, capituloCuatro4, c4ConMapa, c4SinMapa, capituloCinco, capituloCinco2, capituloCinco3, capituloSeis, final, accionesFinales} from "./parteFinal.js"

function musico(){
    localStorage.setItem("imagen", "3")
    texto.innerHTML = "El camino recto te lleva directo a un monte en donde parece haber una persona sentada con una guitarra en sus manos"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => musico2()
}

function musico2 (){
    texto.innerHTML = "Al acercarte mas, ésta persona te cuenta sobre sus experiencias trabajando para un gorila pelado que comerciaba computadoras DELL, y luego se llevaba los dólares a Uruguay dejando a nuestro querido país en la mismísima miseria, pero que un día se cansó, mandando todo a la mierda, y dedicandose a hacer música para gente perdida en los bosques"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => musico3()
}

function musico3(){
    texto.innerHTML = "Luego de quejarse de sus problemas durante tres horas, ésta persona te mira y te pregunta si quieres escuchar una canción. Tu respuesta:"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnEscuchar">Sentarte en una piedra a escuchar las melodías</button>
                        <button id="btnEvitar">Pasarte su música y su historia por la parte mas céntrica del conducto rectal y decirle que deje el boludeo para otro día por que de momento te importa mas como salir del bosque</button>`
    btnEscuchar.onclick = () => escucharMusica()
    btnEvitar.onclick = () => evitarMusica()
}

function escucharMusica(){
    texto.innerHTML = "Repentinamente comienzan a escucharse unos aullidos, como de gato no castrado, y te preguntas que demonios es ese sonido tan extraño y horripilante. <br> Y si, era el nuevo hit compuesto por este músico misterioso, quien luego de interpretar su canción nauseabunda, te da un mapa del bosque, que resultará ser de gran ayuda"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    let item = localStorage.getItem("Sobre")
    item!="Magico"||item==null ?  btnCont.onclick = () => agregarMapa() : btnCont.onclick = () => capituloSeis()
}

function agregarMapa(){
    inventario.push(new arma ("Mapa", "100"))
    texto.innerHTML = "Ahora tienes un "+inventario[1].tipo+" en tu inventario"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capítulo</button>`
    btnCont.onclick = () => capituloCuatro()
}

function evitarMusica(){
    texto.innerHTML = "Ante tu indiferencia por su arte, el tipo se te enoja y te manda a los excrementos humanos al ritmo de 'Para el pueblo, lo que es del pueblo', de Piero, aun así se apiada de tu situacion y te da un mapa del bosque, que resultará ser de gran ayuda"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    let item = localStorage.getItem("Sobre")
    item!="Magico"||item==null ?  btnCont.onclick = () => agregarMapa() : btnCont.onclick = () => capituloSeis()
}

export {musico, musico2, musico3, escucharMusica, agregarMapa, evitarMusica}