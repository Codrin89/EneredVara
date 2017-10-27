<?php
echo 'something';

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


$query = "UPDATE `user` SET `firstName`='Codrin' WHERE `ID`=3"; 
 
        $result = mysqli_query($dbh, $query);
        die;
        
        

// POST route

$app->post(
    '/register-data',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);

        $query = "INSERT INTO `user`( `username`, `email`, `password`, `address`, `date_of_birth`, `phone`, `country`, `city`, `firstname`, `lastname`, `gender`, `occupation`) VALUES ('".$result['username']."',[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])"; 
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
