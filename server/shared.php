<?php

include "config.php";

function tokenToId($token)
{
    $token = str_replace('"', "", $token);
    global $conn;
    $query = 'SELECT id FROM users WHERE token = ?';
    $result = $conn->prepare($query);
    $result->bind_param('s', $token);
    $id = array();
    if ($result->execute()) {
        $result = $result->get_result();
        while ($row = $result->fetch_assoc()) {
            $id = $row['id'];
        }
        return $id;
    }
}
