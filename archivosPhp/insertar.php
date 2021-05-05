<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';

class Insertar {
  //creamos la función y le pasamos el objeto con los datos
  public function insertarRegistroProfesores($param){
    // creamos la conexión
    $conexion = conexion();

    // realizamos la query a la BD para realizar el insert con los valores que tendrá cada campo
    $query =  "INSERT INTO profesor(nickProfesor, nombreProfesor, apellidosProfesor, emailProfesor, contrasenyaProfesor, centroProfesor, imagenProfesor)
     VALUES ('".$param->nickProfesor."','".$param->nombreProfesor."','".$param->apellidosProfesor."','".$param->emailProfesor."','".$param->contrasenyaProfesor."','".$param->centroProfesor."','Profe')";

    //recojemos el resultado de si se ha ejecutado correctamente o no la query obteniendo true en caso que si o false en caso que no.
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
    //devolver el valor del insert al comprovaciónRegistre.php
    return $insert;
  }
}
?>
