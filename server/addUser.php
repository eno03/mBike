<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Token, token, TOKEN');

include "functions.php";

if (isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['address']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['role_id'])) {

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $role_id = $_POST['role_id'];

    echo addUser($firstname, $lastname, $address, $email, $password, $role_id);
}
