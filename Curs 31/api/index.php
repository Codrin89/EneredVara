<?php


require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;


$app = new \Slim\Slim();
$body = $app->request->getBody();


//connect to database
function getConnection() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "api";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_select_db($conn, $dbname);
    return $conn;
}

$dbh = getConnection();

// $query = "INSERT INTO `users`( `username`, `email`, `password`, `address`, `firstname`, `lastname`, `gender`, `telephone`) VALUES ('Codrin No.1', 'codrin@gmail.com', 'codrincodrin', 'Nicolina', 'Alexandru', 'Codrin', 'male', 321321)"; 
// $result = mysqli_query($dbh, $query);
// die;
// POST route

$app->post(
    '/register-data',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "INSERT INTO `users` (`firstName`,`lastName`) VALUES ('".$result['firstName']."','".$result['lastName']."')";
        $result = mysqli_query($dbh, $query);
    }
);

$app->post(
    '/login-data',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "SELECT * FROM `users` WHERE `password`='".$result['password']."' AND (`username`='".$result['username']."' OR `email`='".$result['username']."')";
        $result = mysqli_query($dbh, $query); 
        $info = mysqli_fetch_assoc($result);
        if($info != NULL) {
            echo json_encode($info, true);
        } else {
            echo "Try again!";
        }

    }
);


$app->post(
    '/checkLoggedIn',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "SELECT `firstName` FROM `users` WHERE `ID`='".$result["ID"]."'";
        $result = mysqli_query($dbh, $query);
        $info = mysqli_fetch_assoc($result);
        echo json_encode($info, true);
    }
);



/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
