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


//GENERA UN OBJETO RESERVA E INVOCA SUS FUNCIONALIDADES PARA UNA NUEVA RESERVA DE VUELO
let reserva = new Reserva()

reserva.seleccionarOrigen()
reserva.seleccionarDestino()
reserva.seleccionarPasajeros()
reserva.ingresarDatosPasajeros()
reserva.seleccionarFechaVuelo()
reserva.seleccionarHoraVuelo()
reserva.seleccionarEquipaje()
reserva.seleccionarCobertura()
reserva.generarId() //EN FUTURAS ENTREGAS ESTE METODO SERA LLAMADO AUTOMATICAMENTE PARA GENERAR EL ID DE VUELO
reserva.mostrarResumen()


//EL SIGUIENTE CODIGO IMPLEMENTA EL USO DE DOM PARA FUTURAS ENTREGAS DEL PROYECTO
/*
//CARGA DE AEROPUERTOS DISPONIBLES PARA SELECCIONAR
let aeropuertos = Aeropuerto.cargarAeropuertos()
let selectOrigen = document.getElementById("select-origen")
let selectDestino = document.getElementById("select-destino")
let cantidadPasajeros = document.getElementById("cantidad-pasajeros")
let atributoAeropuerto, nodoOption, atributoPasajeros, btnBuscar

aeropuertos.forEach((elemento) => {
    nodoOption = document.createElement("option")
    nodoOption.innerText = elemento.nombre
    atributoAeropuerto = document.createAttribute("value")
    atributoAeropuerto.value = elemento.nombre
    nodoOption.setAttributeNode(atributoAeropuerto)
    selectOrigen.appendChild(nodoOption)
})

aeropuertos.forEach((elemento) => {
    nodoOption = document.createElement("option")
    nodoOption.innerText = elemento.nombre
    atributoAeropuerto = document.createAttribute("value")
    atributoAeropuerto.value = elemento.nombre
    nodoOption.setAttributeNode(atributoAeropuerto)
    selectDestino.appendChild(nodoOption)
})

for(let i = 1; i <= 4; i++){
    nodoOption = document.createElement("option")
    nodoOption.innerText = i
    atributoPasajeros = document.createAttribute("value")
    atributoPasajeros.value = i
    nodoOption.setAttributeNode(atributoPasajeros)
    cantidadPasajeros.appendChild(nodoOption)
}

btnBuscar = document.getElementById("btn-buscar")
btnBuscar.addEventListener("click", () => {
    console.log(`El aeropuerto de origen es: ${selectOrigen.value}\nEl aeropuerto destino es: ${selectDestino.value}\nLa cantidad de pasajeros es: ${cantidadPasajeros.value}`)
})
*/