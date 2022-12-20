<?php

$idViaje =$_GET['idViaje'];
$idCamionero =$_GET['idCamionero'];

$servername = "localhost";
$username = "id19570321_jesus";
$password = "y6MNJ*?5/phO$0&g";
$dbname = "id19570321_datos";


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
//$sql = "UPDATE `viaje` SET `progreso` = '1' WHERE `camionero`.`id` = ".$idCamionero.";";
$sql ="UPDATE `Viajes` SET `progreso` = '1' WHERE `idUsuario` = ".$idCamionero." and id=".$idViaje.";";
//echo $sql;
$result = mysqli_query($conn, $sql);
echo $result;
//va aqui la informacion que se quito
mysqli_close($conn);
?>