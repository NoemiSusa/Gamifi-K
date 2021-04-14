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


//query que mostra les dades de l'alumne i la puntuació en 2 columnes i una fila per alumne
$query = "SELECT concat( al.nickAlumno, concat( ' ', concat( al.apellidosAlumno, concat( ' ', concat( al.nombreAlumno, ' ' ) ) ) ) ) AS Alumno, sum( t.puntuacion ) AS Puntuación
          FROM alumno al, rankings r, tareas t
          WHERE r.nombreRanking = '".$params->nombreRanking."'
            AND t.nombreRankingTarea = r.nombreRanking
            AND t.nickAlumnoTarea = al.nickAlumno
          GROUP BY al.nickAlumno
          ORDER BY al.apellidosAlumno";


$resultado = mysqli_query($conexion, $query);

// inciamos la variable $datos como array donde vamos a guardar los datos que obtengamos de la consulta
$datos = [];

// bucle para que guarde los datos encontrados con el select de la consulta en el array
while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;



// cerramos la conexión a la BD
$conexion->close();





print json_encode($datos);
}

?>

