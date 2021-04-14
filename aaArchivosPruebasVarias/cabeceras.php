<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

$json = file_get_contents('php://input');

$params = json_decode($json);

require_once 'conBDLocal.php';

$conexion = conexion();

$query









$resultado = mysqli_query($conexion, $query);

// inciamos la variable $datos como array donde vamos a guardar los datos que obtengamos de la consulta
$datos = [];

// bucle para que guarde los datos encontrados con el select de la consulta en el array
while ($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}
// cerramos la conexión a la BD
$conexion->close();





print json_encode($datos);

}

?>

