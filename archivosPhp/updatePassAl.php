<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

require_once 'conBDLocal.php';

class UpdatePassAl{
  public function updatePasswordAl($parametros){
    $conexion = conexion();

    $update= "UPDATE alumno SET contrasenyaAlumno='".$parametros->contranueva."' WHERE nickAlumno = '".$parametros->nick."'";


    $resultado=mysqli_query($conexion,$update);
    $conexion->close();

    $nupdate;
    if($resultado){
      // si es 1 se ha realizado el update
      $nupdate=1;
    }
    else{
      // si es 0 no se ha realizado el update
      $nupdate=0;

    }

    // echo("@fichero updatePass: ".$nupdate ." :final var nupdate@");

    return $nupdate;

  }

}




?>
