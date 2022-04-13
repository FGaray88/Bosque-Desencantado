
//for(inicializacion; hasta que; incremento)

/* let nombre = prompt("Ingrese un nombre para comenzar")

let edad = prompt("Hola "+ nombre + " Que edad tienes?")

if(edad<18){
    alert("Lo siento debes ser mayor de edad para continuar")
} else if (""){
    prompt("Hola "+ nombre + " Que edad tienes?")
} else {
    alert("Bienvenido "+nombre+"!!" )
}
 */

res.innerHTML = ("Gracias por jugar")


let password = prompt("Has ingresado en un laberinto infinito para salir escribe el numero 1234")


if(password == 1234){
    let pass2 = prompt("Te mentí ese no es el numero correcto, prueba con 4321")
        if(pass2 == 4321){
            let pass3 = prompt("Por que me sigues creyendo? la verdad es que el codigo secreto puede variar desde el 1 hasta el infinito, nadie ha logrado escapar nunca, acaso tu podras adivinar la respuesta? si quieres intentarlo debes escribir 'soy un zopenco'")
                if(pass3 == 'soy un zopenco') {
                    alert ("Si llegaste hasta acá definitivamente no entendiste el juego, perdiste por zopenco")
                } else {
                    alert("Felicitaciones has acertado!! te has ganado tu libertad")
                }
        } else {
            alert("Muy bien, has escapado! pero se que volverás a caer..")
        }
} else {
    alert("Has escapado! pero se que volverás a caer..")
}




