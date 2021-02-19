
<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");

   global $enlace;




   function conexion(){

     $con = mysqli_connect('localhost', 'root', 'usbw', 'test');


       return $con;
      }



?>
