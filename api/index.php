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
        $query = "INSERT INTO `users` (`firstName`,`lastName`,`email`,`username`,`gender`,`password`,`adress`,`telephone`) VALUES ('".$result['firstName']."','".$result['lastName']."','".$result['email']."','".$result['username']."','".$result['gender']."','".$result['password']."','".$result['address']."','".$result['telephone']."')";
        var_dump($query);
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

$app->get(
    '/getMainPageOffers',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `listing` ORDER BY `ID` DESC";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_array($result, MYSQL_ASSOC)) {
            if($count != 6) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);


$app->post(
    '/getSingleListing',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "SELECT * FROM `listing` WHERE `ID`='".$result['ID']."'";
        $result = mysqli_query($dbh, $query); 
        $arrayResult = mysqli_fetch_assoc($result);
        echo json_encode($arrayResult);
    }
);

$app->post(
    '/searchListings',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "SELECT * FROM `listing` WHERE `title` LIKE '%".$result['query']."%' OR `description` LIKE '%".$result['query']."%' OR `zone` LIKE '%".$result['query']."%'";
        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        while($row = mysqli_fetch_array($result, MYSQL_ASSOC)) {
            array_push($arrayResult, $row);     
        }
        echo json_encode($arrayResult);
    }
);

$app->post(
    '/saveListing',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "INSERT INTO `saved` (`userID`,`listingID`) VALUES (".$result['userID'].", ".$result['listingID'].")";
        $result = mysqli_query($dbh, $query); 
    }
);



/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();