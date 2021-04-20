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
  $respuesta->msg = "Error hay datos en la base de datos";
  echo json_encode($respuesta);
}

else if (count($datos)==0) {
        $datosRegistro=new GenerarRanking();
        // el insertado es lo que me devuelve de la clase generarRanking.php
        $insertado=$datosRegistro->insertRanking($params);
  if($insertado==1){
    $respuesta->resultado = true;
        $respuesta->msg = "Ranking generado correctamente";
        echo json_encode($respuesta);
  }
  else if ($insertado==0){
    $respuesta->resultado = false;
    $respuesta->msg = "Fallo al insertar los datos";
    echo json_encode($respuesta);
  }


}






?>
