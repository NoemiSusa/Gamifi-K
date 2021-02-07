<?php

// conexion a la base de datos local

//parametros de connexión
$servidor = "localhost";
$usuario = "root";
$contrasenya = "usbw";
$bd = "Gamifi-K";

//realizamos la conexion
$conexion = mysqli_connect ($servidor, $usuario, $contrasenya, $bd); //donde se guardan los datos de la connexion
if(!conexion){
  //mostrar mensaje de error
  die("No se ha podido realizar la conexión: ".mysqli_connect_error() . "<br>");
} else{
  //en caso que se conecte se ejecutará el siguiente código
  mysqli_set_charset($conexion, "utf8");
  $_SESSION["conexion"] = $conexion; //variable de sesión que se guarda a las cookies del navegador
}
?>
