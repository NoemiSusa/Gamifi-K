<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

//lista todos los rankings de un alumno (es el que le pasamos como parametro nickAlumno)
$query = //"SELECT * FROM rankings where nickProfesorRK='".$params."'";
"SELECT r.nombreRanking as nombreRanking, concat(al.nickAlumnoTarea)  AS nickAlumnoTarea
FROM rankings r, tareas t, tareaalumno al
where t.idRankingTarea = r.idRanking
AND al.idTareaAl = t.idTarea
AND al.nickAlumnoTarea ='".$params."'
Group by r.nombreRanking";

$resultado = mysqli_query($conexion, $query);

$datos = [];

while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}

$conexion->close();

$respuesta = new \stdClass();

if(count($datos)==0){
  $respuesta->resultado = false;
  $respuesta->msg = "No existen rankings";
  $respuesta->datos = [];

  print json_encode($respuesta);

}else {

  // $respuesta->resultado = true;
  // $respuesta->msg = "Aquí van los rankings";
  // $respuesta->datos = $datos;

  print json_encode($datos);
}

?>
