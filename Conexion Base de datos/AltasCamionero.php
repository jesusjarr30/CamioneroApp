<?php

$Nombre=$_GET['Nombre'];
$Seguro =$_GET['Seguro'];
$Curp =$_GET['Curp'];
$Edad =$_GET['Edad'];
$Activo =1;
$BorradoLogico=1;
$Password2=123;

$server = "localhost";
$user = "id19570321_jesus";
$password = "y6MNJ*?5/phO$0&g";
$db = "id19570321_datos";

$conn=mysqli_connect($server,$user,$password,$db);
if(!$conn){
    echo "error de conexion".mysqli_connect_error();
}



$sql="INSERT INTO camionero (nombre,seguroSocial,curp,edad,activo,borradoLogico,password) VALUES ('$Nombre', '$Seguro', '$Curp', '$Edad', '$Activo', '$BorradoLogico','$Password2');";
if(mysqli_query($conn,$sql)){
    echo "1";
    
}else{
    echo "0";
}
mysqli_close($conn);
?>