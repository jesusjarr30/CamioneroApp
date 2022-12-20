<?php

$id =$_GET['id'];

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
$sql = "SELECT idUsuario FROM `Viajes` WHERE progreso=2 and idUsuario=".$id;
//echo $sql;

$result = mysqli_query($conn, $sql);
//echo $result;
if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
      $registros[]=$row;
      echo $row["idUsuario"];
      //echo $row;
  }
  //echo json_encode($registros);
  //echo $registros[0];
} else {
  echo "0";
}
//va aqui la informacion que se quito
mysqli_close($conn);
?>