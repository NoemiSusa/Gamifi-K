<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

$query = "UPDATE rankings
          SET nombreRanking = '".$params->nombre."'
          where idRanking='".$params->idR."'";

$resultado = mysqli_query($conexion, $query);

$conexion->close();


$respuesta = new \stdClass();

//si el contador de datos es = 0 me muestra el mensaje de error al encontrar la session
if ($resultado) {

  $respuesta->resultado = true;
  $respuesta->msg = "Se ha modificado correctamente el nombre del Ranking";
  $respuesta->datos = $datos;

  print json_encode($respuesta);


} else {
  $respuesta->resultado = false;
  $respuesta->msg = "No se ha podido modificar el nombre del Ranking";
  $respuesta->datos = [];

  print json_encode($respuesta);

}
