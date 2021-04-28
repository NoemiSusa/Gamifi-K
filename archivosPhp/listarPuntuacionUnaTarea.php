<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

$query = "SELECT CONCAT( al.nickAlumno, CONCAT( ' ', CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) ) ) AS Alumno, t.puntuacion AS Puntuacion
          FROM tareas t, alumno al,rankings r
          where r.idRanking =".$params->idRanking.
          " AND t.idRankingTarea = r.idRanking
            AND t.nickAlumnoTarea = al.nickAlumno
            AND t.nombreTarea = '".$params->nombreTarea."'
          GROUP BY al.nickAlumno
          ORDER BY al.apellidosAlumno";

$resultado = mysqli_query($conexion, $query);

$conexion->close();


$respuesta = new \stdClass();

//si el contador de datos es = 0 me muestra el mensaje de error al encontrar la session
if ($resultado) {

  $respuesta->resultado = true;
  $respuesta->msg = "Se ha modificado correctamente la puntuación de la tarea";
  $respuesta->datos = $datos;

  print json_encode($respuesta);

  // print '{ "result": false, "msg": "Usuario no encontrado" }';

} else {
  $respuesta->resultado = false;
  $respuesta->msg = "No se ha podido modificar la puntuación de la tarea";
  $respuesta->datos = [];


  print json_encode($respuesta);

}
