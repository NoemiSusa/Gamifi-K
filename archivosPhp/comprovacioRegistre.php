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
require_once 'insertar.php';

// creamos la conexión
$conexion = conexion();

//consulta que se va a realizar
$query = "SELECT * FROM profesor WHERE nickProfesor='$params->nickProfesor'";
// realizamos la consulta a la BD y recojemos el resultado en $resultado
$resultado = mysqli_query($conexion, $query);

//iniciamos la variable $datos como array donde vamos a guardar los datos que obtengamos de la consulta.
$datos= [];

// hacemos un bucle para que mientras encuentre datos el resultado del select los vaya guardando en la variable datos []
while($row = mysqli_fetch_assoc($resultado)) {
  // si el profesor existe obtiene datos y los guarda en un array
  $datos[] = $row;
}
$conexion->close();

//creamos la variable donde pondremos 0 cuando ese nick no exista en la bd o 1 en caso que ya exista.
$valorRegistro;

//si no ha recogido datos es que no exiete en la base de datos
if (count($datos) === 0 ) {

  // creo el objeto datosRegistro de la clase Insertar y le paso los parametros para poder realizar el insert a la base de datos
  $datosRegistro = new Insertar();

  //insertado recoje el resultado de ejecutar la función insertarRegistroProfesores($params) donde le hemos pasado los parametros que llevan los valores para realizar el insert
  // insertado valdrá 1 si se ha realizado el insert a la base de datos o 0 en caso que haya fallado y no se haya realizado.
   $insertado=$datosRegistro->insertarRegistroProfesores($params);


  // $valorRegistro = 0;
  // print json_encode($valorRegistro);
  // //  ***********print '{ "mensage": "0" }';

  // comprovamos que se haya realizado el insert
  if($insertado == 0){
      // $mensaje = 'Error no se ha podido realizar el insert';
      // print json_encode($mensaje);
      $insertado = 9;
      // print json_encode($mensajeError);
    print json_encode($insertado);

  }else{
      $insertado=0;
      // $mensaje = 'perfecto te has registrado correctamente a la base de datos';
      // print json_encode($mensaje);
    print json_encode($insertado);
  }
} else {

  $valorRegistro = 1;
  print json_encode($valorRegistro);
  // *******************print '{ "mensage": "1" }';

}

// // genera el json con los datos obtenidos
// $json = json_encode($valorRegistro);
// // muestra el json generado
// echo $json;

// return json_encode($valorRegistro);

?>
