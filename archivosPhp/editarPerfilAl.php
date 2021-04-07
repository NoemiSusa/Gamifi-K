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

// class ModificarAl {
//   //creamos la función y le pasamos el objeto con los datos
//   public function modificacionPerfilAl($param){
    // creamos la conexión
    $conexion = conexion();

    // realizamos la query que actualizara los valores en la base de datos
    $query =  "UPDATE alumno SET
									nombreAlumno='".$params->nombreAlumno."',
									apellidosAlumno='".$params->apellidosAlumno."',
									emailAlumno='".$params->emailAlumno."',
									imagenAlumno='".$params->imagenAlumno."'
								WHERE nickAlumno='".$params->nickAlumno."'";


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
    //devolver el valor del insert al modificar el perfil.php
    print json_encode($insert);
//   }
// }
?>
