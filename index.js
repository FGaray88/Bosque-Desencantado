
class arma{
    constructor(tipo, danio) {
        this.tipo = tipo;
        this.danio = parseInt(danio);
    }
    valorDanio(){
        this.danio = this.danio + 0;
    }
}
/* const arma1 = new arma ("Cuchillo", 50)
const arma2 = new arma ("Palo", 30)
const arma3 = new arma ("Revolver", 100) */

const inventario = []

comienzo()



function comienzo (){
    let paso1 = confirm("Has despertado en medio de un bosque desconocido, es de noche y es invierno, no tienes nada mas que lo que llevas puesto. Podras escapar por tus propios metodos? Aceptar: Ser valiente | Cancelar: Apichonarse y pedir rescate")
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
        capituloPrimero(true)
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
    alert("..Luego de unos minutos abres los ojos. Estas sentado y atado a una silla, y el hombre que te atacó esta de pie delante de ti")
    let nombre = prompt("Te mira fijamente a los ojos y es entonces cuando pronuncia las palabras mágicas: Como te llamas?")
        if(nombre){
            alert("Hola "+nombre+" Estas aquí atrapado, FALTA TEXTO") 
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
            console.log(arma.danio)
            /* alert ("Ahora tienes un Cuchillo capaz de causar un daño del 50% en tu inventario") */
            capituloTercero()
            break;

        case "2":
            inventario.push({arma2})
            alert ("Ahora tienes un "+arma2.tipo+" capaz de causar un daño del "+arma2.dano+"% en tu inventario")
            capituloTercero()
            break;
        case "3":
            inventario.push({arma3})
            alert ("Ahora tienes un "+arma3.tipo+" capaz de causar un daño del "+arma3.dano+"% en tu inventario")
            capituloTercero()
            break;
        case "4":
            alert ("Ahora tienes todas las armas en tu inventario")
            alert("de repente se aparece el chapulin colorado de la nada y te devora al instante")
        default:
            alert("debes elegir una opcion") 
            seleccionarArma(true)
    }
}





function capituloTercero(c3) {
    let opcionPaso1C3 = prompt("Ya estas fuera de la cabaña, otra vez con el bosque como destino, pero esta vez estas del otro lado y tienes 3 posibles caminos, cual eliges? 1: Camino de la derecha | 2: Camino de la Izquierda | 3: Camino siguiendo recto")
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
let energiaEnemigo = 10
let numero = Math.ceil(Math.random()*100)
// Esto podria hacerlo de diferentes maneras, pero aquí lo asigno a una variable. Lo que no estoy seguro es si estoy llamando bien a ese 50 que pretendo tener aqui
console.log(inventario.valorDanio)
let armaDanio = inventario.valorDanio
let resGolpe = armaDanio+numero


if(resGolpe>energiaEnemigo){
    alert("Buen golpe, el impacto del le diste justo en el escudo de Nueva Chicago")
    capituloCuatro()
    } else {
    alert("Tus manos temblorosas no te permiten acertar el golpe y el monstruo calvo te implanta un chip de monitoreo que controla tus pensamientos, te vuelves capitalista y dedicas tu tiempo a trabajar en un banco por lo que resta de tu vida")
    }
}



function capituloCuatro(c4) {
    alert("Capitulo 4: TE MUERES DE UN ATAQUE REPENTINO POR FALTA DE CONTINUIDAD EN LA HISTORIA")
}


res.innerHTML = ("Gracias por jugar")