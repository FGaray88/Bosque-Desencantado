
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
