<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');
// echo($json);
$params = json_decode($json);
$tarea = $params->nombreTarea->tarea

require_once 'conBDLocal.php';

$conexion = conexion();

$query = "UPDATE tareas".
          " SET puntuacion = '".$params->nuevaPuntuacion."'".
          " WHERE nickAlumnoTarea='".$params->nickAlumno."'".
          " AND nombreTarea = '".$tarea."'".
          " AND idRankingTarea = ".$params->idRanking."";
// echo($query);
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
  $respuesta->msg = "No se han actualizado las puntuaciones";
  $respuesta->datos = [];


  print json_encode($respuesta);

}
?>
