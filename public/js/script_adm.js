$(document).ready( function () {
  
  
  $('#tb_categoria').DataTable(
    {
      "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
      }
    });


} );


function editarRegistro(id){
  alert('chamando editar registro');
  
}

function deletarRegistro(){
 
  
   Swal.fire('chamando deletar registro');

}


function msgSucesso(){
  
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Categoria Salva com Sucesso!',
    showConfirmButton: false,
    timer: 1500
  })
}