<?php

$Camionero =$_GET['Camionero'];
$Nombre =$_GET['Nombre'];

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
//$sql = "UPDATE `camionero` SET `borradoLogico` = '0' WHERE `camionero`.`id` = ".$Camionero.";";
$sql ="UPDATE `camionero` SET `nombre` = '".$Nombre."' WHERE `camionero`.`id` = ".$Camionero.";";
//echo $sql;
$result = mysqli_query($conn, $sql);
echo $result;
//va aqui la informacion que se quito
mysqli_close($conn);
?>