<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// recoje los datos que le pasa el service en formato json
$json = file_get_contents('php://input');

// guardamos en la variable params los datos descodificados que recojemos del JSON que os manda el ts
$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';

// creamos la conexión
$conexion = conexion();


//query que mostra les dades de l'alumne i la puntuació en 2 columnes i una fila per alumne ordenat de major a menor puntuació
// $query = "SELECT  al.nickAlumno, CONCAT( ' ', CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) )  AS Alumno, SUM( t.puntuacion ) AS Puntuacion".
//           " FROM alumno al, rankings r, tareas t".
//           " WHERE r.idRanking =".$params.
//           " AND t.idRankingTarea = r.idRanking".
//           " AND t.nickAlumnoTarea = al.nickAlumno".
//           " GROUP BY t.nickAlumnoTarea".
//           " ORDER BY SUM( t.puntuacion ) DESC";

$query = "SELECT  al.nickAlumno, CONCAT( ' ', CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) )  AS Alumno, round(SUM( ta.puntuacion ), 2) AS Puntuacion
        FROM alumno al, tareas t, tareaalumno ta
        WHERE ta.nickAlumnoTarea = al.nickAlumno
         AND ta.idtareaal = t.idTarea
         AND t.idRankingTarea =".$params.
         " GROUP BY al.nickAlumno, CONCAT( ' ', CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) )
           ORDER BY SUM( ta.puntuacion ) DESC" ;



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
  $respuesta->msg = "no hay datos a seleccionar en la tabla";
  $respuesta->datos = [];

  print json_encode($respuesta);

} else {

  // $respuesta->resultado = true;
  // $respuesta->msg = "Los datos del ranking son los siguientes";
  // $respuesta->datos = $datos;

  print json_encode($datos);

}

?>

