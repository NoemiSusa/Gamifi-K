<?php
$conexion = conexion();

$query= "";


//coje la puntuación de un usuario en una tarea concreta
$query = "SELECT t.puntuacion FROM tareas t where t.nickAlumnoTarea='".$params->nickAlumno."' and t.nombreTarea = '".$params->nombreTarea."'";

//eliminar en cascade ponerlo en la sentencia de create table
$query = FOREIGN KEY (dni) REFERENCES clientes (dni) ON DELETE CASCADE;
$query = FOREIGN KEY (nickProfesorRK) REFERENCES profesor (nickProfesor) on delete cascade

//Listado de tareas: coje todas las tareas de un ranking de un profesor concreto
$query = "SELECT t.nombreTarea
          FROM tareas t, rankings r, profesor p
          where t.nombreRankingTarea = '".$params->nombreRankingTarea."'
            and t.nombreRankingTarea = r.nombreRanking
            and r.nickProfesorRK = '".$params->nickProfesorRK."'
            and r.nickProfesorRK = p.nickProfesor
            and r.fechaInicio = '".$params->fechaInicio."'
          GROUP by t.nombreTarea";

//seleccionamos todas las tareas de un rancking concreto con un profe y una fecha de inicio
$query = "SELECT t.nombreTarea
          FROM tareas t, rankings r, profesor p
          where t.nombreRankingTarea = '".$params->nombreRankingTarea."'
            and t.idRankingTarea = r.idRanking
            and r.nickProfesorRK = '".$params->nickProfesorRK."'
            and r.nickProfesorRK = p.nickProfesor
            and r.fechaInicio = '".$params->fechaInicio."'
          GROUP by t.nombreTarea";

//query que mostra les dades de l'alumne i la puntuació en 2 columnes i una fila per alumne ordenat de major a menor puntuació
$query = "SELECT CONCAT( al.nickAlumno, CONCAT( ' ', CONCAT( al.apellidosAlumno, CONCAT( ' ', CONCAT( al.nombreAlumno, ' ' ) ) ) ) ) AS Alumno, SUM( t.puntuacion ) AS Puntuación
          FROM alumno al, rankings r, tareas t
          WHERE r.nombreRanking = '".$params->nombreRanking."'
          AND t.nombreRankingTarea = r.nombreRanking
          AND t.nickAlumnoTarea = al.nickAlumno
          GROUP BY t.nickAlumnoTarea
          ORDER BY SUM( t.puntuacion ) DESC";

//query que mostra les dades de l'alumne i la puntuació en 2 columnes i una fila per alumne ordenat per cognom de l'alumne
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
}
// cerramos la conexión a la BD
$conexion->close();

?>
