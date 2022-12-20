<?php

$idUsuario =$_GET['idUsuario'];


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
$sql = "SELECT `id`, `latInicial`, `lonInicial`, `latDestino`, `lonDestino`, `precio`, `disponible`, `idUsuario`, `progreso` FROM `Viajes` WHERE idUsuario=".$idUsuario." and progreso=2";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
      //$registros[]=$row;
      echo $row["id"].",".$row["latInicial"].",".$row["lonInicial"].",".$row["latDestino"].",".$row["lonDestino"].",".$row["precio"];
  }
  //echo json_encode($registros);
} else {
  echo "0,0,0,0,0,0";
}
mysqli_close($conn);
?>