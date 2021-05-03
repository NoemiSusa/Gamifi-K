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
          where idRanking='".$params->idRanking."'";

$resultado = mysqli_query($conexion, $query);

$conexion->close();

$respuesta = new \stdClass();

if ($resultado) {

  $conexion = conexion();

//lista todos los rankings de un profesor (es el que le pasamos como parametro)
$query = "SELECT * FROM rankings where nickProfesorRK='".$params."'";
$resultado = mysqli_query($conexion, $query);

$datos = [];

while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}

$conexion->close();

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
