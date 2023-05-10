/** FUNCION PARA SELECCIONAR AEROPUERTO DESTINO/ORIGEN */
function seleccionarAeropuerto(modo, origen){
    let opcion, aeropuerto, salida 
    salida = true
    
    do {    
        opcion = parseInt(prompt(`Seleccione el aeropuerto de ${modo}:\n1 - BARILOCHE\n2 - CORDOBA\n3 - JUJUY`))
        switch(opcion){
            case 1:
                if(origen == "BARILOCHE")
                {
                    alert("El aeropuerto de destino no puede ser el mismo que el de origen. Intentelo nuevamente")
                    break
                }
                aeropuerto = "BARILOCHE"
                salida = false
                break
            case 2:
                if(origen == "CORDOBA")
                {
                    alert("El aeropuerto de destino no puede ser el mismo que el de origen. Intentelo nuevamente")
                    break
                }
                aeropuerto = "CORDOBA"
                salida = false
                break
            case 3:
                if(origen == "JUJUY")
                {
                    alert("El aeropuerto de destino no puede ser el mismo que el de origen. Intentelo nuevamente")
                    break
                }
                aeropuerto = "JUJUY"
                salida = false
                break
            default:
                alert('Debe seleccionar un aeropuerto válido')
                break
        }
    } while (salida);

    return aeropuerto
}

//FUNCION QUE PERMITE SELECCIONAR LA CANTIDAD DE PASAJEROS DE UN VUELO
function seleccionarPasajeros(){

    let cantidadPasajeros

    do {
        cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros - (Tarifa base por pasajero $7500)"))
        
    } while (cantidadPasajeros <= 0);

    return cantidadPasajeros
}

//FUNCION QUE PERMITE SELECCIONAR LA FECHA DE PARTIDA
function seleccionarFechaVuelo(){
    let fechaIda, formato
    formato = /[0-3]\d\/[0-1]\d\/[2][3-4]/ //EXPRESION REGULAR QUE CONTROLA EL FORMATO DE LA FECHA INGRESADA

    do {
        fechaIda = prompt(`Ingresar la fecha de vuelo en formato (dd/mm/aa)`)
    } while ( !( formato.test(fechaIda) ) );

    return fechaIda
}

//FUNCION QUE PERMITE SELECCIONAR LA HORA DEL VUELO
function seleccionarHoraVuelo(){
    let hora

    do {
        hora = parseInt(prompt(`Seleccione la hora del vuelo:\n1 - 06:00 AM ($13.000)\n2 - 10:00 AM ($15.000)\n3 - 18:00 PM ($17.000)\n4 - 23:00 PM ($10.000)`))
    } while ( !( hora > 0 && hora < 5 ) );

    return hora
}

//FUNCION QUE PERMITE SELECCIONAR EL TIPO DE EQUIPAJE
function seleccionarEquipaje(){
    let equipaje

    do {
        equipaje = parseInt(prompt(`Ingrese el tipo de equipaje:\n1 - Hasta 10Kg ($3.000)\n2 - Hasta 20Kg (6.000)\n3 - Hasta 30Kg ($10.000)\n4 - Sin equipaje`))
    } while ( !(equipaje > 0 && equipaje < 5) );

    return equipaje
}

//FUNCION QUE PERMITE SELECCIONAR COBERTURA MEDICA
function seleccionarCobertura(){
    let coberturaMedica
    
    do {
        coberturaMedica = parseInt(prompt("¿Desea contratar cobertura médica?  ($2000)   1 - SI / 0 - NO"))
        if(coberturaMedica != 1 && coberturaMedica != 0){
            alert("La opcion ingresada es incorrecta")
        }
    } while ( !(coberturaMedica == 1 || coberturaMedica == 0) );

    return coberturaMedica
}

//METODO QUE MUESTRA UN RESUMEN DE VUELO SEGUN LOS DATOS ENVIADOS COMO PARAMETRO
function resumen(ORIGEN, DESTINO, cantidadPasajeros, fechaVuelo, horaVuelo, equipaje, coberturaMedica, nombre, apellido, dni, tarifaTotal){
    return `************RESUMEN DE SU VUELO************\n\nAeropuerto origen: ${ORIGEN}\nAeropuerto destino: ${DESTINO}\nCantidad de pasajeros: ${cantidadPasajeros}
    \nFecha de vuelo: ${fechaVuelo}\nHora de vuelo: ${horaVuelo}\nEquipaje: ${equipaje}\nCobertura médica: ${coberturaMedica ? "Si" : "No"}
    \nNombre: ${nombre}\nApellido: ${apellido}\nDNI: ${dni}\n\nTOTAL: $${tarifaTotal} AR`
}