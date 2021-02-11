<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header ('Content-Type: text/html; charset=UTF-8');
$response = 'Ok has entrado en el php';
$response1 = null;


echo json_encode($response);


$servidor="localhost";
$usuario="root";
$contrasenya="usbw";
$bd="test";


//realizamos la conexion
$con=mysqli_connect($servidor,$usuario,$contrasenya,$bd);  // var para conectarnos a la bd

if(!$con){

  $response1 = 'No se hapodido realizar la conexión';

  echo json_encode($response1);

  die;//('{ "No se ha podido realizar la conexion: " }'. mysqli_connect_error(). " <br>");

}

else{

  $response1 = 'Ok te has conectado';

  mysqli_set_charset($con,"utf8");
  //echo "Felicidades te has conectado a la bd";
  echo json_encode($response1);

 // $_SESSION["con"]=$con;
}



?>
