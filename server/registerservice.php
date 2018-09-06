<?php

header('Access-Control-Allow-Methods: POST');
include "functions.php";

if (isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['address']) && isset($_POST['email']) && isset($_POST['password'])) {

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    echo register($firstname, $lastname, $address, $email, $password);

}
