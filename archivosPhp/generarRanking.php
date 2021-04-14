<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';


//recoje los datos que le pasa el sevice en formato json
$json = file_get_contents('php://input');

// abro la conexion
$conexion = conexion();

//guardamos en la variable params los datos descodificados que recojemos del JSON que nos manda el ts
$params = json_decode($json);

// realizamos la query a la BD para realizar el insert con los valores que tendrá cada campo
$query =  "INSERT INTO rankings(nombreRanking,nickProfesorRK,codigoAcceso,fechaInicio,fechaFinal)
VALUES ('".$params->nombreRanking."','".$params->nickProfesorRK."','".$params->codigoAcceso."','".$params->fechaInicio."','String')";


// INSERT INTO rankings(nombreRanking,nickProfesorRK,codigoAcceso,fechaInicio,fechaFinal) VALUES ('usuario123','Lucian123',1618333188430,'13/4/2021','String')




// nombreRanking	nickProfesorRK	fechaInicio	codigoAcceso	fechaFinal
    //recojemos el resultado de si se ha ejecutado correctamente o no la query obteniendo true en caso que si o false en caso que no.
    $resultado =  mysqli_query($conexion, $query);

    // Para cerrar la conexion con la base de datos.
    $conexion->close();
    $respuesta = new \stdClass(); 
    $salida;

    if ($resultado==true){

        $respuesta->resultado = true;
        $respuesta->msg = "Ranking generado correctamente";

        // $respuesta->datos = [];

        $salida=1;

         echo json_encode($respuesta);
 
    }
    else if ($resultado==false){
        $salida=0;

        $respuesta->resultado = false;
        $respuesta->msg = "Error en la consulta";

        echo json_encode($respuesta);

    }
?>