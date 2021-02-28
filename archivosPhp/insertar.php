<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';


class Insertar {

  public function insertarRegistroProfesores($param){
    // creamos la conexión
    $conexion = conexion();

    // realizamos la query a la BD
    $query =  "INSERT INTO 'profesor'('nickProfesor', 'nombreProfesor', 'apellidosProfesor', 'emailProfesor', 'pasProfesor', 'centroProfesor', 'imagenProfesor')
     VALUES ($param->nickProfesor,$param->nombreProfesor,$param->apellidoProfesor,$param->correoProfesor,$param->contrasenyaProfesor,$param->centroProfesor,'Profe')";
    $resultado =  mysqli_query($conexion, $query);

    // Para cerrar la conexion con la base de datos.
    $conexion->close();

    //variable donde vamos a guardar un 1 si se hace el insert a la base de datos o un 0 si no se ha podido realizar el insert.
    $insert;

    if($resultado) {
      $insert = 1;
    }
    else {
      $insert = 0;
    }
    // echo $insert;
    return $insert;
  }
}
?>
