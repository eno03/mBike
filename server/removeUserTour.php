<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include "functions.php";

if (isset($_POST['title']) && isset($_POST['email']) && isset($_POST['date'])) {
    $title = $_POST['title'];
    $email = $_POST['email'];
    $date = $_POST['date'];

    echo removeUserTour($title, $email, $date);
}
