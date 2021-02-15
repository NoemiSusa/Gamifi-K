<?php
   global $enlace;


   function conexion(){

     $con = mysqli_connect('localhost', 'roor', 'usbw', 'test');

       mysqli_set_charset($con, "utf8");

       if(!$con){

         echo "Error: no se puede conectar a MySQL." . PHP_EOL;
         echo "Erno de depuracion: " . mysqli_connect_erno() . PHP_EOL;
         echo "Error de depuracion: " . mysqli_connect_error() . PHP_EOL;
         exit;

       }

       return $con;
      }


?>
