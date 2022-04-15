//1 Intro

//alert()

//Funciones

// Declaracion de una funcion

/* let num1 = "5"
let num2 = 3

function sumar() {
    //console.log(2 + 2);
    //alert(2+2)
    //document.write(2+2)
    //resultado.innerHTML = 2+2
    console.log(num1 + num2)
}

//llamar

sumar() */


//Expresion de funcion

/* const restar = function() {
    console.log(num1 - num2)
}

//console.log(typeof restar)
restar(); */

/*
Funciones
prompt()
alert()
console.log()
console.log(parseInt(num1))
*/

/*
Metodos
console.log(num2.toString())
*/




/* //2 funciones
let num1 = 5
let num2 = 3

sumar()

function sumar() {
    console.log(num1 + num2)
}


restar()

let restar = function() {
    console.log(num1 - num2)
}
 */


/* // Parametros
function saludar(nombre, apellido){
//console.log(nombre, apellido)
//console.log("Hola " + nombre + " " + apellido)
document.write("Hola " + nombre + " " + apellido)
}
 */
//saludar()

//saludar("Adrian")

saludar("Adrian", "Gonzalez")


let nombre = prompt("Tu nombre")
let alimento = prompt("Alimento")

function comer(nombre, comida="Fideos"){
    //console.log(`${nombre} come ${comida}`)
    console.log(nombre + " come " + comida)
}

//comer(nombre)

comer(nombre, alimento)



let num1 = Number(prompt("Ingresar numero 1"))
let num2 = Number(prompt("Ingresar numero 2"))


function sumar(n1, n2){
    console.log(n1+n2)
}

sumar(num1, num2)

// si una funcion no requiere parametros no importa si se los paso
function saludar(){
    console.log("Hola a todos")
}

saludar(25)






-----------------------------------

Ejemplo


  let saldo = 5000;

  entrarAlCajero();

  function entrarAlCajero(){
      let tarjeta = confirm("Ingrese Tarjeta")
      ingresarClave(tarjeta)
  }

  function ingresarClave(t){
      if(t){
          let clave = prompt("Ingresar clave");
          validarClave(clave)
      }else {
          alert("Es necesaria una tarjeta")
      }
  }

  function validarClave(codigo){
      if(codigo === "1234"){
          seleccinarOperacion()
      }else {
          alert("clave incorrecta")
      }
  }

  function seleccinarOperacion(){
      console.log("1: retirar dinero")
      console.log("2: consultar saldo")
      console.log("3: Salir")
      console.log("------------------------")

      let op = prompt("Ingresar Opcion")
      switch(op){
          case "1":
              let monto = Number(prompt("Monto a retirar"))
              retirarDinero(monto)
              break;
          case "2": 
              consultarSaldo()
              break;
          case "3": 
              salir();
              break;
          default:
              console.log("Operacion Invalida")
              break;
      }
  }

  function retirarDinero(dinero){
      if(dinero> saldo){
          alert("Saldo Insuficiente")
      } else {
          saldo -= dinero;
          alert("retiraste " + dinero)
      }
      seleccinarOperacion()
  }

  function consultarSaldo(){
      alert("su saldo es: " + saldo)
      seleccinarOperacion()
  }

  function salir(){
      alert("Fin de la operacion")
  }




Retorno

/* function hacerAlgo(){
    let a=1
}

let resultado = hacerAlgo()
console.log(resultado) */


/* 
function sumar(a, b){
    return a + b;
}

let resultado = sumar("2", 4);
console.log(resultado) 
*/


let total = 0;

function agregarAlCarrito(precio){
    let algo = "Algo"
    console.log(algo)
    return total += precio
}

//console.log(algo)

function calcularImpuesto(total){
    return 1.21 * total;
}


total = agregarAlCarrito(400)
total = agregarAlCarrito(300)
total = agregarAlCarrito(200)

const totalPagar = calcularImpuesto(total)


console.log(total)
console.log("El total a pagar es " + totalPagar)


for(let i =0; i<10; i+=1){
    console.log(i)
}

console.log(i)





