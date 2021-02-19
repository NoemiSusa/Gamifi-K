<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");

$json = file_get_contents('php://input');

$params = json_decode($json);

// importamos el archivo con la conexión a la BD
require("conBDLocal.php");
// creamos la conexión
$con=conexion();



$loginExiste = mysqli_query($con,"select * from alumno WHERE nickAlumno='$params->nickAlumno' AND pasAlumno='$params->contrasenyaAlumno'");


//variable booleana que me dira si el usuario y contraseña son correctas o no
 $conectado=false;

// realizamos la query a la BD
//$loginExiste = mysqli_query($conexion, "SELECT * FROM alumno WHERE nickAlumno='$_POST[user]' AND pasAlumno='$_POST[pass]'");

$datos= [];

// si el alumno existe obtiene datos y los guarda en un array
if ($resultado = mysqli_fetch_array($loginExiste)) {

  $datos[] = $resultado;


  $conectado=true;

}else{

$text = "no existe";
$conectado = false;

  console_log($text);
}

// genera el json con los datos obtenidos

$json = json_encode($datos);
// console_log("campo3");
// muestra el json generado;

echo $json;



?>
