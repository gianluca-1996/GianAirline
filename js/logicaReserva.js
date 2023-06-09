let reserva, checkInputs , fechaVuelo, mesActual, diaActual, fechaActual, divTotal, contenedor2,
    coberturaMedica, equipaje, horaVuelo, total, formVuelo, inputFecha, fechaMin, formulariosPasajeros,
    divResumen, aeropuertos, aeropuertoOrigen, aeropuertoDestino, cantidadPasajeros, btnEnviarDatos,
    hidden, btnConfirmarReserva, pasajeros, formPasajero

formulariosPasajeros = document.getElementById("formularios-pasajeros")
formPasajero = document.getElementById("form-pasajero")
hidden = document.createAttribute("hidden")
formulariosPasajeros.setAttributeNode(hidden)
fechaVuelo = null
btnEnviarDatos = document.getElementById("btn-enviar-datos")
inputFecha = document.getElementById("inputFecha")
fechaMin = document.createAttribute("min")
fechaActual = new Date()
divResumen = document.getElementById("resumen")
aeropuertos = JSON.parse(localStorage.getItem("aeropuertos"))
aeropuertoOrigen = aeropuertos.find((elemento) => elemento.nombre == localStorage.getItem("origen"))
aeropuertoDestino = aeropuertos.find((elemento) => elemento.nombre == localStorage.getItem("destino"))
cantidadPasajeros = parseInt(localStorage.getItem("pasajeros"))
divTotal = document.getElementById("total")
contenedor2 = document.getElementById("contenedor-2")

total = aeropuertoOrigen.tarifaBase + aeropuertoDestino.tarifaBase + (7000 * cantidadPasajeros)


//FIJA LA OPCION FECHA MINIMA DE VUELO (DIA ACTUAL) PARA QUE NO SE PUEDA ELEGIR UNA FECHA ANTERIOR
if(fechaActual.getMonth() < 10){
    mesActual = new String("0" + `${fechaActual.getMonth() + 1}`)
}
else{
    mesActual = new String(fechaActual.getMonth() + 1)
}

if(fechaActual.getDate() < 10)
{
    diaActual = new String("0" + fechaActual.getDate())
}
else{
    diaActual = new String(fechaActual.getDate())
}
//AGREGA EL ATRIBUTO MIN AL ELEMENTO INPUTFECHA
fechaMin.value = `${fechaActual.getFullYear()}-${mesActual}-${diaActual}`
inputFecha.setAttributeNode(fechaMin)

//MOSTRAR RESUMEN HASTA EL MOMENTO
divResumen.innerHTML = `<h4>Origen: ${aeropuertoOrigen.nombre}</h4>
<h4>Destino: ${aeropuertoDestino.nombre}</h4>
<h4>Pasajeros: ${cantidadPasajeros}</h4>`

divTotal.innerHTML = `<h4>Subotal: $${total}</h4>`

//EVENTO CAPTURADO AL ENVIAR EL FORMULARIO form-vuelo
btnEnviarDatos.addEventListener("click", () => {
    let valores //AUXILIAR PARA OBTENER LOS VALORES DE LOS RADIOS SELECCIONADOS
    
    fechaVuelo = inputFecha.value
    if(!fechaVuelo){
        alert("ERROR - DEBE SELECCIONAR UNA FECHA DE VUELO")
        return
    }
    
    checkInputs = document.querySelectorAll(".form-check-input:checked") //OBTIENE LOS INPUT RADIO TILDADOS
    if(checkInputs.length < 3){
        alert("ERROR - FALTA SELECCIONAR OPCIONES DE RESERVA")
        return
    }
    
    valores = new String(checkInputs[0].value).split(',')   //OBTIENE EL VALOR DE LA HORA Y LA TARIFA
    horaVuelo = valores[0]
    total += parseInt(valores[1])
    valores = new String(checkInputs[1].value).split(',') //OBTIENE EL VALOR DE EL EQUIPAJE Y LA TARIFA
    equipaje = valores[0]
    total += parseInt(valores[1])
    coberturaMedica = checkInputs[2].value

    if(coberturaMedica){
        total += 3000
    }
    

    
    for(let i = 1; i <= cantidadPasajeros; i++){
        formPasajero.innerHTML += `
                <h3>Datos Pasajero ${i}</h3>
                <div class="row">
                    <div class="col">
                    <input type="text" class="form-control nombre" placeholder="Nombre" aria-label="Nombre" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                    <div class="col">
                    <input type="text" class="form-control apellido" placeholder="Apellido" aria-label="Apellido" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                    Please choose a username.
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control direccion" placeholder="Direccion" aria-label="Direccion" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                        Please choose a username.
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <input type="number" class="form-control edad" placeholder="Edad" aria-label="Edad" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                        Please choose a username.
                        </div>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control dni" placeholder="DNI" aria-label="DNI" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                        Please choose a username.
                        </div>
                    </div>
                </div>`
    }
    
    formPasajero.innerHTML += `<button class="btn btn-outline-warning" id="btn-confirmar-reserva">Confirmar reserva</button>`
    //btnConfirmarReserva = document.getElementById("btn-confirmar-reserva")    
    //btnConfirmarReserva.addEventListener("click", creaReserva)

    
    
    //MUESTRA LOS FORMULARIOS DE PASAJEROS Y OCULTA EL FORMULARIO DE DATOS DEL VUELO
    formulariosPasajeros.removeAttribute("hidden")
    contenedor2.setAttributeNode(hidden)
})

//CODIGO BOOTSTRAP PARA VALIDACIONES
'use strict'
    
// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    if(form.checkValidity()){
        event.preventDefault()
        let nombres, apellidos, direcciones, dni, edades

        //CAPTURA DATOS DE LOS PASAJEROS
        nombres = document.getElementsByClassName("nombre")
        apellidos = document.getElementsByClassName("apellido")
        direcciones = document.getElementsByClassName("direccion")
        dni = document.getElementsByClassName("dni")
        edades = document.getElementsByClassName("edad")

        //CREA LOS OBJETOS PASAJERO
        pasajeros = new Array()

        for(let i = 0; i < cantidadPasajeros; i++){
            pasajeros.push(new Pasajero(nombres[i].value, apellidos[i].value, dni[i].value, direcciones[i].value, edades[i].value))
        }
        
        //CREA EL OBJETO RESERVA
        reserva = new Reserva(aeropuertoOrigen, aeropuertoDestino, fechaVuelo, horaVuelo, pasajeros, total, equipaje, coberturaMedica)

        console.log(reserva)    
    }

    form.classList.add('was-validated')
    }, false)
})