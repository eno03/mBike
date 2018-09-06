<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include "functions.php";

if (isset($_POST['id']) && isset($_POST['bike_id']) && isset($_POST['quantity'])) {
    $id = $_POST['id'];
    $bike_id = $_POST['bike_id'];
    $quantity = $_POST['quantity'];
    echo deliveredBike($id, $bike_id, $quantity);
}
