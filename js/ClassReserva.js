class Reserva{
    id
    origen
    destino
    fecha
    hora
    pasajeros
    tarifa
    equipaje
    coberturaMedica

    constructor(origen, destino, fecha, hora, pasajeros, tarifa, equipaje, coberturaMedica){
        this.id = this.generaId()
        this.origen = origen
        this.destino = destino
        this.fecha = fecha
        this.hora = hora
        this.pasajeros = pasajeros
        this.tarifa = tarifa
        this.equipaje = equipaje
        this.coberturaMedica = coberturaMedica
    }

    generaId(){
        return  Math.floor((Math.random() * 1000))
    }
}