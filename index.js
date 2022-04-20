


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
            capituloTercero()
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
                capituloTercero()
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
        validarCabana(repe1) // esta rama no funciona, al llegar aqui el alert lo tira pero NO vuelve al menú
    } else {
        alert("Opcion Incorrecta")
        let repe2 = prompt("Te encuentras una cabaña abandonada, luego de requisarla encuentras algo de comida y unas llaves 1: Comer | 2: Inspeccionar llaves | 3: Salir de la cabaña")
        validarCabana(repe2) // esta rama funciona correctamente, al llegar aqui tira el alert y luego vuelve al menú
    }
}


function capituloTercero(){
    alert("..Luego de unos minutos abres los ojos. Estas sentado y atado a una silla, y el hombre que te atacó esta de pie delante de ti")
    let nombre = prompt("Te mira fijamente a los ojos y es entonces cuando pronuncia las palabras mágicas: Como te llamas?")
        if(nombre){
            alert("Hola "+nombre+" Estas aquí atrapado, el próximo capitulo te cuento como sigue la cosa") 
        } else {
            alert("no has ingresado el nombre")
            capituloTercero(true)
        }    
}

comienzo()










