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
