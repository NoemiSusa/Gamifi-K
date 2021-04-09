<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

$query = "SELECT * FROM rankings where nickprofesorRK='".$params->nickprofesor."'";
$resultado = mysqli_query($conexion, $query);

$datos = [];

while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;

$conexion->close();

print json_encode($datos);

?>
