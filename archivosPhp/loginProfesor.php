<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept');
header('Content-Type: application/json');

// cargo el contenido en el formato json desde angular
$json = file_get_contents('php://input');

// modifico el formato para operar con los datos de angular en php
$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require 'conBDLocal.php';

// creamos la conexión
$con = conexion();

$query = "SELECT * from `profesor` WHERE nickProfesor='$params->nickProfesor' AND contrasenyaProfesor='$params->contrasenyaProfesor'";

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

// $con->close();
$respuesta = new \stdClass();

//si el contador de datos es = 0 me muestra el mensaje de error al encontrar la session
if (count($datos) === 0) {

  $respuesta->resultado = false;
  $respuesta->msg = "Verifica el nick o la contraseña y vuelve a intentarlo";
  $respuesta->datos = [];

  echo json_encode($respuesta);

  // print '{ "result": false, "msg": "Usuario no encontrado" }';

} else {

  $respuesta->resultado = true;
  $respuesta->msg = "Usuario correcto";
  $respuesta->datos = $datos;

  echo json_encode($respuesta);

}


?>


