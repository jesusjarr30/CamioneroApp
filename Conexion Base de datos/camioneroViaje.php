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
$sql = "select id,latInicial,lonInicial,latDestino,lonDestino,precio FROM Viajes where idUsuario=".$idUsuario.";";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
      $registros[]=$row;
  }
  echo json_encode($registros);
} else {
  echo "0 results";
}
mysqli_close($conn);
?>