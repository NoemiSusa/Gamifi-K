<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// En caso de tener que trabajar con PUT deberían implementarse las siguientes cabezeras
// header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
// header('Content-Type: text/html; charset=UTF-8');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
// header("Allow: GET, POST, OPTIONS, PUT, DELETE");

//recoje los datos que le pasa el sevice en formato json
$json = file_get_contents('php://input');

//guardamos en la variable params los datos descodificados que recojemos del JSON que nos manda el ts
$params = json_decode($json); //debe contener NICKAlumno y CODIGO DE ACCESO
// echo($params);

// importamos el archivo con la conexión a la BD y el fichero de insertar para luego realizar el insert
require_once 'conBDLocal.php';
require_once 'registrarAlumnoAlRanking.php';

// creamos la conexión
$conexion = conexion();

//consulta que se va a realizar para comprovar si existe el nick
$query = "SELECT count(idRanking) as contador FROM rankings WHERE codigoAcceso  = '".$params->codigoRanking."'";



// realizamos la consulta a la BD y recojemos el resultado en $resultado
$resultado = mysqli_query($conexion, $query);

$datos=[];

while($row = mysqli_fetch_assoc($resultado)) {
  // si el ranking existe obtiene datos y los guarda en el array $datos
  $datos = $row["contador"];
}

$conexion->close();

$respuesta = new \stdClass();


if (count($datos)==0){

  $respuesta->resultado = false;
  $respuesta->msg = "Error no existe ningun ranking con este codigo";
  print json_encode($respuesta);
}
else if (count($datos)!=0) {
  $datosRegistro=new RegistrarAlumno();
  // el insertado es lo que me devuelve de la clase generarRanking.php
  $insertado=$datosRegistro->insertTareaAlumno($params);

  // en funcion del resultado que recibimos de la función sabemos donde ha fallado el programa o si lo ha generado correctamente
  if($insertado==50){
    $respuesta->resultado = true;
    $respuesta->msg = "El alumno se ha logueado correctamente al ranking";
    print json_encode($respuesta);

  }else if ($insertado==-50){
    $respuesta->resultado = false;
    $respuesta->msg = "No se ha registrado correctamente el alumno al ranking vuelva a intentarlo";
    print json_encode($respuesta);

  }else{
    $respuesta->resultado = false;
    $respuesta->msg = "el alumno ya esta registrado al ranking";
    print json_encode($respuesta);
  }

}



?>
