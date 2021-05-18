<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');
// echo($json);
$params = json_decode($json);
// $tarea = $params->nombreTarea->tareas;

require_once 'conBDLocal.php';

$conexion = conexion();

$query = "SELECT  al.nickAlumno as nick, CONCAT( ' ', CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) )  AS Alumno, round(ta.puntuacion, 2) AS Puntuacion
            FROM alumno al, tareas t, tareaalumno ta
            WHERE ta.nickAlumnoTarea = al.nickAlumno
             AND ta.idtareaal = t.idTarea
             AND ta.idtareaal = '".$params->idTarea."'
             AND t.idRankingTarea =".$params->idRanking.
             " GROUP BY al.nickAlumno, CONCAT( ' ', CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) )
             ORDER BY al.apellidosAlumno";

$resultado = mysqli_query($conexion, $query);

$datos=[];

while($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}

//cerramos la conexion con la BD
$conexion->close();

$respuesta = new \stdClass();

//si el contador de datos es = 0 me muestra el mensaje de error al encontrar la session
if(count($datos)==0){
  $respuesta->resultado = false;
  $respuesta->msg = "No existe la tarea";
  $respuesta->datos = [];

  print json_encode($respuesta);

}else {

  print json_encode($datos);

}
?>
