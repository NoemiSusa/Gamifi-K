<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Accept");
header('Content-Type: application/json');

// importamos el archivo con la conexión a la BD
require_once 'conBDLocal.php';

class CrearTareas{
  public function generar50Tareas($params){

    $conexion = conexion();

    $query ="INSERT INTO `tareas`(`nombreTarea`, `idRankingTarea`)
    VALUES
    ('Tarea 1',$params),
    ('Tarea 2',$params),
    ('Tarea 3',$params),
    ('Tarea 4',$params),
    ('Tarea 5',$params),
    ('Tarea 6',$params),
    ('Tarea 7',$params),
    ('Tarea 8',$params),
    ('Tarea 9',$params),
    ('Tarea 10',$params),
    ('Tarea 11',$params),
    ('Tarea 12',$params),
    ('Tarea 13',$params),
    ('Tarea 14',$params),
    ('Tarea 15',$params),
    ('Tarea 16',$params),
    ('Tarea 17',$params),
    ('Tarea 18',$params),
    ('Tarea 19',$params),
    ('Tarea 20',$params),
    ('Tarea 21',$params),
    ('Tarea 22',$params),
    ('Tarea 23',$params),
    ('Tarea 24',$params),
    ('Tarea 25',$params),
    ('Tarea 26',$params),
    ('Tarea 27',$params),
    ('Tarea 28',$params),
    ('Tarea 29',$params),
    ('Tarea 30',$params),
    ('Tarea 31',$params),
    ('Tarea 32',$params),
    ('Tarea 33',$params),
    ('Tarea 34',$params),
    ('Tarea 35',$params),
    ('Tarea 36',$params),
    ('Tarea 37',$params),
    ('Tarea 38',$params),
    ('Tarea 39',$params),
    ('Tarea 40',$params),
    ('Tarea 41',$params),
    ('Tarea 42',$params),
    ('Tarea 43',$params),
    ('Tarea 44',$params),
    ('Tarea 45',$params),
    ('Tarea 46',$params),
    ('Tarea 47',$params),
    ('Tarea 48',$params),
    ('Tarea 49',$params),
    ('Tarea 50',$params)";

    $resultado = mysqli_query($conexion, $query);

    $conexion->close();

    $tareasCreadas = -1;

    if($resultado){
      $tareasCreadas = 50;
    }else{
      $tareasCreadas = -50;
    }
    return $tareasCreadas;

  }

}
