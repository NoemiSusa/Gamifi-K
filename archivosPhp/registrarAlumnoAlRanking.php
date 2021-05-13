<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

//recoje los datos que le pasa el sevice en formato json
$json = file_get_contents('php://input');

//guardamos en la variable params los datos descodificados que recojemos del JSON que nos manda el ts
$params = json_decode($json);

require_once 'conBDLocal.php';
class RegistrarAlumno{

  public function insertTareaAlumno($params){

    $conexion = conexion();

    //creamos en la tabla tareaalumno todas las tareas de un ranking a un alumno
    $query = "INSERT INTO tareaalumno (idTareaAl, nickAlumnoTarea)
                SELECT t.idTarea as idTareaAl, '".$params->nickAlumno."' as nickAlumnoTarea
                FROM rankings r, tareas t
                WHERE r.idRanking = t.idRankingTarea
                AND r.codigoAcceso = ".$params->codigoAcceso;

    $resultado = mysqli_query($conexion, $query);

    $conexion->close();

    // $respuesta = new \stdClass();
    $tareasAlumnoCreadas = -1
    //una vez insertados los datos volver a la pagina que lista todos los rankings del alumno.

    if ($resultado) {
      // $respuesta->resultado = true;
      // $respuesta->msg = "Se ha registrado el alumno al ranking correctamente";
      // $respuesta->datos = 50;
      // print json_encode($respuesta);
      $tareasAlumnoCreadas = 50;

    } else {
      // $respuesta->resultado = false;
      // $respuesta->msg = "No se ha registrado correctamente el alumno al ranking vuelva a intentarlo";
      // $respuesta->datos = 0;
      // print json_encode($respuesta);
      $tareasAlumnoCreadas = -50;
    }
    return($tareasAlumnoCreadas);
  }
}

?>
