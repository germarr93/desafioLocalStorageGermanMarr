const dataCliente = [ 
    {
        id:1, nombre: "Romina", apellido:"Gonzalez",nacionalidad:"Argentina", img:'./imagenes/camisa.jpg',gastos:2000,
        id:2, nombre : "Lorena", apellido:"Lomez", nacionalidad:"Uruguay", img: "./img/clienteDos.jpg",gastos:4000,
        id:3, nombre: "Facundo", apellido:"Melendrez", nacionalidad:"Uruguay", img:"./img/clienteTres.jpg",gastos:6000,
        id:4, nombre: "Daniela",apellido:"Cervino",nacionalidad:"Brazil", img:"./img/clienteCuatro.jpg",gastos:9000,
    }
    ]

//Implementando Spread
const dataClienteSueldos = [2000,30000,4000,54555]
console.log(Math.max(...dataClienteSueldos));


//Funcion para separar clientes asignados.

clienteVip ={
     id:14,
     nombre:'Sofia',
     nacionalidad:'Estados unidos',
     idioma :'Ingles'
}


const separandoClientes = (dato) =>
{
    const {nombre,nacionalidad,idioma} = dato;
    console.log(nombre,nacionalidad,idioma);
}
separandoClientes(clienteVip); 


