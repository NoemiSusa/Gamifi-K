<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");

//recoje los datos que le pasa el sevice
$json = file_get_contents('php://input');

//guardamos en la variable params los datos descodificados que recojemos del JSON
$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require 'conBDLocal.php';

// creamos la conexión
$conexion = conexion();

// realizamos la query a la BD y recojemos el resultado
$query = "SELECT * FROM profesor WHERE nickProfesor='$params->nickProfesor'"
$resultado = mysqli_query($conexion, $query);

//iniciamos la variable como array
$datos= [];

// hacemos un bucle para que mientras encuentre datos el resultado del select los vaya guardando en la variable datos []
while($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}


// si el profesor existe obtiene datos y los guarda en un array
if (count($datos) === 0 ) {
  print '{ "msg": "Error al encontrar usuario" }';
} else {
  print json_encode($datos);

}

// // genera el json con los datos obtenidos
// $json = json_encode($datos);
// // muestra el json generado
// echo $json;

?>
