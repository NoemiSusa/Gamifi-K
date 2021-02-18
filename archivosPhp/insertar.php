<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");

// importamos el archivo con la conexión a la BD
require("conBDLocal.php");

// creamos la conexión
$conexion = conexion();

// realizamos la query a la BD
$registros =  mysqli_query($conexion, "INSERT * FROM profesores WHERE nickProfesor='$_GET[nickProfesor]");
console_log("datos insertados");

$resultado = mysqli_query($conexion, $registros);

return $resultado;

?>
