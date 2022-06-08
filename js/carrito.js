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


 