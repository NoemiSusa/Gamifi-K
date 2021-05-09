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
$query = "SELECT * FROM rankings WHERE nickProfesorRK='".$params->nickProfesorRK."' AND nombreRanking ='".$params->nombreRanking."' AND fechaInicio = '".$params->fechaInicio."'";


// realizamos la consulta a la BD y recojemos el resultado en $resultado que será true o false en función de se ejecuta o no.
$resultado = mysqli_query($conexion, $query);
$datos=[];
while($row = mysqli_fetch_assoc($resultado)) {
  // si el ranking existe obtiene datos y los guarda en el array $datos
  $datos[] = $row;
}

$conexion->close();

$respuesta = new \stdClass();


if (count($datos)!=0){

  $respuesta->resultado = false;
  $respuesta->msg = "Error ya existe este ranking";
  print json_encode($respuesta);
}
else if (count($datos)==0) {
  $datosRegistro=new GenerarRanking();
  // el insertado es lo que me devuelve de la clase generarRanking.php
  $insertado=$datosRegistro->insertRanking($params);

  // en funcion del resultado que recibimos de la función sabemos donde ha fallado el programa o si lo ha generado correctamente
  if($insertado==1){
    $respuesta->resultado = false;
    $respuesta->msg = "Ranking generado correctamente pero no ha llegado a ejecutar la creación de las tareas";
    print json_encode($respuesta);

  }else if ($insertado==0){
    $respuesta->resultado = false;
    $respuesta->msg = "No se ha podido crear el Ranking";
    print json_encode($respuesta);

  }else if ($insertado==2){
    $respuesta->resultado = true;
    $respuesta->msg = "Se ha generado el Ranking y creado las tareas del mismo";
    print json_encode($respuesta);

  }else if ($insertado==3){
    $respuesta->resultado = false;
    $respuesta->msg = "Se ha generado el Ranking pèro no se han podido generar las tareas.";
    print json_encode($respuesta);
  }





?>
