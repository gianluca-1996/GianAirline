class Reserva{
    id
    origen;
    destino;
    fecha;
    hora;
    pasajeros;
    tarifa;
    equipaje;
    coberturaMedica;

    seleccionarOrigen(){
        let aeropuerto, salida
        salida = true

        do {    
            aeropuerto = prompt("INTRODUZCA EL AEROPUERTO DE ORIGEN")
        
            if(aeropuerto != ""){
                this.origen = aeropuerto
                salida =false
            }
            else{
                alert("ERROR AL INTRODUCIR EL AEROPUERTO DE ORIGEN")
            }
        } while (salida);
    }

    seleccionarDestino(){
        let salida = true
        let aeropuerto
        
        do {    
            aeropuerto = prompt("INTRODUZCA EL AEROPUERTO DE DESTINO")

            if( (aeropuerto != this.origen) && (aeropuerto != "") ){
                this.destino = aeropuerto
                salida = false
            }
            else{
                alert("ERROR AL INTRODUCIR EL AEROPUERTO DE DESTINO")
            }
        } while (salida);
    }

    seleccionarPasajeros(){
        let cantidadPasajeros
        let pasajeros = new Array()

        do {
            cantidadPasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros - (Tarifa base por pasajero $7500)"))
            
        } while (cantidadPasajeros <= 0);

        for(let i = 0; i < cantidadPasajeros; i++){
            pasajeros[i] = new Pasajero()   
        }

        this.pasajeros = pasajeros
        this.tarifa = 7500 * pasajeros.length
    }

    //METODO QUE PERMITE SELECCIONAR LA FECHA DE PARTIDA
    seleccionarFechaVuelo(){
        let fechaIda, salida, partesFecha, dia, mes, anio
        salida = true

        do {
            fechaIda = new String(prompt(`Ingresar la fecha de vuelo en formato (dd/mm/aa)\nPor ejemplo: 06/11/23`))
            partesFecha = fechaIda.split("/")
            dia = parseInt(partesFecha[0])

            if(dia <= 31){
                mes = parseInt(partesFecha[1])

                if(mes <= 12){
                    anio = parseInt(partesFecha[2])

                    if( (anio == 23) || (anio == 24) ){
                        salida = false
                    }
                }
            }

        } while ( salida );

        this.fecha = fechaIda
    }
 
    //METODO QUE PERMITE SELECCIONAR LA HORA DEL VUELO
    seleccionarHoraVuelo(){
        let hora

        do {
            hora = parseInt(prompt(`Seleccione la hora del vuelo:\n1 - 06:00 AM ($13.000)\n2 - 10:00 AM ($15.000)\n3 - 18:00 PM ($17.000)\n4 - 23:00 PM ($10.000)`))
        } while ( !( hora > 0 && hora < 5 ) );

        switch(hora){
            case 1:
                this.tarifa += 13000
                this.hora = "06:00 AM"
                break
            case 2:
                this.tarifa += 15000
                this.hora = "10:00 AM"
                break
            case 3:
                this.tarifa += 17000
                this.hora = "18:00 PM"
                break
            case 4:
                this.tarifa += 10000
                this.hora = "23:00 PM"
                break
        }
    }

    //METODO QUE PERMITE SELECCIONAR EL TIPO DE EQUIPAJE
    seleccionarEquipaje(){
        let equipaje

        do {
            equipaje = parseInt(prompt(`Ingrese el tipo de equipaje:\n1 - Hasta 10Kg ($3.000)\n2 - Hasta 20Kg (6.000)\n3 - Hasta 30Kg ($10.000)\n4 - Sin equipaje`))
        } while ( !(equipaje > 0 && equipaje < 5) );

        //ACTUALIZA TARIFA TOTAL SEGUN EL EQUIPAJE
        switch(equipaje){
            case 1:
                this.tarifa += 3000
                this.equipaje = "Hasta 10KG"
                break
            case 2:
                this.tarifa += 6000
                this.equipaje = "Hasta 20KG"
                break
            case 3:
                this.tarifa += 10000
                this.equipaje = "Hasta 30KG"
                break
            case 4:
                this.equipaje = "Sin equipaje extra"
                break
        }
    }

    //METODO QUE PERMITE SELECCIONAR COBERTURA MEDICA
    seleccionarCobertura(){
        let coberturaMedica
        
        do {
            coberturaMedica = parseInt(prompt("¿Desea contratar cobertura médica?  ($2000)   1 - SI / 0 - NO"))
            if(coberturaMedica != 1 && coberturaMedica != 0){
                alert("La opcion ingresada es incorrecta")
            }
        } while ( !(coberturaMedica == 1 || coberturaMedica == 0) );

        if(coberturaMedica == 1){
            this.tarifa += 2000
            this.coberturaMedica = "Si"
        }
        else{
            this.coberturaMedica = "No"
        }
    }

    ingresarDatosPasajeros(){
        let cantidad = 1
        let nombre, apellido, dni

        for(let objeto of this.pasajeros){
            alert(`Ingreso de datos del pasajero ${cantidad}`)
            nombre = prompt("Ingresar nombre:")
            apellido = prompt("Ingresar apellido:")
            dni = prompt("Ingresar dni:")
            objeto.setNombre(nombre)
            objeto.setApellido(apellido)
            objeto.setDni(dni)
            cantidad++
        }
    }

    generarId(){
        let min, max
        min = Math.ceil(10000)
        max = Math.floor(20000)
        this.id = Math.floor(Math.random() * (max - min) + min)
    }

    //METODO QUE MUESTRA UN RESUMEN DE VUELO SEGUN LOS DATOS ENVIADOS COMO PARAMETRO
    mostrarResumen(){
        let cantidad = 1

        alert(`************RESUMEN DE SU VUELO************\n\nAeropuerto origen: ${this.origen}\nAeropuerto destino: ${this.destino}\nCantidad de pasajeros: ${this.pasajeros.length}
        \nFecha de vuelo: ${this.fecha}\nHora de vuelo: ${this.hora}\nEquipaje: ${this.equipaje}\nCobertura médica: ${this.coberturaMedica}\nID reserva: ${this.id}`)
        for(let objeto of this.pasajeros){
            alert(`PASAJERO ${cantidad}\nNombre: ${objeto.getNombre()}\nApellido: ${objeto.getApellido()}\nDni: ${objeto.getDni()}`)
            cantidad++
        }

        alert("TARIFA TOTAl: $" + this.tarifa)
    }
}