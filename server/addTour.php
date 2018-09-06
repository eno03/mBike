<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include "functions.php";

if (isset($_POST['title']) && isset($_POST['description']) && isset($_POST['url']) && isset($_POST['start']) && isset($_POST['time']) && isset($_POST['price']) && isset($_POST['status_id'])) {

    $title = $_POST['title'];
    $description = $_POST['description'];
    $url = $_POST['url'];
    $start = $_POST['start'];
    $time = $_POST['time'];
    $price = $_POST['price'];
    $status_id = $_POST['status_id'];

    echo addTour($title, $description, $url, $start, $time, $price, $status_id);
}
