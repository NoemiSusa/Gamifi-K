<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');
// echo($json);
$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

// coje todas las tareas de un ranking de un profesor concreto
$query = "SELECT t.nombreTarea as nombreT, t.idTarea as idT".
          " FROM tareas t, rankings r".
          " where t.idRankingTarea = ".$params.
          " AND t.idRankingTarea = r.idRanking".
          " GROUP by t.nombreTarea";

$resultado = mysqli_query($conexion, $query);

$datos = [];

while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}

$conexion->close();

print json_encode($datos);

?>
