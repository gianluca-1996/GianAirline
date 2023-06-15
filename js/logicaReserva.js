let reserva, checkInputs , fechaVuelo, mesActual, diaActual, fechaActual, divTotal, contenedor2,
    coberturaMedica, equipaje, horaVuelo, total, formVuelo, inputFecha, fechaMin, formulariosPasajeros,
    divResumen, aeropuertos, aeropuertoOrigen, aeropuertoDestino, cantidadPasajeros, btnEnviarDatos,
    hidden, btnConfirmarReserva, pasajeros, formPasajero, operacionFinalizada, btnVolver

formulariosPasajeros = document.getElementById("formularios-pasajeros")
formPasajero = document.getElementById("form-pasajero")
formulariosPasajeros.hidden = true
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
divResumen.innerHTML = `<div><h4>Origen</h4></div>
<div>${aeropuertoOrigen.nombre}</div>
<div><h4>Destino</h4></div>
<div>${aeropuertoDestino.nombre}</div>
<div><h4>Pasajeros</h4></div>
<div>${cantidadPasajeros}</div>`


divTotal.innerHTML = `<h4>Subtotal: $${total}</h4>`

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

    if(coberturaMedica == "true"){
        total += 3000
        coberturaMedica = true
    }
    else{
        coberturaMedica = false
    }
    

    //CREA LOS FORMULARIOS SEGUN LA CANTIDAD DE PASAJEROS
    for(let i = 1; i <= cantidadPasajeros; i++){
        formPasajero.innerHTML += `
                        <div>
                            <h3>Datos Pasajero ${i}</h3>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control nombre" placeholder="Nombre" aria-label="Nombre" required>
                                    <div class="valid-feedback">
                                        Bien!
                                    </div>
                                    <div class="invalid-feedback">
                                        Debe ingresar un nombre.
                                    </div>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control apellido" placeholder="Apellido" aria-label="Apellido" required>
                                    <div class="valid-feedback">
                                        Bien!
                                    </div>
                                    <div class="invalid-feedback">
                                        Debe ingresar un apellido.
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control direccion" placeholder="Direccion" aria-label="Direccion" required>
                                    <div class="valid-feedback">
                                        Bien!
                                    </div>
                                    <div class="invalid-feedback">
                                    Debe ingresar una direccion.
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="number" class="form-control edad" placeholder="Edad" aria-label="Edad" min="12" max="120" required>
                                    <div class="valid-feedback">
                                        Bien!
                                    </div>
                                    <div class="invalid-feedback">
                                    La edad debe ser entre 12-120
                                    </div>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control dni" placeholder="DNI" aria-label="DNI" required>
                                    <div class="valid-feedback">
                                        Bien!
                                    </div>
                                    <div class="invalid-feedback">
                                    Debe ingresar el DNI
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="email" class="form-control email" placeholder="Email" aria-label="Email" required>
                                    <div class="valid-feedback">
                                        Bien!
                                    </div>
                                    <div class="invalid-feedback">
                                    Debe ingresar un email
                                    </div>
                                </div>
                            </div>
                        </div>`
                
    }
    
    //AGREGA BOTON PARA ENVIAR LOS FORMULARIOS DE LOS PASAJEROS Y CONFIRMAR LA RESERVA
    formPasajero.innerHTML += `<div><button class="btn btn-outline-warning" id="btn-confirmar-reserva">Confirmar reserva</button></div>`

    //MUESTRA LOS FORMULARIOS DE PASAJEROS Y OCULTA EL FORMULARIO DE DATOS DEL VUELO
    formulariosPasajeros.hidden = false
    contenedor2.hidden = true

    //ACTUALIZA EL RESUMEN EN PANTALLA
    divResumen.innerHTML += `<div><h4>Fecha</h4></div>
    <div>${fechaVuelo}</div>
    <div><h4>Hora</h4></div>
    <div>${horaVuelo}</div>
    <div><h4>Equipaje</h4></div>
    <div>${equipaje}</div>
    <div><h4>Cobertura Médica</h4></div>
    <div>${coberturaMedica ? "SI" : "NO"}</div>`
    divTotal.innerHTML = `<h4>Subtotal: $${total}</h4>`
})

//CODIGO BOOTSTRAP PARA VALIDACIONES DENTRO DEL FORMULARIO DE PASAJEROS
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

    //CUANDO EL FORMULARIO ESTA OK SE EJECUTA EL CODIGO PARA CREAR LA RESERVA
    if(form.checkValidity()){
        event.preventDefault()
        let nombres, apellidos, direcciones, dni, edades, emails, resumenAside, modal, cuerpoModalResumen

        operacionFinalizada = document.getElementById("operacionFinalizada")
        resumenAside = document.getElementById("resumenAside")
        modal = new bootstrap.Modal(document.getElementById('resumenModal')) //CAPTURA EL MODAL DEL HTML PARA PODER MOSTRARLO CON LOS DATOS DE LA RESERVA
        cuerpoModalResumen = document.getElementById("cuerpoModalResumen")

        //OCULTA LOS FORMULARIOS
        formulariosPasajeros.hidden = true
        resumenAside.hidden = true

        //CAPTURA DATOS DE LOS PASAJEROS
        nombres = document.getElementsByClassName("nombre")
        apellidos = document.getElementsByClassName("apellido")
        direcciones = document.getElementsByClassName("direccion")
        dni = document.getElementsByClassName("dni")
        edades = document.getElementsByClassName("edad")
        emails = document.getElementsByClassName("email")


        //CREA LOS OBJETOS PASAJERO
        pasajeros = new Array()

        for(let i = 0; i < cantidadPasajeros; i++){
            pasajeros.push(new Pasajero(nombres[i].value, apellidos[i].value, dni[i].value, direcciones[i].value, edades[i].value, emails[i].value))
        }
        
        //CREA EL OBJETO RESERVA
        reserva = new Reserva(new Aeropuerto(aeropuertoOrigen.nombre, aeropuertoOrigen.tarifaBase), new Aeropuerto(aeropuertoDestino.nombre, aeropuertoDestino.tarifaBase),
                                fechaVuelo, horaVuelo, pasajeros, total, equipaje, coberturaMedica)


        cuerpoModalResumen.innerHTML = `<div><h4>Vuelo N°: ${reserva.id}</h4></div>
        <div><h4>Origen: ${reserva.origen.nombre}</h4></div>
        <div><h4>Destino: ${reserva.destino.nombre}</h4></div>
        <div><h4>Pasajeros: ${reserva.pasajeros.length}</h4></div>
        <div><h4>Fecha: ${reserva.fecha}</h4></div>
        <div><h4>Hora: ${reserva.hora}</h4></div>
        <div><h4>Equipaje: ${reserva.equipaje}</h4></div>
        <div><h4>Cobertura Médica: ${reserva.coberturaMedica ? "Si" : "No"}</h4></div>
        <div><h3>Total: $${reserva.tarifa}</h3></div>`
        divTotal.innerHTML = `<h4>Subtotal: $${total}</h4>`

        //MUESTRA UN MENSAJE DE OPERACION EXITOSA
        operacionFinalizada.innerHTML = `<div><h4>OPERACION REALIZADA CON EXITO!</h4>
        <h4>¡Gracias por utilizar nuestro sistema de reservas!</h4></div>
        <a href="../index.html"><button type="button" class="btn btn-outline-warning" id="btn-inicio">Inicio</button></a>`
        operacionFinalizada.hidden = false

        modal.show() //MUESTRA EL MODAL
        console.log(reserva)
    }

    form.classList.add('was-validated')
    }, false)
})

//ASIGNA EL EVENTO AL BOTON btn-volver PARA VOLVER A MOSTRAR EL FOMULARIO ANTERIOR
btnVolver = document.getElementById("btn-volver")
btnVolver.addEventListener("click", () => {
    let elementos = divResumen.getElementsByTagName("div")
    let elementosFormDiv = formPasajero.getElementsByTagName("*")

    //ELIMINA LOS ELEMENTOS DEL FORMULARIO DE PASAJEROS
    for(let i = 0; i < elementosFormDiv.length; i++){
        elementosFormDiv[i].remove()
    }

    //ELIMINA LOS ELEMENTOS DEL RESUMEN
    for(let i = 0; i < elementos.length; i++){
        elementos[i].remove()
    }
    
    //MOSTRAR RESUMEN HASTA EL MOMENTO
    divResumen.innerHTML = `<div><h4>Origen</h4></div>
    <div>${aeropuertoOrigen.nombre}</div>
    <div><h4>Destino</h4></div>
    <div>${aeropuertoDestino.nombre}</div>
    <div><h4>Pasajeros</h4></div>
    <div>${cantidadPasajeros}</div>`

    //ACTUALIZA EL VALOR HASTA EL MOMENTO DE LA TARIFA
    total = aeropuertoOrigen.tarifaBase + aeropuertoDestino.tarifaBase + (7000 * cantidadPasajeros)
    divTotal.innerHTML = `<h4>Subtotal: $${total}</h4>`
    
    //MUESTRA EL FORMULARIO DE VUELO Y OCULTA EL DE LOS PASAJEROS
    contenedor2.hidden = false
    formulariosPasajeros.hidden = true
})