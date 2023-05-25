class Aeropuerto{
    nombre
    ubicacion
    tarifaBase

    constructor(nombre, ubicacion, tarifaBase){
        this.nombre = nombre,
        this.ubicacion = ubicacion,
        this.tarifaBase = tarifaBase
    }

    static cargarAeropuertos(){
        let opciones = []
        opciones.push(new Aeropuerto("BARILOCHE", "RIO NEGRO, ARGENTINA", 15000))
        opciones.push(new Aeropuerto("EZEIZA", "BUENOS AIRES, ARGENTINA", 7000))
        opciones.push(new Aeropuerto("JORGE NEWBERY", "BUENOS AIRES, ARGENTINA", 8000))
        opciones.push(new Aeropuerto("CATARATAS DEL IGUAZÚ", "MISIONES, ARGENTINA", 6000))
        opciones.push(new Aeropuerto("EL PALOMAR", "BUENOS AIRES, ARGENTINA", 5000))

        return opciones
    }

    toString(){
        return `Nombre: ${this.nombre}\nUbicacion: ${this.ubicacion}\nTarifa base: $${this.tarifaBase}`
    }
}