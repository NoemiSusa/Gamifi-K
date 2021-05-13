<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");

// conexion a la base de datos local
  // global $enlace;
    function conexion(){
      $con = mysqli_connect('localhost', 'root', 'usbw', 'gamifik');
      return $con;
    }
?>
