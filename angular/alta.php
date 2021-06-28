<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $json = file_get_contents('php://input');
 
  $params = json_decode($json);

  require("conexion.php");
  $con=retornarConexion();

  if(isset($params)){
    mysqli_query($con,"insert into articulos(descripcion,precio) values
                  ('$params->descripcion',$params->precio)");
  }

  $datos=[]; 

  $datos[0]= 'OK';
  $datos[1]= 'articulo agregado';
 

  header('Content-Type: application/json');

  $alta=json_encode($datos);
  echo $alta;
?>