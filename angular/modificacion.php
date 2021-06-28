<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=retornarConexion();
  

  mysqli_query($con,"update articulos set descripcion='$params->descripcion',
                                          precio=$params->precio
                                          where codigo=$params->codigo");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos modificados';

  $datos=[]; 

  $datos[0]= 'OK';
  $datos[1]= 'articulo actualizado';
 

  header('Content-Type: application/json');

  $actualizado=json_encode($datos);
  echo $actualizado;
?>