<?php
$conexion = conexion();

$query= "";


//coje la puntuación de un usuario en una tarea concreta
$query = "SELECT t.puntuacion FROM tareas t where t.nickAlumnoTarea='".$params->nickAlumno."' and t.nombreTarea = '".$params->nombreTarea."'";










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
