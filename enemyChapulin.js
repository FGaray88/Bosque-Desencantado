import {arma, inventario, imagen1, nombre, armaElegida, item, creditos, credits} from "./index.js"
import {hablar,nombreUsuario, nombreUser, error, comienzo} from "./init.js"
import {capituloPrimero,muerte1, muerte2, avanzar1, muerte3, muerte4, abrirCofre, agregarInv1, llaves, salirCab, salirCab2, avanzar2, avanzar3, niebla, capituloSegundo, capituloTercero, seleccionarArma, agregarInv2, agregarInv3} from "./parteUno.js"
//import {osoLarreta,batalla,acertar,errar,escapar,garra} from "./enemyOso.js"
import {musico, musico2, musico3, escucharMusica, agregarMapa, evitarMusica} from "./enemyMusico.js"
import {capituloCuatro, capituloCuatro2, capituloCuatro3, capituloCuatro4, c4ConMapa, c4SinMapa, capituloCinco, capituloCinco2, capituloCinco3, capituloSeis, final, accionesFinales} from "./parteFinal.js"


function chapulin(){
    localStorage.setItem("imagen", "2")
    texto.innerHTML = "Luego de caminar un rato, te encuentras con un río plagado de cocodrilos hambrientos, debes cruzar hacia el otro lado, pero no se te ocurre la forma"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin2()
}

function chapulin2(){
    texto.innerHTML = "-Ooh! y ahora quién podrá ayudarme?- Dices tú"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin3()
}

function chapulin3(){
    texto.innerHTML = "La versión chilena del chapulín colorado acude a tu llamado, te explica la historia del bosque, te cuenta en detalle como hacer para escapar, incluso te da tips de como alcanzar el estado Zen, por desgracia el dialecto implementado por nuestro héroe trasandino resulta inentendible para ti, y en un intento de copiar su fonética tu le respondes:"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnC1"> E la pelá de la wea pal andai del weon</button>
                        <button id="btnC2">A lapa choro de la weaa en el pololeo de la guagua</button>`
    btnC1.onclick = () => chapulinA()
    btnC2.onclick = () => chapulinB()
}

function chapulinA(){
    texto.innerHTML = "Agobiado de tanta información sin poder ser procesada le das un puñetazo al chapulín chileno justo arriba de la naríz. Entre los ojos. Es una lástima que era tu única oportunidad para escapar, quedas atrapado en el bosque por toda la eternidad"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    accionesFinales()
    btnReiniciar.onclick = () => comienzo()
}

function chapulinB(){
    texto.innerHTML = "Recuerdas por fortuna que en tu infancia tuviste un amigo chileno que hablaba igual que el chapulín, por lo cual logras descifrar solo algunas palabras que al conectarlas entre sí, entiendes que te está diciendo que llegó en un bote, que puede servir para cruzar al otro lado del río"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4()
}

function chapulin4(){
    texto.innerHTML = "Una vez cruzado el río junto con el chapulín, éste vuelve a pronunciarte unas palabras en chileno y tu puedes reaccionar de dos posibles maneras. Por un lado quieres ser empático con el héroe y dejar que te acompañe lo que resta del camino, pero por el otro entiendes que seguir en su compañía puede atraer mas chilenos a tu vida, entonces lo ahogas en el río y sigues camino solo"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnEmp">Ser empático</button>
                        <button id="btnMatar">Ahogar chapulin</button>`
    btnEmp.onclick = () => chapulin4Muerte()
    btnMatar.onclick = () => chapulin4Avanzar()
}

function chapulin4Muerte(){
    texto.innerHTML = "Decides seguir avanzando en compañía del héroe trasandino, y a los pocos metros caminados se escucha un pitido que parece provenir de su cabeza"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4Muerte2()
}

function chapulin4Muerte2(){
    texto.innerHTML = "Silencio!. Mis antenitas de viníl estan detectando la presencia del enemigo, ueoon"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4Muerte3()
}

function chapulin4Muerte3(){
    texto.innerHTML = "El chapulín da un giro de 360° buscando al enemigo y al confundirse pensando que el enemigo eres tú, te parte el chipote chillón en la cabeza. Mueres al instante. Y si, la torpeza del chapulín no tiene límites geográficos"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    accionesFinales()
    btnReiniciar.onclick = () => comienzo()
}

function chapulin4Avanzar(){
    texto.innerHTML = "luego de ahogar al chapulín chileno en el río sigues tu camino solo, no sin antes quedarte con su chipote chillón"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4Avanzar2()
}

function chapulin4Avanzar2(){
    inventario.push(new arma ("Chipote Chillón", "5"))
    texto.innerHTML = "Ahora tienes un "+inventario[1].tipo+" en tu inventario"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
    btnCont.onclick = () => capituloCuatro()
}

export {chapulin, chapulin2, chapulin3, chapulin4, chapulinA, chapulinB, chapulin4Avanzar, chapulin4Avanzar2, chapulin4Muerte, chapulin4Muerte2, chapulin4Muerte3}