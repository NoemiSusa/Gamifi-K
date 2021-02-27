<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require 'conBDLocal.php';

// creamos la conexión
$conexion = conexion();
class Insertar {

  public function insertarRegistroProfesores($param){
    // realizamos la query a la BD
    $query =  "INSERT INTO `profesor`('nickProfesor', 'nombreProfesor', 'apellidosProfesor', 'emailProfesor', 'pasProfesor', 'centroProfesor', 'imagenProfesor')
     VALUES ($param->nickProfesor,$param->nombreProfesor,$param->apellidoProfesor,$param->correoProfesor,$param->contrasenyaProfesor,$param->centroProfesor,'Profe')";
    $resultado =  mysqli_query($conexion, $query);

    // $resultado = mysqli_query($conexion, $registros);

    if(!$resultado) {
      $insert = 0;
    }
    else {
      $insert = 1;
    }

    $result = json_encode($insert);
    // echo $result;
    return $insert;
  }
}
?>
