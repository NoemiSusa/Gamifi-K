<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

//lista todos los rankings de un profesor (es el que le pasamos como parametro)
$query = "SELECT * FROM rankings where nickProfesorRK='".$params->nickprofesor."'";
$resultado = mysqli_query($conexion, $query);

$datos = [];

while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}
$conexion->close();

if(count($datos)==0){
  $respuesta->resultado = false;
  $respuesta->msg = "No existen rankings";
  $respuesta->datos = [];

  print json_encode($respuesta);

}else {

  $respuesta->resultado = true;
  $respuesta->msg = "Aquí van los rankings";
  $respuesta->datos = $datos;

  print json_encode($respuesta);

}

?>
