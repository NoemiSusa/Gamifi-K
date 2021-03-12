<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD


$json = file_get_contents('php://input');
// echo($json."este es el echo del php editPass");
echo ($json);

$parametros = json_decode($json);

// echo($parametros->nick);


require_once 'conBDLocal.php';
require_once 'updatePass.php';

$conexion = conexion();

$consulta = "SELECT pasProfesor from profesor WHERE nickProfesor='".$parametros->nick."'";

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


// // si no ha cojido datos es que la contraseña no coincide con el ncik
// if(count($datos)===0){
//   $valorContrasenya=0;
//  print json_encode($valorContrasenya);
// }else{
//  // si es 1 es coincide la contraseña
//  $valorContrasenya=1;

//   if(count($datos)===1){
//     $updatePass = new UpdatePass();
//     $updated=$updatePass->updatePassword($parametros);
//     if($updated==1){
//       // si valor contraseña es =2 se ha realizado el update
//       $valorContrasenya=2;
//       print json_encode($updated);
//     $valorContrasenya=2;
//     }
//     else{
//       // quuiere decir que el problema esta en el fichero update pass
//       $valorContrasenya=3;
//       print json_encode($updated);
//     }
//   }
//   // $parametros
// }


// si  ha cojido datos es que la contraseña  coincide con el nick
if(count($datos)===1){
  $valorContrasenya=1;
  // print json_encode($valorContrasenya);
  $updatePass = new UpdatePass();
  $updated=$updatePass->updatePassword($parametros);


  if($updated==1){
    // si valor contraseña es =2 se ha realizado el update
    $valorContrasenya=2;
    print json_encode($updated);
  $valorContrasenya=2;
  }
  else{
    // quuiere decir que el problema esta en el fichero update pass
    $valorContrasenya=3;
    print json_encode($updated);
  }
}else{
  // si es 0 es que no coincide la contraseña
    $valorContrasenya=0;
}
  // $parametros
}

?>
