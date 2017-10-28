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



// POST route

$app->post(
    '/register-data',
    function () use ($app, $dbh) {

        $json = $app->request->getBody();
        $result = json_decode($json, true);
        var_dump($result);
         $query =  "INSERT INTO `users`(`firstName`,`lastName`, `email`, `password`,`gender`, `username`, `address`, `telephone`) VALUES ('". $result['firstName'] ."', '". $result['lastName'] ."', '". $result['email'] ."', '". $result['password'] ."','". $result['gender'] ."','". $result['username'] ."', '". $result['address'] ."', '". $result['phone'] ."')";

        // $query = "INSERT INTO `users` (`firstName`) VALUES ('" . $result["firstName"] ."')";
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
            echo "Successfully logged in";
        } else {
            echo "Try again!";
        }

    }
);




/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
