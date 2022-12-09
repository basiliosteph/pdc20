<?php

$dbconnect = mysqli_connect("localhost", "pdc20user", "admin", "pdc20");
if (mysqli_connect_errno())
{
    echo "Failed to connect to MYSQL" .mysqli_connect_error();
    die();
}

?>