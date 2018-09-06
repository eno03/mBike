<?php
include "shared.php";

function checkIfLoggedIn()
{
    global $conn;
    if (isset($_SERVER['HTTP_TOKEN'])) {
        $token = $_SERVER['HTTP_TOKEN'];
        $result = $conn->prepare("SELECT * FROM users WHERE token=?");
        $result->bind_param("s", $token);
        $result->execute();
        $result->store_result();
        $num_rows = $result->num_rows;
        if ($num_rows > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function login($email, $password)
{
    global $conn;
    $rarray = array();
    if (checkLogin($email, $password)) {
        $id = sha1(uniqid());
        $result2 = $conn->prepare("UPDATE users SET token=? WHERE email=?");
        $result2->bind_param("ss", $id, $email);
        $result2->execute();
        $rarray['token'] = $id;

    } else {
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Invalid username/password";
    }
    return json_encode($rarray);
}

function checkLogin($email, $password)
{
    global $conn;
    $password = md5($password);
    $result = $conn->prepare("SELECT * FROM users WHERE email=? AND password=?");
    $result->bind_param("ss", $email, $password);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if ($num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

function checkLoginID($id)
{
    global $conn;
    $result = $conn->prepare("SELECT * FROM users WHERE id=? ");
    $result->bind_param("i", $id);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if ($num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

function register($firstname, $lastname, $address, $email, $password)
{
    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfUserExists($email)) {
        $errors .= "Profile with that email already exists\r\n";
    }
    if (strlen($email) < 5) {
        $errors .= "Email must have at least 5 characters\r\n";
    }
    if (strlen($password) < 5) {
        $errors .= "Password must have at least 5 characters\r\n";
    }
    if (strlen($firstname) < 3) {
        $errors .= "First name must have at least 3 characters\r\n";
    }
    if (strlen($lastname) < 3) {
        $errors .= "Last name must have at least 3 characters\r\n";
    }
    if ($errors == "") {
        $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, address, email, password) VALUES (?, ?, ?, ?,?)");
        $pass = md5($password);
        $stmt->bind_param("sssss", $firstname, $lastname, $address, $email, $pass);
        if ($stmt->execute()) {
            $id = sha1(uniqid());
            $result2 = $conn->prepare("UPDATE users SET token=? WHERE email=?");
            $result2->bind_param("ss", $id, $email);
            $result2->execute();
            $rarray['token'] = $id;

        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = "Database connection error";
        }
    } else {
        header('HTTP/1.1 400 Bad request');
        $rarray['error'] = json_encode($errors);
    }

    return json_encode($rarray);
}

function checkIfUserExists($email)
{
    global $conn;
    $result = $conn->prepare("SELECT * FROM users WHERE email=?");
    $result->bind_param("s", $email);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if ($num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

function getUser($token)
{
    $token = str_replace('"', "", $token);
    global $conn;
    $query = 'SELECT id, firstname, lastname, address, email, token, role_id,
      (SELECT name FROM role WHERE role.id = users.role_id) AS role_name
      FROM users
      WHERE users.token = ?';
    $user = array();
    $statement = $conn->prepare($query);
    $statement->bind_param('i', $token);
    if ($statement->execute()) {
        $result = $statement->get_result();
        while ($row = $result->fetch_assoc()) {
            $user['id'] = $row['id'];
            $user['firstname'] = $row['firstname'];
            $user['lastname'] = $row['lastname'];
            $user['address'] = $row['address'];
            $user['email'] = $row['email'];
            $user['role_id'] = $row['role_id'];
            $user['role_name'] = $row['role_name'];

        }
    }
    return json_encode($user);
}

function getUsers()
{
    global $conn;
    $rarray = array();

    $result = $conn->query("SELECT * FROM users");
    $num_rows = $result->num_rows;
    $users = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT * FROM users");
        while ($row = $result2->fetch_assoc()) {
            array_push($users, $row);
        }
    }
    $rarray['users'] = $users;
    return json_encode($rarray);

}

function addUser($firstname, $lastname, $address, $email, $password, $role_id)
{
    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfLoggedIn()) {

        if ($errors == "") {
            $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, address, email, password, role_id )
        VALUES (?, ?, ?, ?, ?, ?)");
            $pass = md5($password);
            $stmt->bind_param('sssssi', $firstname, $lastname, $address, $email, $pass, $role_id);

            if ($stmt->execute()) {
                $id = sha1(uniqid());
                $result2 = $conn->prepare("UPDATE users SET token=? WHERE email=?");
                $result2->bind_param("ss", $id, $email);
                $result2->execute();
                $rarray['success'] = "ok";
            } else {
                $rarray['error'] = "Database connection error";
            }
            return json_encode($rarray);
        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = json_encode($errors);
            return json_encode($rarray);
        }

    } else {
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

function removeUser($id)
{
    global $conn;
    $message = array();
    $query = 'DELETE
      FROM users
      WHERE users.id = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("i", $id);
    $statement->execute();
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}

function getTours()
{
    global $conn;
    $rarray = array();

    $result = $conn->query("SELECT * FROM tours");
    $num_rows = $result->num_rows;
    $tours = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT * FROM tours");
        while ($row = $result2->fetch_assoc()) {
            array_push($tours, $row);
        }
    }
    $rarray['tours'] = $tours;
    return json_encode($rarray);

}

function addTour($title, $description, $url, $start, $time, $price, $status_id)
{

    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfLoggedIn()) {

        if ($errors == "") {
            $stmt = $conn->prepare("INSERT INTO tours (title, description, url, start, time, price,status_id )
        VALUES (?, ?, ?, ?, ?, ?,?)");
            $stmt->bind_param('sssssii', $title, $description, $url, $start, $time, $price, $status_id);
            if ($stmt->execute()) {

                $rarray['success'] = "ok";
            } else {
                $rarray['error'] = "Database connection error";
            }
            return json_encode($rarray);
        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = json_encode($errors);
            return json_encode($rarray);
        }

    } else {
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

function removeTour($id)
{
    global $conn;
    $message = array();
    $query = 'DELETE
      FROM tours
      WHERE tours.id = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("i", $id);
    $statement->execute();
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}

function addBike($brand_id, $model, $type_id, $description, $url, $quantity, $price)
{

    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfLoggedIn()) {

        if ($errors == "") {
            $stmt = $conn->prepare("INSERT INTO bicycles (brand_id, model, type_id, description, url, quantity,price )
        VALUES (?, ?, ?, ?, ?, ?,?)");
            $stmt->bind_param('isissii', $brand_id, $model, $type_id, $description, $url, $quantity, $price);
            if ($stmt->execute()) {

                $rarray['success'] = "ok";
            } else {
                $rarray['error'] = "Database connection error";
            }
            return json_encode($rarray);
        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = json_encode($errors);
            return json_encode($rarray);
        }

    } else {
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

function getBikes()
{
    global $conn;
    $rarray = array();
    $result = $conn->query("SELECT * FROM bicycles");
    $num_rows = $result->num_rows;
    $bicycles = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT * FROM bicycles");
        while ($row = $result2->fetch_assoc()) {
            array_push($bicycles, $row);
        }
    }
    $rarray['bicycles'] = $bicycles;
    return json_encode($rarray);

}

function removeBike($id)
{
    global $conn;
    $message = array();
    $query = 'DELETE
      FROM bicycles
      WHERE bicycles.id = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("i", $id);
    $statement->execute();
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}

function rentBike($bike_id, $user_id, $firstname, $lastname, $address, $start, $end, $quantity, $price, $delivered)
{

    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfLoggedIn()) {

        if ($errors == "") {
            $stmt = $conn->prepare("INSERT INTO rentals (bike_id, user_id, firstname, lastname, address, start,end, quantity,price,delivered)
        VALUES (?,?,?,?,?,?,?,?,?,?)");
            $stmt->bind_param('iisssssiis', $bike_id, $user_id, $firstname, $lastname, $address, $start, $end, $quantity, $price, $delivered);
            if ($stmt->execute()) {

                $rarray['success'] = "ok";
            } else {
                $rarray['error'] = "Database connection error";
            }
            return json_encode($rarray);
        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = json_encode($errors);
            return json_encode($rarray);
        }

    } else {
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

function getRentals()
{
    global $conn;
    $rarray = array();

    $result = $conn->query("SELECT rentals.id, rentals.bike_id, brand.name , bicycles.model , rentals.firstname, rentals.lastname, rentals.address, users.email, rentals.start, rentals.end , rentals.quantity, rentals.price , rentals.delivered FROM `rentals` JOIN bicycles JOIN brand JOIN users ON rentals.bike_id=bicycles.id AND rentals.user_id= users.id AND bicycles.brand_id = brand.id");
    $num_rows = $result->num_rows;
    $rentals = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT rentals.id, rentals.bike_id, brand.name , bicycles.model , rentals.firstname, rentals.lastname, rentals.address, users.email, rentals.start, rentals.end , rentals.quantity, rentals.price , rentals.delivered FROM `rentals` JOIN bicycles JOIN brand JOIN users ON rentals.bike_id=bicycles.id AND rentals.user_id= users.id AND bicycles.brand_id = brand.id");
        while ($row = $result2->fetch_assoc()) {
            array_push($rentals, $row);
        }
    }
    $rarray['rentals'] = $rentals;
    return json_encode($rarray);

}

function deliveredBike($id, $bike_id, $quantity)
{
    global $conn;
    $message = array();
    $query = "UPDATE rentals SET delivered=true WHERE id=?";
    $statement = $conn->prepare($query);
    $statement->bind_param("i", $id);
    $statement->execute();
    if ($statement->execute()) {
        $quantity_new = getQuantity($bike_id) - $quantity;
        $stmt = $conn->prepare("UPDATE bicycles SET quantity=? WHERE id=?");
        $stmt->bind_param("ii", $quantity_new, $bike_id);
        $stmt->execute();
        $message['success'] = "OK";

    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}

function getQuantity($bike_id)
{
    global $conn;
    if ($stmt = $conn->prepare("SELECT quantity FROM bicycles WHERE id=?")) {

        $stmt->bind_param("i", $bike_id);
        $stmt->execute();
        $stmt->bind_result($quantity);
        $stmt->fetch();

        $stmt->close();
    }
    return ($quantity);
}

function removeRental($id)
{
    global $conn;
    $message = array();
    $query = "DELETE FROM rentals WHERE rentals.id = ?";
    $statement = $conn->prepare($query);
    $statement->bind_param("i", $id);
    $statement->execute();
    if ($statement->execute()) {
        $quantity_new = getQuantity($bike_id) + $quantity;
        $stmt = $conn->prepare("UPDATE bicycles SET quantity=? WHERE id=?");
        $stmt->bind_param("ii", $quantity_new, $bike_id);
        $stmt->execute();

        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}

function bookTour($tour_id, $user_id, $firstname, $lastname, $date)
{
/////////////
    global $conn;
    $rarray = array();
    $errors = "";
    if (checkIfLoggedIn()) {

        if ($errors == "") {
            $stmt = $conn->prepare("INSERT INTO bookings (tour_id, user_id, firstname, lastname, date)
        VALUES (?,?,?,?,?)");
            $stmt->bind_param('iisss', $tour_id, $user_id, $firstname, $lastname, $date);
            if ($stmt->execute()) {

                $rarray['success'] = "ok";
            } else {
                $rarray['error'] = "Database connection error";
            }
            return json_encode($rarray);
        } else {
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = json_encode($errors);
            return json_encode($rarray);
        }

    } else {
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

function getBookings()
{
    global $conn;
    $rarray = array();
    $result = $conn->query("SELECT tours.title, users.email, bookings.firstname, bookings.lastname, bookings.date , tours.price FROM bookings JOIN tours JOIN users ON bookings.tour_id = tours.id AND bookings.user_id = users.id");
    $num_rows = $result->num_rows;
    $bookings = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT tours.title, users.email, bookings.firstname, bookings.lastname, bookings.date , tours.price FROM bookings JOIN tours JOIN users ON bookings.tour_id = tours.id AND bookings.user_id = users.id ");
        while ($row = $result2->fetch_assoc()) {
            array_push($bookings, $row);
        }
    }
    $rarray['bookings'] = $bookings;
    return json_encode($rarray);
}

function getUserRentals()
{
    global $conn;
    $rarray = array();
    $result = $conn->query("SELECT brand.name , bicycles.model , rentals.firstname , rentals.lastname , rentals.address , users.email , rentals.start, rentals.end, rentals.quantity, rentals.price, rentals.delivered FROM rentals JOIN bicycles JOIN users JOIN type JOIN brand ON rentals.bike_id = bicycles.id AND bicycles.type_id = type.id AND bicycles.brand_id=brand.id AND rentals.user_id = users.id");
    $num_rows = $result->num_rows;
    $rentals = array();
    if ($num_rows > 0) {
        $result2 = $conn->query("SELECT brand.name , bicycles.model , rentals.firstname , rentals.lastname , rentals.address , users.email , rentals.start, rentals.end, rentals.quantity, rentals.price, rentals.delivered FROM rentals JOIN bicycles JOIN users JOIN type JOIN brand ON rentals.bike_id = bicycles.id AND bicycles.type_id = type.id AND bicycles.brand_id=brand.id AND rentals.user_id = users.id");
        while ($row = $result2->fetch_assoc()) {
            array_push($rentals, $row);
        }
    }
    $rarray['rentals'] = $rentals;
    return json_encode($rarray);
}

function removeUserTour($title, $email, $date)
{

    global $conn;
    $message = array();
    $query = 'DELETE bookings FROM bookings JOIN users JOIN tours ON bookings.tour_id = tours.id AND bookings.user_id = users.id WHERE users.email= ? AND tours.title = ? AND bookings.date = ?';
    $statement = $conn->prepare($query);
    $statement->bind_param("sss", $email, $title, $date);
    $statement->execute();
    if ($statement->execute()) {
        $message['success'] = "OK";
    } else {
        $message['error'] = "Error!";
    }
    return json_encode($message);
}
