<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');
// header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
// header('Content-Type: text/html; charset=UTF-8');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
// header("Allow: GET, POST, OPTIONS, PUT, DELETE");

//recoje los datos que le pasa el sevice en formato json
$json = file_get_contents('php://input');

//guardamos en la variable params los datos descodificados que recojemos del JSON que nos manda el ts
$params = json_decode($json);

// importamos el archivo con la conexión a la BD y el fichero de insertar para luego realizar el insert
require_once 'conBDLocal.php';
require_once 'generarRanking.php';

// creamos la conexión
$conexion = conexion();

//consulta que se va a realizar para comprovar si existe el nick
$query = "SELECT * FROM profesor WHERE nickProfesor='$params->nickProfesor'";
// realizamos la consulta a la BD y recojemos el resultado en $resultado que será true o false en función de se ejecuta o no.
$resultado = mysqli_query($conexion, $query);

//iniciamos la variable $datos como array donde vamos a guardar los datos que obtengamos de la consulta.
$datos= [];

// hacemos un bucle para que mientras encuentre datos el resultado del select los vaya guardando en la variable datos []
while($row = mysqli_fetch_assoc($resultado)) {
  // si el profesor existe obtiene datos y los guarda en el array $datos
  $datos[] = $row;
}
//cerramos la conexion con la BD
$conexion->close();




?>