<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
// header('Content-Type: text/html; charset=UTF-8');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
// header("Allow: GET, POST, OPTIONS, PUT, DELETE");

//recoje los datos que le pasa el sevice
$json = file_get_contents('php://input');

//guardamos en la variable params los datos descodificados que recojemos del JSON
$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require 'conBDLocal.php';
// require 'insertar.php';

// creamos la conexión
$conexion = conexion();

// realizamos la query a la BD y recojemos el resultado
$query = "SELECT * FROM profesor WHERE nickProfesor='$params->nickProfesor'";
$resultado = mysqli_query($conexion, $query);

//iniciamos la variable como array
$datos= [];

// hacemos un bucle para que mientras encuentre datos el resultado del select los vaya guardando en la variable datos []
while($row = mysqli_fetch_assoc($resultado)) {
  $datos[] = $row;
}


// si el profesor existe obtiene datos y los guarda en un array
if (count($datos) === 0 ) {
  print json_encode($params);

  // // creo el objeto datosRegistro de la clase insertar y le paso los parametros para poder realizar el insert a la base de datos
  // $datosRegistro = new Insertar();
  // $insetado=$datosRegistro->insertarRegistroProfesores($params);

  // if(insetado === 0){
  //   // $mensaje = 'Error no se ha podido realizar el insert';
  //   // print json_encode($mensajeError);


  // }else{
  //   // $mensaje = 'perfecto te has registrado correctamente a la base de datos';
  // }
  // $datosRegistro = new Insertar();
  // $registro=$datosRegistro->insertarRegistroProfesores($datos);
} else {

  print '{ "mensage": "problemas ya existe este nick" }';

}

// // genera el json con los datos obtenidos
// $json = json_encode($datos);
// // muestra el json generado
// echo $json;

?>
