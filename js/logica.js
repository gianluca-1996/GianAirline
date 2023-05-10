/**ALGORITMO SIMULADOR DE RESERVA DE VUELO
 * SELECCIONAR AEROPUERTO DE ORIGEN
 *     ''      AEROPUERTO DE DESTINO
 *     ''      LA CANTIDAD DE PASAJEROS
 *     ''      LA FECHA DE VUELO
 *     ''      EL HORARIO DE VUELO
 *     ''      EL TIPO DE EQUIPAJE (KG)
 *     ''      ADICION DE COBERTURA MEDICA
 * INGRESAR DATOS PERSONALES
 * RESUMEN Y CONFIRMACION
 * PAGO
 * MOSTRAR EL RESUMEN Y LA CONFIRMACION DE LA RESERVA
 */


/**VARIABLES UTILIZADAS */
let cantidadPasajeros, fechaVuelo, horaVuelo, equipaje, nombre,
    apellido, dni, coberturaMedica, confirmacionVuelo, continuar, tarifaTotal

// SELECCIONAR AEROPUERTO DE ORIGEN Y DESTINO
const ORIGEN = seleccionarAeropuerto('ORIGEN')
const DESTINO = seleccionarAeropuerto('DESTINO', ORIGEN)
tarifaTotal = 7500 // 7500 TARIFA BASE DE VUELO POR PERSONA


cantidadPasajeros = seleccionarPasajeros() //SELECCIONAR LA CANTIDAD DE PASAJEROS
tarifaTotal *= cantidadPasajeros //ACTUALIZA TARIFA TOTAL * CANTIDAD DE PASAJEROS
fechaVuelo = seleccionarFechaVuelo() //SELECCIONAR FECHA DE VUELO
horaVuelo = seleccionarHoraVuelo() //SELECCIONAR LA HORA DE VUELO

//ACTUALIZA TARIFA TOTAL SEGUN LA HORA DE VUELO SELECCIONADA
switch(horaVuelo){
    case 1:
        tarifaTotal += 13000
        horaVuelo = "06:00 AM"
        break
        case 2:
    tarifaTotal += 15000
    horaVuelo = "10:00 AM"
    break
    case 3:
        tarifaTotal += 17000
        horaVuelo = "18:00 PM"
        break
        case 4:
    tarifaTotal += 10000
    horaVuelo = "23:00 PM"
    break
}

//SELECCIONAR EL EQUIPAJE
equipaje = seleccionarEquipaje()

////ACTUALIZA TARIFA TOTAL SEGUN EL EQUIPAJE
switch(equipaje){
    case 1:
        tarifaTotal += 3000
        equipaje = "Hasta 10KG"
        break
    case 2:
        tarifaTotal += 6000
        equipaje = "Hasta 20KG"
        break
    case 3:
        tarifaTotal += 10000
        equipaje = "Hasta 30KG"
        break
    case 4:
        equipaje = "Sin equipaje extra"
        break
}

//ADICION DE COBERTURA MEDICA
coberturaMedica = seleccionarCobertura()

if(coberturaMedica == 1){
    tarifaTotal += 2000
}

//INGRESO DATOS PERSONALES
nombre = prompt("Ingrese su nombre")
apellido = prompt("Ingrese su apellido")
dni = parseInt(prompt("Ingrese su dni sin puntos ni espacios"))

//RESUMEN Y CONFIRMACION
alert( resumen(ORIGEN, DESTINO, cantidadPasajeros, fechaVuelo, horaVuelo, equipaje, coberturaMedica, nombre, apellido, dni, tarifaTotal) )

//CONFIRMACION VUELO
continuar = true

do {
    confirmacionVuelo = parseInt(prompt("¿Desea confirmar su reserva de vuelo?   1 - Si / 0 - No"))

    if(confirmacionVuelo == 1 || confirmacionVuelo == 0){
        continuar = false
    }
} while (continuar);

if(confirmacionVuelo){
    let min, max, idVuelo

    min = Math.ceil(10000)
    max = Math.floor(20000)
    idVuelo = Math.floor(Math.random() * (max - min) + min)
    
    alert(`Su numero de vuelo es: ${idVuelo}\nEn su casilla de correo (consola del navegador) recibirá los detalles para realizar el pago dentro de las próximas 12hs`)
    console.log(`Usted deberá abonar la siguiente reserva:\n`)
    console.log(resumen(ORIGEN, DESTINO, cantidadPasajeros, fechaVuelo, horaVuelo, equipaje, coberturaMedica, nombre, apellido, dni, tarifaTotal))
    console.log(`\nAlias CBU: GIAN.AIRLINE.AVION`)
}