<?php

$brand = $_GET['brand'];
	
$sql = "SELECT * from `" . $brand . "`";

$conn = new mysqli('localhost','root','','testdata');

$result = $conn->query($sql);

$array = $result->fetch_all();

echo json_encode($array);

$conn->close();

?>