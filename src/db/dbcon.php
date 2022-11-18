<?php

//DB details
$dbHost     = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName     = 'lab3-idweb-db';

$con = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

if (!$con) {
    die('Connection Failed' . mysqli_connect_error());
}

?>