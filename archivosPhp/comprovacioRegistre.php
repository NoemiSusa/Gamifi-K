<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");


// importamos el archivo con la conexión a la BD
require("conBDLocal.php");
require("insertar.php");

// creamos la conexión
$conexion = conexion();

// realizamos la query a la BD
$registros = mysqli_query($conexion, "SELECT * FROM profesores WHERE nickProfesor='$_GET[nickProfesor]");
console_log("campo1");
$datos= [];

// si el profesor existe obtiene datos y los guarda en un array
if ($resultado = mysqli_fetch_array($registros)) {
  console_log("usuario ya existe");
  $datos[] = $resultado;
}else{



  console_log("no existe");
}

// genera el json con los datos obtenidos
$json = json_encode($datos);
console_log("campo3");
// muestra el json generado
echo $json;






?>
