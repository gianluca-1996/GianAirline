/**ALGORITMO SIMULADOR DE RESERVA DE VUELO
 * SELECCIONAR AEROPUERTO DE ORIGEN
 *     ''      AEROPUERTO DE DESTINO
 *     ''      LA CANTIDAD DE PASAJEROS
 *             INGRESAR DATOS PERSONALES
 *     ''      LA FECHA DE VUELO
 *     ''      EL HORARIO DE VUELO
 *     ''      EL TIPO DE EQUIPAJE (KG)
 *     ''      ADICION DE COBERTURA MEDICA
 * GENERAR ID DE VUELO
 * MOSTRAR RESUMEN
 */


/**RESUMEN DE LA APLICACION
 * SE IMPLEMENTA EL CODIGO PARA REALIZAR UNA RESERVA DE VUELO.
 * SE APLICA EL USO DE:
 * ESTRUCTURAS CONDICIONALES
 * ESTRUCTURAS DE REPETICIÓN
 * CLASES
 * INSTANCIAS DE LAS CLASES (OBJETOS)
 * FUNCIONES (ANONIMAS, DE ORDEN SUPERIOR)
 * ARRAYS Y SUS METODOS
 * SE SEPARA EN ARCHIVOS LAS CLASES: AEROPUERTO, RESERVA, PASAJERO
 */

let aeropuertoOrigen = new Aeropuerto()
let aeropuertoDestino = new Aeropuerto()
let pasajeros = new Array()
let atributo, nodoOption
let aeropuertos = Aeropuerto.cargarAeropuertos()
let selectOrigen = document.getElementById("select-origen")
let selectDestino = document.getElementById("select-destino")
let cantPasajerosElmt = document.getElementById("cantidad-pasajeros")
let btnBuscar = document.getElementById("btn-buscar")


aeropuertos.forEach((elemento) => {
    nodoOption = document.createElement("option")
    nodoOption.innerText = elemento.nombre
    atributo = document.createAttribute("value")
    atributo.value = elemento.nombre
    nodoOption.setAttributeNode(atributo)
    selectOrigen.appendChild(nodoOption)
})

aeropuertos.forEach((elemento) => {
    nodoOption = document.createElement("option")
    nodoOption.innerText = elemento.nombre
    atributo = document.createAttribute("value")
    atributo.value = elemento.nombre
    nodoOption.setAttributeNode(atributo)
    selectDestino.appendChild(nodoOption)
})

for(let i = 1; i <= 4; i++){
    nodoOption = document.createElement("option")
    nodoOption.innerText = i
    atributo = document.createAttribute("value")
    atributo.value = i
    nodoOption.setAttributeNode(atributo)
    cantPasajerosElmt.appendChild(nodoOption)
}


btnBuscar.addEventListener("click", () => {
    if(selectOrigen.value == selectDestino.value){
        alert("ERROR - LOS AEROPUERTOS DE ORIGEN Y DESTINO NO DEBEN SER IGUALES")
        return 0
    }

    if(selectOrigen.value == "Aeropuerto Origen" || selectDestino.value == "Aeropuerto Destino"){
        alert("ERROR - DEBE SELECCIONAR UN AEROPUERTO VÁLIDO")
        return 0
    }

    if(cantPasajerosElmt.value == "Pasajeros"){
        alert("ERROR - DEBE SELECCIONAR UNA CANTIDAD DE PASAJEROS VÁLIDA")
        return 0
    }

    localStorage.clear()
    localStorage.setItem("origen", selectOrigen.value)
    localStorage.setItem("destino", selectDestino.value)
    localStorage.setItem("pasajeros", cantPasajerosElmt.value)
    localStorage.setItem("aeropuertos", JSON.stringify(aeropuertos))
    window.open("html/reserva.html", "reserva")
})