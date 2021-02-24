<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept');


// cargo el contenido en el formato json desde angular
$json = file_get_contents('php://input');

// modifico el formato para operar con los datos de angular en php
$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require 'conBDLocal.php';

// creamos la conexión
$con = conexion();

$query = "select * from `alumno` WHERE nickAlumno='$params->nickAlumno' AND pasAlumno='$params->contrasenyaAlumno'";
// $query = "SELECT * FROM alumno";
$resultado = mysqli_query($con, $query);

//array donde se van a guardar los datos
$datos = [];


// mientras hayan filas se guardan en la variable $row desde el resultado
while($row = mysqli_fetch_assoc($resultado)) {
  // paso los datos de row en datos
     $datos[] = $row;

     // aqui vamos a poner la variable de sesion "CREO"
     $conectado = true;
}
//si el contador de datos es = 0 me muestra el mensaje de error al encontrar la session
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
