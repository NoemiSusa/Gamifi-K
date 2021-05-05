<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');
// echo($json);
$params = json_decode($json);
$tarea = $params->nombreTarea->tareas;

require_once 'conBDLocal.php';

$conexion = conexion();

$query = "SELECT al.nickAlumno as Nick, CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) AS Alumno, t.puntuacion AS Puntuacion".
          " FROM tareas t, alumno al,rankings r".
          " where r.idRanking =".$params->idRanking.
          " AND t.idRankingTarea = r.idRanking".
          " AND t.nickAlumnoTarea = al.nickAlumno".
          "  AND t.nombreTarea = '".$tarea."'".
            " GROUP BY al.nickAlumno".
            " ORDER BY al.apellidosAlumno";
// $query = "SELECT nickAlumnoTarea as Alumno, puntuacion as Puntuacion FROM tareas Where nombreTarea ='act1' ";
// echo($query);
$resultado = mysqli_query($conexion, $query);

$datos=[];

while($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}
// echo($datos);
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

  // $respuesta->resultado = true;
  // $respuesta->msg = "Aquí van las puntuaciones";
  // $respuesta->datos = $datos;

  // print json_encode($respuesta);
  print json_encode($datos);

}
?>
