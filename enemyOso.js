import {arma, inventario, imagen1, nombre, armaElegida, item, creditos, credits} from "./index.js"
import {hablar,nombreUsuario, nombreUser, error, comienzo} from "./init.js"
import {capituloPrimero,muerte1, muerte2, avanzar1, muerte3, muerte4, abrirCofre, agregarInv1, llaves, salirCab, salirCab2, avanzar2, avanzar3, niebla, capituloSegundo, capituloTercero, seleccionarArma, agregarInv2, agregarInv3} from "./parteUno.js"
import {chapulin, chapulin2, chapulin3, chapulin4, chapulinA, chapulinB, chapulin4Avanzar, chapulin4Avanzar2, chapulin4Muerte, chapulin4Muerte2, chapulin4Muerte3} from "./enemyChapulin.js"
import {musico, musico2, musico3, escucharMusica, agregarMapa, evitarMusica} from "./enemyMusico.js"
import {capituloCuatro, capituloCuatro2, capituloCuatro3, capituloCuatro4, c4ConMapa, c4SinMapa, capituloCinco, capituloCinco2, capituloCinco3, capituloSeis, final, accionesFinales} from "./parteFinal.js"

function osoLarreta(){
    localStorage.setItem("imagen", "1")
    texto.innerHTML = "Te encuentras con un oso gigante que tiene la cara de Horácio Rodriguez Larreta y el escudo de Nueva Chicago en uno de sus hombros, que se abalanza directamente hacia ti, que decides hacer?"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btn1">Utilizar árma del inventario</button>
                        <button id="btn2">Salir corriendo al grito de 'Pelado Botón!'</button>`
    btn1.onclick = () => batalla()
    btn2.onclick = () => escapar()
}

function batalla(){
    let energiaEnemigo = 50
    let resGolpe = Math.ceil(Math.random()*100)+inventario[0].danio    
    resGolpe>energiaEnemigo ? acertar():errar()

    function acertar (){
        texto.innerHTML = "Buen golpe, le diste justo en el escudo de Chicago, el monstruo calvo muere y te quedas con una de sus garras"
        hablar(texto.innerHTML)
        botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
        btnCont.onclick = () => garra()
    }
    function errar(){
        texto.innerHTML = "Tus manos temblorosas no te permiten acertar el golpe, y el monstruo calvo te implanta un chip de monitoreo que controla tus pensamientos, te vuelves capitalista y te pasas el resto de tu vida trabajando en el Banco Galícia"
        hablar(texto.innerHTML)
        botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
        accionesFinales()
        btnReiniciar.onclick = () => comienzo()
    }
}

function escapar(){
    texto.innerHTML = "Descubres con asombro que el depredador es igual como atleta que como político, y ante la lentitud con que la que éste se mueve logras escapar y dejar atras al malvado monstruo que cae derrotado ante tan temible humillación, soltando una de sus garras y pidiendo como último deseo una suscripción a 'Hair Recovery'"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
    btnCont.onclick = () => garra()
}

function garra(){
    inventario.push(new arma ("Garra de oso", "20"))
    texto.innerHTML = "Ahora tienes un "+inventario[1].tipo+" en tu inventario"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
    btnCont.onclick = () => capituloCuatro()
}


export {osoLarreta, batalla, acertar, errar, escapar, garra}