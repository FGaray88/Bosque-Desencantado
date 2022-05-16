
class arma{
    constructor(tipo, danio) {
        this.tipo = tipo;
        this.danio = parseInt(danio);
    }
}




const inventario = []



/* const btnJugar = document.querySelector("#btnJugar")
const btnSalir = document.querySelector("#btnSalir") */
const imagen1 = document.querySelector("#imagen")
let nombre = localStorage.getItem("nombre")


validarNombre()
//comienzo()







/* imagen1.setAttribute('src', "./images/cabaña.jpg")
texto.innerHTML = "Un superheroe ha venido a tu rescate, por desgracia era el chapulin colorado y no ha sido de mucha ayuda, ambos mueren congelados" */




function validarNombre(){   
    if(nombre===null){
        validarNombre2()
    } else {
        Principal()
    }

function Principal(){
    imagen1.setAttribute('src', "./images/bosquenoche.jpg")

    texto.innerHTML = "Hola "+nombre+" Quieres jugar otra vez?" 
    botones.innerHTML = `<button id="btnReiniciar">y.. si no queda otra..</button>`
    btnReiniciar.onclick = () => comienzo()

}



function validarNombre2(){
    imagen1.setAttribute('src', "./images/bosquenoche.jpg")
    texto.innerHTML = "Ingresa tu nombre para comenzar" 
    botones.innerHTML = `<input type="text" id="nombre">
                        <button id="btnTrue">Aceptar</button>`

    btnTrue.onclick = () => nombreUser()

}

function nombreUser(){
    let nombreUsuario = document.querySelector("#nombre")
    localStorage.setItem("nombre", nombreUsuario.value)
    let User = nombreUsuario.value
    console.log(User)
    if(User==""){
        error()
    } else {
        comienzo()
    }
}

function error(){
    imagen1.setAttribute('src', "./images/bosquenoche.jpg")
    texto.innerHTML = "Debes ingresar un nombre para comenzar el juego" 
    botones.innerHTML = `<input type="text" id="nombre">
                        <button id="btnTrue">Aceptar</button>`
    btnTrue.onclick = () => nombreUser()
}



function comienzo (){
    imagen1.setAttribute('src', "./images/bosquenoche.jpg")
    texto.innerHTML = "CAPITULO 1 - Has despertado en medio de un bosque desconocido en algun lugar de la Argentina, es de noche y es invierno, no tienes nada mas que lo que llevas puesto. Podras escapar por tus propios metodos?" 
    botones.innerHTML = `<button id="btnJugar" >Ser valiente y probar el juego</button>
                        <button id="btnSalir" >Apichonarse y pedir rescate</button>`

    btnJugar.onclick = () => capituloPrimero(true)
    btnSalir.onclick = () => capituloPrimero(false)
    /* btnJugar.addEventListener("click", capituloPrimero)
    btnSalir.addEventListener("click", capituloPrimero) */

}




    function capituloPrimero (t){
    if(t){
        texto.innerHTML = "Tu valentía es asombrosa, deberás moverte en distintas direcciones hasta encontrar la salida del bosque. Adelante, da el primer paso. Hacia adonde deseas moverte?"
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
        imagen1.setAttribute('src', "./images/chapulin.jpg")
        texto.innerHTML = "Un superheroe ha venido a tu rescate, por desgracia era el chapulin colorado y no ha sido de mucha ayuda, ambos mueren congelados"
        botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
        btnReiniciar.onclick = () => comienzo()
    }    
}

function muerte1 (){
    texto.innerHTML = "Avanzas en completa oscuridad con la mala suerte de que caes en un pozo que luego comienza a derrumbarse y mueres al caerte una roca en la cabeza"
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
}

function muerte2 (){
    texto.innerHTML = "Caminas unos metros y te encuentras con Slenderman, quien sin dudarlo un segundo te devora de un bocado"
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
}

function avanzar1 (){
    imagen1.setAttribute('src', "./images/cabaña.jpg")
    texto.innerHTML = "Te encuentras una cabaña abandonada, luego de requisarla encuentras algo de comida y unas llaves"
    botones.innerHTML = `
                        <button id="btnComer">Comer</button>
                        <button id="btnLlaves">Inspeccionar llaves</button>
                        <button id="btnSalCab">Salir de la cabaña</button>`

    btnComer.onclick = () => muerte3()
    btnLlaves.onclick = () => llaves()
    btnSalCab.onclick = () => salirCab()


}

function muerte3 (){
    texto.innerHTML = "Has ingerido la comida sin notar que estaba envenenada, comienzas a perder la nocion hasta que mueres"
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()

}

function llaves(){
    texto.innerHTML = "luego de una mirada mas profunda descubres que la llave abre un baul que esta en la casa"
    botones.innerHTML = `<button id="btnAbr">Abrir el cofre</button>
                        <button id="btnHuir">Salir corriendo de la Cabaña</button>`
    
    btnAbr.onclick = () => abrirCofre()
    btnHuir.onclick = () => salirCab2()

}


function salirCab (){
    texto.innerHTML = "FEAR BUILDS WALLS | tu propio miedo te impide salir de la cabaña"
    botones.innerHTML = `<button id="btnVolver">Volver atras</button>`
    btnVolver.onclick = () => avanzar1()
}

function salirCab2 (){
    texto.innerHTML = "FEAR BUILDS WALLS | tu propio miedo te impide salir de la cabaña"
    botones.innerHTML = `<button id="btnVolver">Volver atras</button>`
    btnVolver.onclick = () => llaves()
}

function abrirCofre (){
    texto.innerHTML = "Al insertar la llave en la cerradura del cofre notas ruidos de pasos por detras de ti, te volteas y lo último que ves es a un hombre partirte un palo en la chirimoya"
    botones.innerHTML = `<button id="btnContinuar">Continuar al capitulo 2</button>`
    btnContinuar.onclick = () => capituloSegundo()
}


function avanzar2(){
    texto.innerHTML = "Te has topado con una espesa niebla, el camino parece volverse cada vez mas sinuoso"
    botones.innerHTML = `<button id="btnVolv">Volver</button>
                        <button id="btnAden">Adentrarse en la niebla</button>
                        <button id="btnOtro">Buscar otro camino</button>`
    
    btnVolv.onclick = () => capituloPrimero(true)
    btnAden.onclick = () => niebla()
    btnOtro.onclick = () => {texto.innerHTML = "Encuentras un camino que te conduce al lugar donde estabas al comienzo", botones.innerHTML = `<button id="btnCon">Continuar</button>`, btnCon.onclick = () => capituloPrimero(true)} 
}

function niebla (){
    texto.innerHTML = "Has cruzado al otro lado de la niebla y te encuentras un vehiculo con un neumatico desinflado"
    botones.innerHTML = `<button id="btnNeum">Cambiar neumatico del vehículo</button>
                        <button id="btnVeh">Entrar en el vehículo</button>
                        <button id="btnSeguir">Seguir avanzando a pie</button>`

    btnNeum.onclick = () => muerte4()
    btnVeh.onclick = () => avanzar3()
    btnSeguir.onclick = () => {texto.innerHTML = "Encuentras un camino que te conduce al lugar donde estabas al comienzo", botones.innerHTML = `<button id="btnCon">Continuar</button>`, btnCon.onclick = () => capituloPrimero(true)} 

}

function muerte4 (){
    texto.innerHTML = "Desmontas el neumatico desinflado y te das cuenta de que no tienes repuesto ni forma de repararlo, una figura oscura se aparece por detras de ti y roba tu alma"
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
}

function avanzar3(){
    texto.innerHTML = "Has tenido suerte, el vehiculo tenia las llaves puestas y funciona normalmente, conduces hasta una cabaña y al bajarte del auto un hombre se acerca rápidamente por detras y te pega con un palo en la cabeza"
    botones.innerHTML = `<button id="btnContinuar">Continuar al capitulo 2</button>`
    btnContinuar.onclick = () => capituloSegundo()

}


function capituloSegundo(){
    texto.innerHTML = "CAPITULO 2 - ..Luego de unos minutos abres los ojos. Estas sentado y atado a una silla, y el hombre que te atacó esta de pie delante de ti. Te mira fijamente a los ojos.."
    botones.innerHTML = `<button id="btnAccept">Continuar</button>`
    btnAccept.onclick = () => seleccionarArma()
}



function seleccionarArma() {
    let Usuario = localStorage.getItem("nombre")
    console.log(Usuario)
    texto.innerHTML = "Hola "+Usuario+" Estas aquí, atrapado en tus propios pensamientos y no podrás salir solo, por eso decidí ayudarte, como estabas muy nervioso tuve que golpearte y atarte a esta silla, pero ahora que te has tranquilizado te liberaré y te daré mi ayuda. Te regalaré una de mis armas que podrán serte de utilidad en el futuro, pero solo puedes elegir una"
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
    botones.innerHTML = `<button id="btnContinue">Continuar</button>`
    btnContinue.onclick = () => capituloTercero()
}

function agregarInv2(){
    inventario.push(new arma ("Palo", "30"))
    texto.innerHTML = "Ahora tienes un "+inventario[0].tipo+" en tu inventario"
    botones.innerHTML = `<button id="btnContinue">Continuar</button>`
    btnContinue.onclick = () => capituloTercero()
}

function agregarInv3(){
    inventario.push(new arma ("Revolver", "100"))
    texto.innerHTML = "Ahora tienes un "+inventario[0].tipo+" en tu inventario"
    botones.innerHTML = `<button id="btnContinue">Continuar</button>`
    btnContinue.onclick = () => capituloTercero()
}


function capituloTercero(){
    texto.innerHTML = "CAPITULO 3 - Ya estas fuera de la cabaña, otra vez con el bosque como destino, pero esta vez estas del otro lado y tienes 3 posibles caminos, cual eliges?"
    botones.innerHTML = `<button id="btnDer">Camino de la derecha</button>
                        <button id="btnIzq">Camino de la Izquierda</button>
                        <button id="btnRec">Camino siguiendo recto</button>`

    btnDer.onclick = () => osoLarreta()
    btnIzq.onclick = () => chapulin()
    btnRec.onclick = () => musico()
}


function osoLarreta(){
    texto.innerHTML = "Te encuentras con un oso gigante que tiene la cara de Horacio Rodriguez Larreta y el escudo de Nueva Chicago en uno de sus hombros, no te queda otra que atacar, que decides hacer?"
    botones.innerHTML = `<button id="btn1">Utilizar arma del inventario</button>
                        <button id="btn2">Salir corriendo al grito de 'Pelado Boton!'</button>`
btn1.onclick = () => batalla()
btn2.onclick = () => escapar()

}

function batalla(){
    let energiaEnemigo = 50
    let resGolpe = Math.ceil(Math.random()*100)+inventario[0].danio
        if(resGolpe>energiaEnemigo){
        texto.innerHTML = "Buen golpe, le diste justo en el escudo de Nueva Chicago"
        botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
        btnCont.onclick = () => capituloCuatro()
        } else {
            texto.innerHTML = "Tus manos temblorosas no te permiten acertar el golpe y el monstruo calvo te implanta un chip de monitoreo que controla tus pensamientos, te vuelves capitalista y te pasas el resto de tu vida trabajando en el Banco Galicia"
            botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
            btnReiniciar.onclick = () => comienzo()
        }
}

function escapar(){
    texto.innerHTML = "Descubres con asombro que el depredador es igual como atleta que como político y ante la lentitud con que la que este se mueve logras escapar y dejar atras al malvado monstruo que cae derrotado ante tan temible humillación y pide como ultimo deseo una suscripción a Hair Recovery"
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
    btnCont.onclick = () => capituloCuatro()
}

function chapulin(){
    texto.innerHTML = "Luego de caminar un rato te encuentras con un rio plagado de cocodrilos hambrientos, debes cruzar hacia el otro lado pero no se te ocurre la forma"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin2()
}

function chapulin2(){
    texto.innerHTML = "-Oh! y ahora quien podrá ayudarme?- Dices tu"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin3()
}

function chapulin3(){
    texto.innerHTML = "La version chilena del chapulin colorado acude a tu llamado, te explica la historia del bosque, te cuenta en detalle como hacer para escapar, incluso te da tips de como alcanzar el estado Zen, por desgracia el dialecto implementado por nuestro heroe trasandino resulta inentendible para ti, y en un intento de copiar su fonética tu le respondes:"
    botones.innerHTML = `<button id="btnC1"> E la pelá de la wea pal andai del weon</button>
                        <button id="btnC2">A lapa choro de la weaa en el pololeo de la guagua</button>`
    btnC1.onclick = () => chapulinA()
    btnC2.onclick = () => chapulinB()
}

function chapulinA(){
    texto.innerHTML = "Agobiado de tanta informacion sin poder ser procesada le das un puñetazo al chapulin chileno justo arriba de la nariz, entre los ojos, es una lástima que era tu única oportunidad para escapar, quedas atrapado en el bosque por toda la eternidad"
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
}

function chapulinB(){
    texto.innerHTML = "Recuerdas por fortuna que en tu infancia tuviste un amigo chileno que hablaba igual que el chapulin por lo cual logras descifrar solo algunas palabras que al conectarlas entre si entiendes que te esta diciendo que llego en un bote que puede servir para cruzar al otro lado del rio"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4()
}

function chapulin4(){
    texto.innerHTML = "Una vez cruzado el rio junto con el chapulin, este vuelve a pronunciarte unas palabras en chileno y tu puedes reaccionar de dos posibles maneras. Por un lado quieres ser empático con el heroe y dejar que te acompañe lo que resta del camino, pero por el otro entiendes que seguir en su compañia puede atraer mas chilenos a tu vida, entonces lo ahogas en el rio y sigues camino solo"
    botones.innerHTML = `<button id="btnEmp">Ser empático</button>
                        <button id="btnMatar">Ahogar chapulin</button>`
    btnEmp.onclick = () => chapulin4Muerte()
    btnMatar.onclick = () => chapulin4Avanzar()
}


function chapulin4Muerte(){
    texto.innerHTML = "Decides seguir avanzando en compañia del heroe trasandino, y a los pocos metros caminados se escucha un pitido que parece provenir de su cabeza"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4Muerte2()
}

function chapulin4Muerte2(){
    texto.innerHTML = "Silencio! mis antenitas de vinil estan detectando la presencia del enemigo weon"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4Muerte3()
}

function chapulin4Muerte3(){
    texto.innerHTML = "El chapulin da un giro de 360° buscando al enemigo y al confundirse pensando que el enemigo eres tu, te parte el chipote chillón en la cabeza, mueres al instante, y si, la torpeza del chapulin no tiene límites geográficos"
    botones.innerHTML = `<button id="btnReiniciar">Empezar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
}

function chapulin4Avanzar(){
    texto.innerHTML = "luego de ahogar al chapulin chileno en el rio sigues tu camino solo, no sin antes quedarte con su chipote chillón"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => chapulin4Avanzar2()
}

function chapulin4Avanzar2(){
    inventario.push(new arma ("Chipote Chillón", "5"))
    texto.innerHTML = "Ahora tienes un "+inventario[1].tipo+" capaz de causar un daño del "+inventario[1].danio+"% en tu inventario"
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capitulo</button>`
    btnCont.onclick = () => capituloCuatro()
}

function musico(){
    texto.innerHTML = "El camino recto te lleva directo a un monte en donde parece haber una persona sentada con una guitarra en sus manos"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => musico2()
}

function musico2 (){
    texto.innerHTML = "Al acercarte mas, esta persona te cuenta sobre sus experiencias trabajando para un gorila pelado que comerciaba computadoras DELL y luego se llevaba los dolares a Uruguay dejando a nuestro querido pais en la mismisima miseria, pero que un dia se canso mandando todo a la mierda, y dedicandose a hacer musica para gente perdida en los bosques"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => musico3()
}

function musico3(){
    texto.innerHTML = "Luego de quejarse de sus problemas durante 3 horas, esta persona te mira y te pregunta si quieres escuchar una cancion. Tu respuesta:"
    botones.innerHTML = `<button id="btnEscuchar">Sentarte en una piedra a escuchar las melodías</button>
                        <button id="btnEvitar">Pasarte su música y su historia por la parte mas céntrica del conducto rectal y decirle que deje el boludeo para otro día por que de momento te importa mas como salir del bosque</button>`
    btnEscuchar.onclick = () => escuchaMusica()
    btnEvitar.onclick = () => evitarMusica()
}

function escuchaMusica(){
    texto.innerHTML = "Repentinamente comienza a escucharse unos aullidos como de gato no castrado y te preguntas que demonios es ese sonido tan extraño y horripilante. <br> Y si, era el nuevo hit compuesto por este musico misterioso, quien luego de interpretar su cancion nauseabunda te da un mapa del bosque, que resultará ser de gran ayuda"
    botones.innerHTML = `<button id="btnCont">Continuar</button>`
    btnCont.onclick = () => escuchaMusica2()
}

function escuchaMusica2(){
    inventario.push(new arma ("Mapa", "100"))
    texto.innerHTML = "Ahora tienes un "+inventario[1].tipo+" en tu inventario"
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capítulo</button>`
    btnCont.onclick = () => capituloCuatro()
}

function evitarMusica(){
    texto.innerHTML = "Ante tu indiferencia por su arte, el tipo se te enoja y te manda a los excrementos humanos al ritmo de 'Para el pueblo lo que es del pueblo' de Piero"
    botones.innerHTML = `<button id="btnCont">Continuar al siguiente capítulo</button>`
    btnCont.onclick = () => capituloCuatro()

}

const mensaje = ["TE MUERES DE UN ATAQUE REPENTINO POR FALTA DE CONTINUIDAD EN LA HISTORIA","TE MUERES POR QUE EL AUTOR SE QUEMO LA CABEZA PROGRAMANDO","TE MUERES POR QUE EL AUTOR SE HARTO DE ESCRIBIR CODIGO"]

function capituloCuatro(){

    let numMensaje = Math.ceil(Math.random()*100)
    if(numMensaje<=33){
        texto.innerHTML = "CAPITULO 4 - "+mensaje[0]
    } else if (numMensaje>33 && numMensaje<=66) {
        texto.innerHTML = "CAPITULO 4 - "+mensaje[1]
    } else {
        texto.innerHTML = "CAPITULO 4 - "+mensaje[2]
    }
    botones.innerHTML = `<button id="btnReiniciar">Jugar de nuevo</button>`
    btnReiniciar.onclick = () => comienzo()
    
    
    }

    localStorage.clear()
}


/*





function op2Paso2C3(){
    //imagen.innerHTML = `<img src="./images/chapulin.jpg" alt="chapulin">`;
    alert("Luego de caminar un rato te encuentras con un rio plagado de cocodrilos hambrientos, debes cruzar hacia el otro lado pero no se te ocurre la forma")
    alert("-Oh! y ahora quien podrá ayudarme?- Dices tu")
    let opcionesC3 = confirm("La version chilena del chapulin colorado acude a tu llamado, te explica la historia del bosque, te cuenta en detalle como hacer para escapar, incluso te da tips de como alcanzar el estado Zen, por desgracia el dialecto implementado por nuestro heroe trasandino resulta inentendible para ti | Aceptar: e la pelá de la wea pal andai del weon | Cancelar: A lapa choro de la weaa en el pololeo de la guagua")
    if(opcionesC3){
        alert("Agobiado de tanta informacion sin poder ser procesada le das un puñetazo al chapulin chileno justo arriba de la nariz, entre los ojos, es una lástima que era tu única oportunidad para escapar, quedas atrapado en el bosque por toda la eternidad")
    } else {
        alert("Recuerdas por fortuna que en tu infancia tuviste un amigo chileno que hablaba igual que el chapulin por lo cual logras descifrar solo algunas palabras que al conectarlas entre si entiendes que te esta diciendo que llego en un bote que puede servir para cruzar al otro ladio del rio")
        let chapulin = confirm("Una vez cruzado el rio junto con el chapulin, este vuelve a pronunciarte unas palabras en chileno y tu reaccionas de la siguiente manera: Aceptar: Eres empático con el heroe y dejas que te acompañe lo que resta del camino | Cancelar: Entiendes que seguir en compañia del heroe puede atraer mas chilenos a tu vida y decides ahogarlo en el rio y seguir camino solo")
            if(chapulin){
                alert("A los pocos metros caminados se escucha un pitido que parece provenir del chapulin")
                alert("Silencio! mis antenitas de vinil estan detectando la presencia del enemigo weon")
                alert("El chapulin da un giro de 360° buscando al enemigo y al confundirse pensando que el enemigo eres tu, te parte el chipote chillón en la cabeza, mueres al instante, y si, la torpeza del chapulin no tiene límites geográficos")
            } else {
                alert("luego de ahogar al chapulin chileno en el rio sigues tu camino solo, no sin antes quedarte con su chipote chillón")
                capituloCuatro()
                }
            }
}

function op3Paso2C3(){
    //imagen.innerHTML = `<img src="./images/musico.jpg" alt="musico">`;
    alert("El camino recto te lleva directo a un monte en donde parece haber una persona sentada con una guitarra en sus manos")
    alert("Al acercarte mas, esta persona te cuenta sobre sus experiencias trabajando para un gorila pelado que comerciaba computadoras DELL y luego se llevaba los dolares a Uruguay dejando a nuestro querido pais en la mismisima miseria, pero que un dia se canso mandando todo a la mierda, y dedicandose a hacer musica para gente perdida en los bosques")
    let cancion = confirm("Luego de quejarse de sus problemas durante 3 horas, esta persona te mira y te pregunta si quieres escuchar una cancion. Tu respuesta | Aceptar: Sentarte en una pierda a escuchar las melodías | Cancelar: Pasarte su música y su historia por la parte mas céntrica del conducto rectal y decirle que deje el boludeo para otro dia por que de momento te importa mas como salir del bosque")
        if(cancion){
            alert("Repentinamente comienza a escucharse unos aullidos como de gato no castrado y te preguntas que demonios es ese sonido tan extraño y horripilante")
            alert(" Y si, era el nuevo hit compuesto por este musico misterioso, quien luego de interpretar su cancion nauseabunda te da un mapa del bosque, que resultará ser de gran ayuda")
            inventario.push(new arma ("Mapa", "100"))
            alert ("Ahora tienes un "+inventario[1].tipo+" en tu inventario")
            capituloCuatro()
        } else {
            alert("Ante tu indiferencia por su arte, el tipo se te enoja y te manda a los excrementos humanos al ritmo de 'Para el pueblo lo que es del pueblo' de Piero")
            capituloCuatro()
        }
}

function capituloCuatro(c4) {
    alert("Has avanzado al siguiente capitulo")
    alert("")


} */