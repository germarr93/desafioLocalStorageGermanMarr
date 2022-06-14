class Carrito {
    comprarInstrumento(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
             const instrumento = e.target.parentElement.parentElement;
             // console.log(instrumento)}   para prueba.    
           this.leerInstrumento(instrumento);
         //Enviamos el parametro  instrumento seleccionado para tomar sus datos
}
    }
leerInstrumento(instrumento)
{
  const infoInstrumento = {
    imagen: instrumento.querySelector('img').src,
    titulo: instrumento.querySelector('h4').textContent,
    precio: instrumento.querySelector('.precio span').textContent,
    id : instrumento.querySelector('a').getAttribute('data-id'),
    cantidad :1

  }
  this.agregarCarrito(infoInstrumento);
}


agregarCarrito(instrumento)
{
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>
      <img src ="${instrumento.imagen}" width=100>
  </td>
  <td> ${instrumento.titulo} </td>
  <td> ${instrumento.precio} </td>
  <td>
    <a href ="#" class="borrar-producto fas fa-times-circle" data-id="${instrumento.id}">
    </a>
  </td> `;

  listaInstrumentos.appendChild(row);
  this.guardarInstrumentoLocalStorage(instrumento);
}
vaciarCarrito(e)
{
e.preventDefault();
while(listaInstrumentos.firstChild)
{
  listaInstrumentos.removeChild(listaInstrumentos.firstChild)
}
return false;
}

guardarInstrumentoLocalStorage(instrumento)
{
  let instrumentos;
  instrumentos = this.verInstrumentosLocal();
  instrumentos.push(instrumento);
  localStorage.setItem('instrumentos',JSON.stringify(instrumentos))

}
verInstrumentosLocal()
{
  let instrumLocalStorage;
  if(localStorage.getItem('instrumentos') === null)
  {

    instrumLocalStorage = [];
  }

else{
  instrumLocalStorage = JSON.parse(localStorage.getItem('instrumentos'))
}
return instrumLocalStorage;
}
}

//Mensajes de liberarias...

iniciarMensaje();
const luxonDateTime = luxon.DateTime;
function iniciarMensaje()
{
  saludarCompra();
  vaciarCarritoMensaje();
  // creandoLuxonTime();
  procesarCompraLibreria();

}

//Funcion que ofrece mensaje de aviso de compra
function saludarCompra(){
const  btn = document.querySelector('#btnSweet');
const  btnDos = document.querySelector('#btnSweetDos');
const  btnTres = document.querySelector('#btnSweetTres');
const  btnCuatro = document.querySelector('#btnSweetCuatro');
const btnCinco = document.querySelector('#btnSweetCinco');
const btnSeis = document.querySelector('#btnSweetSeis');
btn.addEventListener('click', () =>
{
  Swal.fire({
    text:"Has seleccionado este instrumento, observa tu carrito de compra.",
    icon:'sucess'
}
)
})
btnDos.addEventListener('click',()=>
{
  Swal.fire({
    text:"Has seleccionado este instrumento, observa tu carrito de compra"
})
})
btnTres.addEventListener('click',()=>
{
  Swal.fire({
    text:"Has seleccionado este instrumento, observa tu carrito de compra"
})
})
btnCuatro.addEventListener('click',()=>
{
  Swal.fire({
    text:"Has seleccionado este instrumento, observa tu carrito de compra"
})
})
btnCinco.addEventListener('click',()=>
{
  Swal.fire({
    text:"Has seleccionado este instrumento, observa tu carrito de compra"
})
})
btnSeis.addEventListener('click',()=>
{
  Swal.fire({
    text:"Has seleccionado este instrumento, observa tu carrito de compra"
})
})






}

//Funcion que ofrece mensaje de libreria vacia.
function vaciarCarritoMensaje()
{
  const btn = document.querySelector("#vaciar-carrito")
  btn.addEventListener('click',()=>{
    Swal.fire({
      title:"Esta seguro de vaciar carrito?",
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Si de acuerdo',
      cancelButtonText:'No,cancelar'
    }).then ((result) =>{
      if(result.isConfirmed)
      {
        Swal.fire({
          title:"Borrado",
          icon:'success',
          text:'El carrito se ha vaciado'
        })
      }}
    )})}
function procesarCompraLibreria()
{
  const btnDos = document.querySelector("#procesar-pedido")
  btnDos.addEventListener('click',()=>{
    Swal.fire({
      title:"Esta seguro de realizar la compra?",
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Si de acuerdo',
      cancelButtonText:'No,cancelar'
    }).then ((result) =>{
      if(result.isConfirmed)
      {
        Swal.fire({
          title:"Completado",
          icon:'success',
          text:'Se ha comprado su producto'
        })
      }}
    )})
}
// Fecha en construccion
let dtFormat = new Intl.DateTimeFormat('en-US',{
  day:'2-digit',
  mont:'short',
  year:'numeric'
});
let date = new Date();
console.log(dtFormat.format(date));


// function creandoLuxonTime()
// {
//   const dateTi = luxonDateTime.fromObject(
//     {day: 12, month:3, year:2022},
//     {zone: 'America/Montevideo'}
//   );
//   console.log(dateTi);
// }