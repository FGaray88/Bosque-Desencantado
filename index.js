
class arma{
    constructor(tipo, danio) {
        this.tipo = tipo;
        this.danio = parseInt(danio);
    }
}



const inventario = []

comienzo()



function comienzo (){
    let paso1 = confirm("CAPITULO 1 - Has despertado en medio de un bosque desconocido en algun lugar de la Argentina, es de noche y es invierno, no tienes nada mas que lo que llevas puesto. Podras escapar por tus propios metodos? Aceptar: Ser valiente | Cancelar: Apichonarse y pedir rescate")
    capituloPrimero(paso1)
}

function capituloPrimero (t){
    if(t){
        let opcionPaso1 = prompt("Tu valentía es asombrosa, deberás moverte en distintas direcciones hasta encontrar la salida del bosque. Adelante, da el primer paso. Hacia adonde deseas moverte? 1: Derecha | 2: Izquierda | 3: Adelante | 4: Atras")
        switch (opcionPaso1){
            case "1":
                alert("Avanzas en completa oscuridad con la mala suerte de que caes en un pozo que luego comienza a derrumbarse y mueres al caerte una roca en la cabeza")
                break;
            case "2":
                alert("Caminas unos metros y te encuentras con Slenderman, quien sin dudarlo un segundo te devora de un bocado")
                break;
            case "3":
                let paso2 = prompt("Te encuentras una cabaña abandonada, luego de requisarla encuentras algo de comida y unas llaves 1: Comer | 2: Inspeccionar llaves | 3: Salir de la cabaña")
                validarCabana(paso2) //Aqui avanzamos a la funcion validarCabana con el parametro 3 = validarCabana(3) - Esto es correcto??
                break;
            case "4":
                let pasoAlt1 = prompt("Te has topado con una espesa niebla, el camino parece volverse cada vez mas sinuoso 1: Volver | 2: Adentrarse en la niebla | 3: Buscar otro camino")
                validarNiebla(pasoAlt1)
                break;
            default:
                alert("Opcion incorrecta")
                capituloPrimero(true)
                break;
            }
        } else {
            alert("Un superheroe ha venido a tu rescate, por desgracia era el chapulin colorado y no ha sido de mucha ayuda, ambos mueren congelados")
        }
    }

function validarNiebla(n){
    if(n == 1){
        capituloPrimero(true)
    } else if (n == 2) {
        capituloNiebla()
    } else if (n == 3){
        alert("Encuentras un camino que te conduce al lugar donde estabas al comienzo")
        capituloPrimero(true)
    }else {
        alert("Opcion incorrecta")
        let pasoAlt2 = prompt("Te has topado con una espesa niebla, el camino parece volverse cada vez mas sinuoso 1: Volver | 2: Adentrarse en la niebla | 3: Buscar otro camino")
        validarNiebla(pasoAlt2)
    }
}
            
function capituloNiebla(){
    let pasoNiebla = prompt("Has cruzado al otro lado de la niebla y te encuentras un vehiculo con un neumatico desinflado 1: Cambiar neumatico | 2: Entrar en el vehículo | 3: Seguir avanzando")
    switch(pasoNiebla){
        case "1": 
            alert("Desmontas el neumatico desinflado y te das cuenta de que no tienes repuesto ni forma de repararlo, una figura oscura se aparece por detras de ti y roba tu alma")
            break;
        case "2":
            alert("Has tenido suerte, el vehiculo tenia las llaves puestas y funciona normalmente, conduces hasta una cabaña y al bajarte del auto un hombre se acerca rápidamente por detras y te pega con un palo en la cabeza")
            intermedio()
            break;
        case "3":
            alert("Encuentras un camino que te conduce al lugar donde estabas al comienzo")
            capituloPrimero(true)
            break;
        default:
            alert("Opcion incorrecta")
            capituloNiebla()
        }   
}




function validarCabana(Cab){ 
    if(Cab==1){
        alert("Has ingerido la comida sin notar que estaba envenenada, comienzas a perder la nocion hasta que mueres")
    } else if (Cab==2){
        alert("luego de una mirada mas profunda descubres que la llave abre un baul que esta en la casa")
        let accion = prompt("1: Abrir el cofre | 2: Salir corriendo de la cabaña")
            if(accion==1){
                alert("Al insertar la llave en la cerradura del cofre notas ruidos de pasos por detras de ti, te volteas y lo último que ves es a un hombre partirte un palo en la chirimoya")
                intermedio()
            } else if(accion==2){
                alert("FEAR BUILDS WALLS | tu propio miedo te impide salir de la cabaña")
                validarCabana(Cab)
            }else {
                alert("Opcion Incorrecta")
                validarCabana(Cab)
            }
    } else if (Cab==3) {
        alert("FEAR BUILDS WALLS | tu propio miedo te impide salir de la cabaña")
        let repe1 = prompt("Te encuentras una cabaña abandonada, luego de requisarla encuentras algo de comida y unas llaves 1: Comer | 2: Inspeccionar llaves | 3: Salir de la cabaña")
        validarCabana(repe1)
    } else {
        alert("Opcion Incorrecta")
        let repe2 = prompt("Te encuentras una cabaña abandonada, luego de requisarla encuentras algo de comida y unas llaves 1: Comer | 2: Inspeccionar llaves | 3: Salir de la cabaña")
        validarCabana(repe2)
    }
}




function intermedio(){
    alert("Has avanzado al siguiente capitulo")
    alert("CAPITULO 2 - ..Luego de unos minutos abres los ojos. Estas sentado y atado a una silla, y el hombre que te atacó esta de pie delante de ti")
    let nombre = prompt("Te mira fijamente a los ojos y es entonces cuando pronuncia las palabras mágicas: Como te llamas?")
        if(nombre){
            alert("Hola "+nombre+" Estas aquí, atrapado en tus propios pensamientos y no podras salir solo, por eso decidí ayudarte, como estabas muy nervioso tuve que golpearte y atarte a esta silla, pero ahora que te has tranquilizado te liberaré y te daré mi ayuda. Te regalaré una de mis armas que podrán serte de utilidad en el futuro, pero solo puedes elegir una") 
            seleccionarArma()
        } else {
            alert("no has ingresado el nombre")
            intermedio(true)
        }    
}






function seleccionarArma(SA) {
    let elegirArma = prompt("Elige entre estas armas 1: Cuchillo | 2: Palo | 3: Revolver")
    
    switch (elegirArma) {
        case "1":
            inventario.push(new arma ("Cuchillo", "50"))
            alert ("Ahora tienes un "+inventario[0].tipo+" capaz de causar un daño del "+inventario[0].danio+"% en tu inventario")
            capituloTercero()
            break;
        case "2":
            inventario.push(new arma ("Palo", "30"))
            alert ("Ahora tienes un "+inventario[0].tipo+" capaz de causar un daño del "+inventario[0].danio+"% en tu inventario")
            capituloTercero()
            break;
        case "3":
            inventario.push(new arma ("Revolver", "100"))
            alert ("Ahora tienes un "+inventario[0].tipo+" capaz de causar un daño del "+inventario[0].danio+"% en tu inventario")
            capituloTercero()
            break;
        case "4":
            alert ("Ahora tienes todas las armas en tu inventario")
            alert("de repente se aparece el chapulin colorado de la nada y te devora al instante")
            break;
        default:
            alert("debes elegir una opcion") 
            seleccionarArma(true)
    }
}





function capituloTercero(c3) {
    alert("Has avanzado al siguiente capitulo")
    let opcionPaso1C3 = prompt("CAPITULO 3 - Ya estas fuera de la cabaña, otra vez con el bosque como destino, pero esta vez estas del otro lado y tienes 3 posibles caminos, cual eliges? 1: Camino de la derecha | 2: Camino de la Izquierda | 3: Camino siguiendo recto")
        switch (opcionPaso1C3){
            case "1": op1Paso2C3()
                break;
            case "2": op2Paso2C3()
                break;
            case "3": op3Paso2C3()
                break;
            default:
                alert("debes elegir una opcion")
                capituloTercero(true)
        }
}

function op1Paso2C3(op1){
    let armaElegida = confirm("Te encuentras con un oso gigante que tiene la cara de Horacio Rodriguez Larreta y el escudo de Nueva Chicago en uno de sus hombros, no te queda otra que atacar, que decides hacer? Aceptar: Utilizar arma del inventario | Cancelar: Salir corriendo al grito de 'Pelado Boton!'")
    opcion1P3Cap3(armaElegida)
}

function opcion1P3Cap3(p3c3){
    if(p3c3){
        batalla()
    } else {
        alert("Descubres con asombro que el depredador es igual como atleta que como político y ante la lentitud con que la que este se mueve logras escapar y dejar atras al malvado monstruo que cae derrotado ante tan temible humillación y pide como ultimo deseo una suscripción a Hair Recovery")
        capituloCuatro()
    }
}



function batalla(){
let energiaEnemigo = 50
let resGolpe = Math.ceil(Math.random()*100)+inventario[0].danio
console.log(inventario[0].danio)
console.log(resGolpe)
    if(resGolpe>energiaEnemigo){
    alert("Buen golpe, le diste justo en el escudo de Nueva Chicago")
    capituloCuatro()
    } else {
    alert("Tus manos temblorosas no te permiten acertar el golpe y el monstruo calvo te implanta un chip de monitoreo que controla tus pensamientos, te vuelves capitalista y te pasas el resto de tu vida trabajando en el Banco Galicia")
    }
}


function op2Paso2C3(){
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
                inventario.push(new arma ("Chipote Chillón", "5"))
                alert ("Ahora tienes un "+inventario[1].tipo+" capaz de causar un daño del "+inventario[1].danio+"% en tu inventario")
                capituloCuatro()
                }
            }
}

function op3Paso2C3(){
    alert("El camino recto te lleva directo a un monte en donde parece haber una persona sentada con una guitarra en sus manos")
    alert("Al acercarte mas, esta persona te cuenta sobre sus experiencias trabajando para un gorila pelado que comerciaba computadoras DELL y luego se llevaba los dolares a Uruguay dejando a nuestro querido pais en la mismisima miseria, pero que un dia se canso mandando todo a la mierda, y dedicandose a hacer musica para gente perdida en los bosques")
    let cancion = confirm("Luego de quejarse de sus problemas durante 3 horas, esta persona te mira y te pregunta si quieres escuchar una cancion. Tu respuesta | Aceptar: Sentarte en una pierda a escuchar las melodías | Cancelar: Pasarte su música y su historia por la parte mas céntrica del conducto rectal y decirle que deje el boludeo para otro dia por que de momento te importa mas como salir del bosque")
        if(cancion){
            alert("Repentinamente comienza a escucharse unos aullidos como de gato no castrado y te preguntas que demonios es ese sonido tan extraño y horripilante")
            alert(" Y si, era el nuevo hit compuesto por este musico misterioso, quien luego de interpretar su cancion nauseabunda te da un mapa del bosque, que resultará ser de gran ayuda")
            inventario.push(new arma ("Mapa", "100"))
            alert ("Ahora tienes un "+inventario[1].tipo+" capaz de causar un daño del "+inventario[1].danio+"% en tu inventario")
            capituloCuatro()
        } else {
            alert("Ante tu indiferencia por su arte, el tipo se te enoja y te manda a los excrementos humanos al ritmo de 'Para el pueblo lo que es del pueblo' de Piero")
            capituloCuatro()
        }
}

function capituloCuatro(c4) {
    alert("Has avanzado al siguiente capitulo")
    alert("Capitulo 4 - TE MUERES DE UN ATAQUE REPENTINO POR FALTA DE CONTINUIDAD EN LA HISTORIA")
}


res.innerHTML = ("Gracias por jugar")