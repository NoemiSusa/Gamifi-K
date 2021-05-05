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

echo($json);


?>
