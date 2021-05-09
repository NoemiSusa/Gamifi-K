<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';
require_once 'crearTareas.php';

class GenerarRanking{

  public function insertRanking($params){

    //recoje los datos que le pasa el sevice en formato json
    // $json = file_get_contents('php://input');

    // abro la conexion
    $conexion = conexion();

    //guardamos en la variable params los datos descodificados que recojemos del JSON que nos manda el ts
    // $params = json_decode($json);

    // realizamos la query a la BD para realizar el insert con los valores que tendrá cada campo
    $query =  "INSERT INTO rankings(nombreRanking,nickProfesorRK,codigoAcceso,fechaInicio,fechaFinal)
    VALUES ('".$params->nombreRanking."','".$params->nickProfesorRK."','".$params->codigoAcceso."','".$params->fechaInicio."','".$params->fechaFinal."')";


    // nombreRanking	nickProfesorRK	fechaInicio	codigoAcceso	fechaFinal
    //recojemos el resultado de si se ha ejecutado correctamente o no la query obteniendo true en caso que si o false en caso que no.
    $resultado =  mysqli_query($conexion, $query);

    // Para cerrar la conexion con la base de datos.
    $conexion->close();

    $insertado=-1;


    //validamos si creamos el Ranking a la tabla Ranking
    if ($resultado==true){

      $insertado=1;

      $conexion = conexion();

      //seleccionamos el id del Ranking que acabamos de crear
      $query = "SELECT idRanking
                FROM rankings
                where nombreRanking = '".$params->nombreRanking."'
                AND nickProfesorRK = '".$params->nickProfesorRK."'
                AND fechaInicio = '".$params->fechaInicio."'";

      $resultado = mysqli_query($conexion, $query);

      $datos=[];
      while($row = mysqli_fetch_assoc($resultado)) {
        // si el ranking existe obtiene datos y los guarda en el array $datos
        $datos[]= $row;
      }

      $idRanking = $datos[0];
      $conexion->close();

      //vamos a crear las 50 tareas del ranking que acabamos de generar.
      $datosTareas = new CrearTareas();
      $nuevasTareas = $datosTareas->generar50Tareas($idRanking);

      //validamos si se han creado las tareas correctamente o no
      if($nuevasTareas == 50){
        $insertado = 2;
      }else{
        $insertado=3;
      }
    //en caso que no se genere el ranking
    }else if ($resultado==false){
        $insertado=0;
    }
    return  $insertado;
  }
}
