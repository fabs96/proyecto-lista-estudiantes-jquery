$().ready(function(){
  listarNotas();
  $("#registro").click(function(){
    var codigo = $("#codigo").val();
    nombre = $("#nombre").val();
    nota=$("#nota").val();

    var estudiante= {
      codigo : codigo,
      nombre: nombre,
      nota : nota
    };
    localStorage.setItem(codigo,JSON.stringify(estudiante));
    listarNotas();
    limpiarCampos();
  });

});

function listarNotas(){
  var tabla ="";

 tabla +="<table border='1'>";
 tabla +="<tr>";
 tabla +="<th>Codigo</th>";
 tabla +="<th>Nombre</th>";
 tabla +="<th>Nota</th>";
 tabla +="<th>Editar</th>";
 tabla +="<th>Eliminar</th>"
 tabla +="</tr>"

 for (var i = 0; i < localStorage.length; i++) {
   var clave =localStorage.key(i);
   var estud = $.parseJSON(localStorage.getItem(clave));
   tabla += "<tr>";
   tabla += "<td>"+estud.codigo+"</td>";
   tabla += "<td>"+estud.nombre+"</td>";
   tabla += "<td>"+estud.nota+"</td>";
   tabla += '<td><button onclick="editarNota(\''+estud.codigo+'\');">Editar</button></td>';
   tabla += '<td><button onclick="eliminarNota(\''+estud.codigo+'\');">Eliminar</button></td>';
   tabla += '</tr>';
 }
 tabla += "</table>";
 $("#muestra").html(tabla);
}


function limpiarCampos(){
  $("#codigo").val("");
  $("#nombre").val("");
  $("#nota").val("");
}

function eliminarNota(codigo){
  localStorage.removeItem(codigo);
  listarNotas();
}
function editarNota(codigo){
  var est;
  for (var i = 0; i < localStorage.length; i++) {
   var clave =localStorage.key(i);
   if( clave == codigo){
     est = $.parseJSON(localStorage.getItem(clave));
     $("#codigo").val(est.codigo);
     $("#nombre").val(est.nombre);
     $("#nota").val(est.nota);
   }
  }
}
