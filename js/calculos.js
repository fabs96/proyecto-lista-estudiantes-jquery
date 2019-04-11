$().ready(function(){
$("#mayor").click(function(){
  var mayor =0;
  var nombre;
  for(var i=0;i<localStorage.length;i++){
  var clave = localStorage.key(i);
  var estudiante = $.parseJSON(localStorage.getItem(clave));
  if(estudiante.nota >= mayor){
    mayor = estudiante.nota
    nombre =estudiante.nombre;
  }
}
 alert("La mayor nota es:"+mayor+" y la tiene:"+nombre);
});

$("#menor").click(function(){
  var menor =999;
  var nombre;
  for(var i=0;i<localStorage.length;i++){
  var clave = localStorage.key(i);
  var estudiante = $.parseJSON(localStorage.getItem(clave));
  if(estudiante.nota < menor){
    menor = estudiante.nota
    nombre =estudiante.nombre;
  }
}
 alert("La menor nota es:"+menor+" y la tiene:"+nombre);
});

$("#promedio").click(function(){
  var promedio =0;
  var suma=0;
  for(var i=0;i<localStorage.length;i++){
  var clave = localStorage.key(i);
  var estudiante = $.parseJSON(localStorage.getItem(clave));
  suma += Number(estudiante.nota);
}
  promedio = suma/localStorage.length;
 alert("La suma es:"+suma+" y el promedio :"+ promedio);
});
});
