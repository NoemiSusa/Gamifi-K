<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

//query que mostra les dades de l'alumne i la puntuació en 2 columnes i una fila per alumne ordenat per cognom de l'alumne
$query = "SELECT concat( al.nickAlumno, concat( ' ', concat( al.apellidosAlumno, concat( ' ', concat( al.nombreAlumno, ' ' ) ) ) ) ) AS Alumno, sum( t.puntuacion ) AS Puntuación
          FROM alumno al, rankings r, tareas t
          WHERE r.idRanking = '".$params."'
            AND t.idRankingTarea = r.idRanking
            AND t.nickAlumnoTarea = al.nickAlumno
          GROUP BY al.nickAlumno
          ORDER BY al.apellidosAlumno";

$resultado = mysqli_query($conexion, $query);

// inciamos la variable $datos como array donde vamos a guardar los datos que obtengamos de la consulta
$datos = [];

// bucle para que guarde los datos encontrados con el select de la consulta en el array
while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}
// cerramos la conexión a la BD
$conexion->close();


if (count($datos) === 0) {

  $respuesta->resultado = false;
  $respuesta->msg = "no hay datos en la tabla";
  $respuesta->datos = [];

  print json_encode($respuesta);

} else {

  $respuesta->resultado = true;
  $respuesta->msg = "datos del ranking";
  $respuesta->datos = $datos;

  print json_encode($respuesta);

}

?>
