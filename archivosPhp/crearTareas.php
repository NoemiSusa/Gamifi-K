<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';

class CrearTareas{
  public function generar50Tareas($idRanking){

    $conexion = conexion();

    // $query ="INSERT INTO tareas (nombreTarea, idRankingTarea)".
    // " VALUES".
    // " ('Tarea 01',".$idRanking."),".
    // " ('Tarea 02',".$idRanking."),".
    // " ('Tarea 03',".$idRanking."),".
    // " ('Tarea 04',".$idRanking."),".
    // " ('Tarea 05',".$idRanking."),".
    // " ('Tarea 06',".$idRanking."),".
    // " ('Tarea 07',".$idRanking."),".
    // " ('Tarea 08',".$idRanking."),".
    // " ('Tarea 09',".$idRanking."),".
    // " ('Tarea 10',".$idRanking."),".
    // " ('Tarea 11',".$idRanking."),".
    // " ('Tarea 12',".$idRanking."),".
    // " ('Tarea 13',".$idRanking."),".
    // " ('Tarea 14',".$idRanking."),".
    // " ('Tarea 15',".$idRanking."),".
    // " ('Tarea 16',".$idRanking."),".
    // " ('Tarea 17',".$idRanking."),".
    // " ('Tarea 18',".$idRanking."),".
    // " ('Tarea 19',".$idRanking."),".
    // " ('Tarea 20',".$idRanking."),".
    // " ('Tarea 21',".$idRanking."),".
    // " ('Tarea 22',".$idRanking."),".
    // " ('Tarea 23',".$idRanking."),".
    // " ('Tarea 24',".$idRanking."),".
    // " ('Tarea 25',".$idRanking."),".
    // " ('Tarea 26',".$idRanking."),".
    // " ('Tarea 27',".$idRanking."),".
    // " ('Tarea 28',".$idRanking."),".
    // " ('Tarea 29',".$idRanking."),".
    // " ('Tarea 30',".$idRanking."),".
    // " ('Tarea 31',".$idRanking."),".
    // " ('Tarea 32',".$idRanking."),".
    // " ('Tarea 33',".$idRanking."),".
    // " ('Tarea 34',".$idRanking."),".
    // " ('Tarea 35',".$idRanking."),".
    // " ('Tarea 36',".$idRanking."),".
    // " ('Tarea 37',".$idRanking."),".
    // " ('Tarea 38',".$idRanking."),".
    // " ('Tarea 39',".$idRanking."),".
    // " ('Tarea 40',".$idRanking."),".
    // " ('Tarea 41',".$idRanking."),".
    // " ('Tarea 42',".$idRanking."),".
    // " ('Tarea 43',".$idRanking."),".
    // " ('Tarea 44',".$idRanking."),".
    // " ('Tarea 45',".$idRanking."),".
    // " ('Tarea 46',".$idRanking."),".
    // " ('Tarea 47',".$idRanking."),".
    // " ('Tarea 48',".$idRanking."),".
    // " ('Tarea 49',".$idRanking."),".
    // " ('Tarea 50',".$idRanking.")";

    for($contador = 1; $contador < 51; $contador++){
      $nombreTarea = "Tarea ";
      if ($contador < 10){
        $nombreTarea = $nombreTarea . "0";
      }

      $nombreTarea = $nombreTarea . $contador;

      $query = "INSERT INTO tareas (nombreTarea, idRankingTarea) VALUES  ('".$nombreTarea."',".$idRanking.")";
      //$query = "INSERT INTO tareas (nombreTarea, idRankingTarea) VALUES  ('".$nombreTarea."',5)";
      //echo($idRanking);
      $resultado = mysqli_query($conexion, $query);
    }

    //$resultado = mysqli_query($conexion, $query);

    $conexion->close();

    $tareasCreadas = -1;

    if($resultado){
      $tareasCreadas = 50;
    }else{
      $tareasCreadas = -50;
    }

    // devuelve el valor a generar Ranking para poder validar los diferentes resultados 50 si se han creado o -50 si no se han creado
    return $tareasCreadas;

  }
}
?>
