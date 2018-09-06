<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include "functions.php";

if (isset($_POST['tour_id']) && isset($_POST['userId']) && isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['date'])) {

    $tour_id = $_POST['tour_id'];
    $userId = $_POST['userId'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $date = $_POST['date'];

    echo bookTour($tour_id, $userId, $firstname, $lastname, $date);
}
