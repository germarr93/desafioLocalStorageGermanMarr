
class Empleado{
    constructor(nombre,apellido,edad,sueldo)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}

//Funcion con operador avanzado  para obtener el dia laboral.

const diasTrabajados = ['Lunes','martes','miercoles','Jueves','Viernes','Sabado','Domingo']
var numeroDia = 4;
var dia =(numeroDia < diasTrabajados.length) ? diasTrabajados[numeroDia -1 ] : 'dia incorrecto'
console.log(dia);

                        //Spread de Empleados Nuevos.s
const empleadoUno= {
    nombre : "Rodrigo",
    apellido :'Perez',
    edad:20,
    sueldo:25000
}
const empleadoJuan = {
    ...empleadoUno
}
console.log(empleadoUno)

