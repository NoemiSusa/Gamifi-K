<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

//elimina el ranking seleccionado
$query = "DELETE FROM rankings
          where idRanking = ".$params." ";



$resultado = mysqli_query($conexion, $query);
$datos = -1;
$conexion->close();

if(!$resultado){
  $datos =0;
  $respuesta->resultado = false;
  $respuesta->msg = "No se ha podido eliminar el ranking";
  $respuesta->datos = [];

  print json_encode($respuesta);

}else {
  $datos = 1;
  $respuesta->resultado = true;
  $respuesta->msg = "Se ha eliminado correctametne el ranking";
  $respuesta->datos = $datos;

  print json_encode($respuesta);

}

?>
