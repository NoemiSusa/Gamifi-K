<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept');

$json = file_get_contents('php://input');

$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require 'conBDLocal.php';
// creamos la conexión
$con = conexion();

$query = "select * from `alumno` WHERE nickAlumno='$params->nickAlumno' AND pasAlumno='$params->contrasenyaAlumno'";
// $query = "SELECT * FROM alumno";
$resultado = mysqli_query($con, $query);

$datos = [];

while($row = mysqli_fetch_assoc($resultado)) {
     $datos[] = $row;
     $conectado = true;
}

if (count($datos) === 0) {
  print '{ "msg": "Error al encontrar usuario" }';
} else {
  print json_encode($datos);
}



  // realizamos la query a la BD
/*
  // si el alumno existe obtiene datos y los guarda en un array
  if ($row = mysqli_fetch_assoc($resultado)) {
      $datos[] = $res;
      $conectado = true;
  } else {
      $text = 'no existe';
      $conectado = false;
      console_log($text);
  }*/

  // genera el json con los datos obtenidos
  // $json = json_encode($datos);

//variable booleana que me dira si el usuario y contraseña son correctas o no
// $conectado = false;


// console_log("campo3");
// muestra el json generado;

// echo ($resultado);

?>
