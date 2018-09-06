<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include "functions.php";

if (isset($_POST['bike_id']) && isset($_POST['user_id']) && isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['address']) && isset($_POST['start']) && isset($_POST['end']) && isset($_POST['quantity']) && isset($_POST['price']) && isset($_POST['delivered'])) {

    $bike_id = $_POST['bike_id'];
    $user_id = $_POST['user_id'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $address = $_POST['address'];
    $start = $_POST['start'];
    $end = $_POST['end'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];
    $delivered = $_POST['delivered'];

    echo rentBike($bike_id, $user_id, $firstname, $lastname, $address, $start, $end, $quantity, $price, $delivered);
}
