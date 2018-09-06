<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include "functions.php";

if (isset($_POST['brand_id']) && isset($_POST['model']) && isset($_POST['type_id']) && isset($_POST['description']) && isset($_POST['url']) && isset($_POST['quantity']) && isset($_POST['price'])) {

    $brand_id = $_POST['brand_id'];
    $model = $_POST['model'];
    $type_id = $_POST['type_id'];
    $description = $_POST['description'];
    $url = $_POST['url'];
    $quantity = $_POST['quantity'];
    $price = $_POST['price'];

    echo addBike($brand_id, $model, $type_id, $description, $url, $quantity, $price);
}
