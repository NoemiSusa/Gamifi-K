<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");

   global $enlace;

   console_log ("ERROR1 CONSOLE")
   echo("Error1 Echo")

   function conexion(){

     $con = mysqli_connect('localhost', 'root', 'usbw', 'test');

       mysqli_set_charset($con, "utf8");

       console_log ("ERROR2 CONSOLE")
       echo("Error2 Echo")

       if(!$con){

        console_log ("Error: no se puede conectar a MySQL")


        console_log ("ERROR3 CONSOLE")
        echo("Error3 Echo")

         echo "Erno de depuracion: " . mysqli_connect_erno() . PHP_EOL;
         echo "Error de depuracion: " . mysqli_connect_error() . PHP_EOL;
         exit;

       }
       console_log ("ERROR4 CONSOLE")
       echo("Error4 Echo")

       return $con;
      }


?>
