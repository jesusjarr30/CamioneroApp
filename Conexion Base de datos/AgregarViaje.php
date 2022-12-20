<?php

$lat1=$_GET['lat1'];
$lon1 =$_GET['lon1'];
$lat2 =$_GET['lat2'];
$lon2 =$_GET['lon2'];
$precio =$_GET['precio'];
$Activo =1;
$server = "localhost";
$user = "id19570321_jesus";
$password = "y6MNJ*?5/phO$0&g";
$db = "id19570321_datos";

$conn=mysqli_connect($server,$user,$password,$db);
if(!$conn){
    echo "error de conexion".mysqli_connect_error();
}

$sql="INSERT INTO Viajes (latInicial,lonInicial,latDestino,lonDestino,precio,disponible,idUsuario,progreso) VALUES ('$lat1', '$lon1', '$lat2', '$lon2', '$precio', '$Activo',0,0);";
if(mysqli_query($conn,$sql)){
    echo "1";
    
}else{
    echo "0";
}
mysqli_close($conn);
?>