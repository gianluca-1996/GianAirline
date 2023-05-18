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

let reserva = new Reserva()

reserva.seleccionarOrigen()
reserva.seleccionarDestino()
reserva.seleccionarPasajeros()
reserva.ingresarDatosPasajeros()
reserva.seleccionarFechaVuelo()
reserva.seleccionarHoraVuelo()
reserva.seleccionarEquipaje()
reserva.seleccionarCobertura()
reserva.generarId()
reserva.mostrarResumen()