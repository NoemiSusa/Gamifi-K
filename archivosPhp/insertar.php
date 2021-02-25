<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");

// importamos el archivo con la conexión a la BD
require 'conBDLocal.php';

// creamos la conexión
$conexion = conexion();
class Insertar {

  public insertarRegistroProfesores(
    // realizamos la query a la BD
    $registros =  mysqli_query($conexion, "INSERT INTO profesores $param->nickProfesor'");

    $resultado = mysqli_query($conexion, $registros);

    if(!$resultado) {
      $insert = 0;
    }
    else {
      $insert = 1;
    }

    $result = json_encode($insert);
    echo $result;
  );
}
?>
