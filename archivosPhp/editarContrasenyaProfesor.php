<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD


$json = file_get_contents('php://input');
// echo($json."este es el echo del php editPass");
// echo ($json);

$parametros = json_decode($json);

// echo($parametros->nick);


require_once 'conBDLocal.php';
require_once 'updatePass.php';

$conexion = conexion();

$consulta = "SELECT pasProfesor from profesor WHERE nickProfesor='".$parametros->nick."' AND contrasenyaProfesor='".$parametros->contraVieja."'";

// echo ("@Esta es la consulta@@@@  ".$consulta." @@@@Esta es la consulta@");

// echo json_encode("Resp: "+$parametros->nick);

$resultadoContraVieja = mysqli_query($conexion,$consulta);

// inciiamos la variabgle datos como array donde vamos a guardar los datos que vamos a guardar en la consulta
$datos=[];

while($row = mysqli_fetch_assoc($resultadoContraVieja)){
    //si la contraseña existe y es la misma obtiene datos y los guarda en el array $datos
  $datos[] = $row;

  }
  $conexion->close();





  // creamos la variable donde pondremos un 0 cuando esa contraseña no coincida con el nick de usuario en la db o 1 en caso de que coincida
  $valorContrasenya;

// si  ha cojido datos es que la contraseña  coincide con el nick
if(count($datos)===1){
  $valorContrasenya=1;
  // print json_encode($valorContrasenya);

  // creo una instancia de la clase updatePass
  $updatePass = new UpdatePass();
  // creo una variable que la igualo a la vez a la instancia de la clase updatePass
  //a la variable updatePass estoy haciendo una instancia en la funcion de update password que esta en update pass y le paso los parametros.
  $updated=$updatePass->updatePassword($parametros);

  if($updated==1){
    // si valor contraseña es =2 se ha realizado el update
    $valorContrasenya=2;
    // print json_encode("@@ PRINT ENCODE UPDATED 1".$updated."@@ FINAL 1@");
    echo json_encode($valorContrasenya);
  }
  else{
    // quuiere decir que el problema esta en el fichero update pass
    $valorContrasenya=3;
    // print json_encode("@@ PRINT ENCODE UPDATED 2".$updated."@@ FINAL 2@");
    echo json_encode($valorContrasenya);
  }
}else{
  // si es 0 es que no coincide la contraseña
    $valorContrasenya=0;
    echo json_encode($valorContrasenya);
}
  // $parametros


?>
