class Aeropuerto{
    nombre
    tarifaBase

    constructor(nombre, tarifaBase){
        this.nombre = nombre
        this.tarifaBase = tarifaBase
    }

    static cargarAeropuertos(){
        let opciones = []
        opciones.push(new Aeropuerto("BARILOCHE", 15000))
        opciones.push(new Aeropuerto("EZEIZA", 7000))
        opciones.push(new Aeropuerto("JORGE NEWBERY", 8000))
        opciones.push(new Aeropuerto("CATARATAS DEL IGUAZÚ", 6000))
        opciones.push(new Aeropuerto("EL PALOMAR", 5000))

        return opciones
    }
}