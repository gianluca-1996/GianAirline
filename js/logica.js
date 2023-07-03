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
let aeropuertos = new Array()
let selectOrigen = document.getElementById("select-origen")
let selectDestino = document.getElementById("select-destino")
let cantPasajerosElmt = document.getElementById("cantidad-pasajeros")
let btnBuscar = document.getElementById("btn-buscar")

fetch('/js/airports.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(elemento => {
            aeropuertos.push(new Aeropuerto(elemento.nombre, elemento.tarifaBase))
            nodoOption = document.createElement("option")
            nodoOption.innerText = elemento.nombre
            atributo = document.createAttribute("value")
            atributo.value = elemento.nombre
            nodoOption.setAttributeNode(atributo)
            selectOrigen.appendChild(nodoOption)
            nodoOption = document.createElement("option")
            nodoOption.innerText = elemento.nombre
            atributo = document.createAttribute("value")
            atributo.value = elemento.nombre
            nodoOption.setAttributeNode(atributo)
            selectDestino.appendChild(nodoOption)
        })
    })

for(let i = 1; i <= 4; i++){
    nodoOption = document.createElement("option")
    nodoOption.innerText = i
    atributo = document.createAttribute("value")
    atributo.value = i
    nodoOption.setAttributeNode(atributo)
    cantPasajerosElmt.appendChild(nodoOption)
}


btnBuscar.addEventListener("click", e => {
    e.preventDefault()
    
    if(selectOrigen.value == selectDestino.value){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'LOS AEROPUERTOS DE ORIGEN Y DESTINO NO DEBEN SER IGUALES'
          })
        return 0
    }

    if(selectOrigen.value == "Aeropuerto Origen" || selectDestino.value == "Aeropuerto Destino"){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'DEBE SELECCIONAR UN AEROPUERTO VALIDO'
          })
        return 0
    }

    if(cantPasajerosElmt.value == "Pasajeros"){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'DEBE SELECCIONAR LA CANTIDAD DE PASAJEROS'
          })
        return 0
    }

    Swal.fire({
        title: 'Buscando vuelos disponibles...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        }
    })

    setTimeout(() => {
        window.open("/html/reserva.html")
    }, 2000)

    localStorage.clear()
    localStorage.setItem("origen", selectOrigen.value)
    localStorage.setItem("destino", selectDestino.value)
    localStorage.setItem("pasajeros", cantPasajerosElmt.value)
    localStorage.setItem("aeropuertos", JSON.stringify(aeropuertos))
})