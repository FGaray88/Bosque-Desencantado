import {hablar,nombreUsuario, nombreUser, error, comienzo} from "./init.js"
import {capituloPrimero,muerte1, muerte2, avanzar1, muerte3, muerte4, abrirCofre, agregarInv1, llaves, salirCab, salirCab2, avanzar2, avanzar3, niebla, capituloSegundo, capituloTercero, seleccionarArma, agregarInv2, agregarInv3} from "./parteUno.js"
//import {osoLarreta,batalla,acertar,errar,escapar,garra} from "./enemyOso.js"
import {chapulin, chapulin2, chapulin3, chapulin4, chapulinA, chapulinB, chapulin4Avanzar, chapulin4Avanzar2, chapulin4Muerte, chapulin4Muerte2, chapulin4Muerte3} from "./enemyChapulin.js"
import {musico, musico2, musico3, escucharMusica, agregarMapa, evitarMusica} from "./enemyMusico.js"
import {capituloCuatro, capituloCuatro2, capituloCuatro3, capituloCuatro4, c4ConMapa, c4SinMapa, capituloCinco, capituloCinco2, capituloCinco3, capituloSeis, final, accionesFinales} from "./parteFinal.js"
// Constructores

class arma{
    constructor(tipo, danio) {
        this.tipo = tipo;
        this.danio = parseInt(danio);
    }
}

// Variables y Constantes

const inventario = []
const imagen1 = document.querySelector("#imagen")
let nombre = localStorage.getItem("nombre")
let armaElegida = ""
let item = ""
const mensaje = ["TE MUERES DE UN ATAQUE REPENTINO POR FALTA DE CONTINUIDAD EN LA HISTORIA","TE MUERES POR QUE EL AUTOR SE QUEMO LA CABEZA PROGRAMANDO","TE MUERES POR QUE EL AUTOR SE HARTO DE ESCRIBIR CODIGO"]




function creditos(){
    fetch("./creditos.json")
        .then ((respuesta)=>{
            return respuesta.json()
        })
        .then ((dato)=>{
            credits(dato)
        }).catch ((err)=>{
            console.log("error: " + err)
        })
    }

function credits(obj){
        texto.innerHTML = `<strong>"${obj.nombre}"</strong><br>
                            Gracias por jugar <br>
                            Version: ${obj.version} <br>
                            Autor: ${obj.autor} <br>
                            Año: ${obj.anio}`
        botones.innerHTML = `<button id="btnTrue">Jugar de nuevo</button>`
        btnTrue.onclick = () => nombreUsuario()
    }


// Llamados

nombreUsuario()

export {arma, inventario, imagen1, nombre, armaElegida, item, creditos, credits}

/* Consultas Lucio
1.- Tema modulos
2.- Tema SpeechSynthesisUtterance (si cuenta como libreria y como cambiar los idiomas)
3.- Aclarar tema de github, ahora esta todo en el link actual 
4.- consultar por devolucion de Incorporar librerias y Segunda entrega de proyecto
5.- Como incoporar audios
*/


// Funciones

/* function hablar(texto1){
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
    validacionUser==="falsy" ? error() : comienzo() // Operador ternario
}

function error(){
    texto.innerHTML = "Debes ingresar un nombre para comenzar el juego"
    hablar(texto.innerHTML)
    botones.innerHTML = `<input type="text" id="nombre">
                        <button id="btnTrue">Aceptar</button>`
    btnTrue.onclick = () => nombreUser()
}

function comienzo (){
    texto.innerHTML = "CAPITULO 1 - Has despertado en medio de un bosque desconocido, en algún lugar de la Argentina, es de noche y es invierno, no tienes nada mas que lo que llevas puesto. ¿Podrás escapar por tus propios métodos?" 
    
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnJugar" >Ser valiente y probar el juego</button>
                        <button id="btnSalir" >Apichonarse y pedir rescate</button>`
    btnJugar.onclick = () => capituloPrimero(true)
    btnSalir.onclick = () => capituloPrimero(false)
}

function capituloPrimero (t){
    if(t){
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
    imagen1.setAttribute('src', "./images/hombre.jpg")
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
    btnRec.onclick = () => musico(item)
}

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
    texto.innerHTML = "Ahora tienes una "+inventario[1].tipo+" en tu inventario"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
    btnCont.onclick = () => capituloCuatro()
}

function chapulin(){
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

function musico(a){
    console.log(a)
    item==="" ? imagen1.setAttribute('src', "./images/bosqueOscuro.jpg") : imagen1.setAttribute('src', "./images/bosqueSol.jpg") 
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
    btnEscuchar.onclick = () => escucharMusica(item)
    btnEvitar.onclick = () => evitarMusica(item)
}

function escucharMusica(){
    texto.innerHTML = "Repentinamente comienzan a escucharse unos aullidos, como de gato no castrado, y te preguntas que demonios es ese sonido tan extraño y horripilante. <br> Y si, era el nuevo hit compuesto por este músico misterioso, quien luego de interpretar su canción nauseabunda, te da un mapa del bosque, que resultará ser de gran ayuda"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    item!="Magico" ?  btnCont.onclick = () => agregarMapa() : btnCont.onclick = () => capituloSeis()
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
    item!="Magico" ?  btnCont.onclick = () => agregarMapa() : btnCont.onclick = () => capituloSeis()
}

function capituloCuatro(){
    
    imagen1.setAttribute('src', "./images/bosqueOscuro.jpg")
    texto.innerHTML = "CAPITULO 4 - Sigues avanzando por el bosque y ves a lo lejos unas luces que parecieran indicar que la salida esta cerca, apuras el paso y cuando ya casi estas llegando, caes en una trampa para cazar animales y quedas colgando de un árbol, con una soga amarrada a tus pies"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCuatro2()
}

function capituloCuatro2(){
    armaElegida = inventario[0].tipo
    armaElegida=="Cuchillo" ? texto.innerHTML = "Intentas utilizar tu cuchillo para cortar la soga pero se te cae al piso" : texto.innerHTML = "Si tuvieras un cuchillo podrías cortar la soga"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCuatro3()
}

function capituloCuatro3(){
    texto.innerHTML = "En ese momento aparece el hombre que te ayudó en la cabaña, y te explica que esas luces no eran mas que una visión de tu imaginación, y que de no haber caído en la trampa hubieras caído en el precipicio que estaba ahí delante, también te habla acerca de un extraño mapa que ha estado buscando durante muchos años, entiendes que el hombre vive tu misma situación, perdido en el bosque intentando encontrar la salida"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCuatro4()
}

function capituloCuatro4(){
    let mapa = inventario[1].tipo
    mapa=="Mapa" ? c4ConMapa() : c4SinMapa()
    
}

function c4ConMapa(){
    imagen1.setAttribute('src', "./images/bosqueSol.jpg")
    texto.innerHTML = "Le muestras el mapa que te dió aquel músico misterioso y al interpretarlo entre los dos, consiguen al fin dar con el camino que conduce directo a la salida del bosque"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => final()
}

function c4SinMapa(){
    texto.innerHTML = "No tienes ni idea de que mapa esta hablando el paisano éste, sin embargo ambos coinciden en unir fuerzas y buscarlo juntos"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente Capítulo</button>`
    btnCont.onclick = () => capituloCinco()
}

function capituloCinco(){
    texto.innerHTML = "Luego de caminar durante un par de horas en las que el hombre misterioso te ha explicado como interpretar ese mapa, se encuentran con un árbol que parece tener un escrito en su copa.."
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCinco2()
}

function capituloCinco2 (){
    texto.innerHTML = "El escrito indica: 'Camarón que se duerme, se lo lleva la chingada'. No entiendes que diablos significa esa frase, pero al pronunciarla en voz alta, el hombre que te acompañaba se desintegra como por arte de magia, reduciendose su cuerpo a cenizas, entre las cuales hay ahora una carta"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => capituloCinco3()
}

function capituloCinco3(){
    localStorage.setItem("Sobre", "Magico")
    item = localStorage.getItem("Sobre", "Magico")
    texto.innerHTML = "La carta tiene un dibujo de una flecha recta apuntando a un arco íris"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnRecto">Caminar recto</button>
                        <button id="btnDerecha">Caminar a la derecha</button>
                        <button id="btnIzquierda">Caminar a la izquierda</button>`
    btnRecto.onclick = () => musico(item)
    btnDerecha.onclick = () => muerte2()
    btnIzquierda.onclick = () => {texto.innerHTML = "Encuentras un camino que te conduce a un tiempo-espacio ya visitado", botones.innerHTML = `<button id="btnCon">Continuar</button>`, hablar(texto.innerHTML), btnCon.onclick = () => capituloCuatro()} 
}

function capituloSeis(){
    texto.innerHTML = "Recuerdas las palabras de aquel paisano desintegrado acerca de como leer el mapa, y ahora que lo tienes descubres el camino hacia la salida del bosque"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => final()
}

function final(){
    texto.innerHTML = "Felicidades! Has escapado del bosque!"
    hablar(texto.innerHTML)
    botones.innerHTML = `<button id="btnCont">Créditos</button>`
    accionesFinales()
    btnCont.onclick = () => creditos()
}

function accionesFinales(){
    localStorage.clear()
    inventario.splice(inventario.lenght)
    item = ""

} */