<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

$query = "UPDATE tareas
          SET puntuacion = '".$params->nuevaPuntuacion."'
          where nickAlumnoTarea='".$params->nickAlumno."'
            and nombreTarea = '".$params->nombreTarea."'
            and nombreRankingTarea = '".$params->nombreRankingRK."'";

$resultado = mysqli_query($conexion, $query);

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

}
