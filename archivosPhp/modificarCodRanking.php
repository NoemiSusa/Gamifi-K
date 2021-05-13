<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';

//recoje los datos que le pasa el sevice en formato json
$json = file_get_contents('php://input');

//guardamos en la variable params los datos descodificados que recojemos del JSON que nos manda el ts
$params = json_decode($json);


// class Modificar {
  //creamos la función y le pasamos el objeto con los datos
  // public function modificacionPerfil($param){
    // creamos la conexión
    $conexion = conexion();

    // realizamos la query que actualizara los valores en la base de datos
    $query =  "UPDATE rankings SET
									codigoAcceso='".$params->codigoAcceso."'
								WHERE idRanking='".$params->idRanking."'";
                  //nickProfesor='".$param->nickProfesor."',

                  // UPDATE rankings SET codigoAcceso=1234567891234
                  // WHERE nickProfesorRK='Noemi123' AND idRanking=7;  CONSULTA FUNCIONA


    //recojemos el resultado de si se ha ejecutado correctamente o no la query obteniendo true en caso que si o false en caso que no.
    $resultado =  mysqli_query($conexion, $query);

    // Para cerrar la conexion con la base de datos.
    $conexion->close();

    //variable donde vamos a guardar un 1 si se hace el insert a la base de datos o un 0 si no se ha podido realizar el insert.
    $insert;
    $respuesta = new stdClass();


    if($resultado) {
      $respuesta->resultado=true;
      $respuesta->msg="Insert Realizado Correctamente";
      $respuesta->datos=null;

      $insert = 1;
    }
    else {
      $respuesta->resultado=false;
      $respuesta->msg="Fallo al insertar el codigo ranking";
      $respuesta->datos=null;

      $insert = 0;
    }
    //devolver el valor del insert al modificar el perfil.php
    // return $insert;
    print json_encode($respuesta);

  // }
// }
?>
