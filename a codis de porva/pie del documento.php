<?php

$conexion->close();


$respuesta = new \stdClass();

//si el contador de datos es = 0 me muestra el mensaje de error al encontrar la session
if ($resultado) {

  $respuesta->resultado = true;
  $respuesta->msg = "Se ha modificado correctamente la puntuación de la tarea";
  $respuesta->datos = $datos;

  print json_encode($respuesta);

  // print '{ "result": false, "msg": "Usuario no encontrado" }';

} else {
  $respuesta->resultado = false;
  $respuesta->msg = "No se ha podido modificar la puntuación de la tarea";
  $respuesta->datos = [];


  print json_encode($respuesta);

  ?>
