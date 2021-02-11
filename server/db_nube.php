<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header ('Content-Type: text/html; charset=UTF-8');


// para ver si ha entrado en el php
echo '{ "response": "OK has entrado en el php" }';

$servidor="oracle.ilerna.com";
$usuario="DAW2_GamifikG4";
$contrasenya="aGamifikG41";
$bd="daw2_gamifikg4";

//realizamos la conexion
$con=mysqli_connect($servidor,$usuario,$contrasenya,$bd);  // var para conectarnos a la bd

if(!$con){
  // para ver si ha petado la conexion
  die('{ "response: ""No se ha podido realizar la conexion: " }'. mysqli_connect_error(). " <br>");

}

else{
  mysqli_set_charset($con,"utf8");

// para ver si se ha conectado a la data base.
  echo '{ "response": "OK te has conectado a la bd" }';
  //echo "Felicidades te has conectado a la bd";
  $_SESSION["con"]=$con;
}



?>
