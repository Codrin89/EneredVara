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
    $dbname = "adi_database";

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
        $query = "INSERT INTO `users` (`firstName`,`lastName`,`email`,`password`,`gender`,`username`,`address`,`telephone`) VALUES ('".$result['firstName']."','".$result['lastName']."','".$result['email']."','".$result['password']."','".$result['gender']."','".$result['username']."','".$result['address']."','".$result['telephone']."')";
     ;
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
    '/getMainProducts',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `home` = 'Home'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/produse',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `type` = 'Preparate'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/pork',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `sub_type` = 'Preparate_porc'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/produsepui',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `sub_type` = 'Preparate_pui'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/vita',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `sub_type` = 'Preparate_vita'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/fructedemare',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `sub_type` = 'Fructe_mare'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/garniturisalate',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `type` = 'Garnituri_salate'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/desert',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `type` = 'Desert'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->get(
    '/bauturi',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` WHERE `type` = 'Bauturi'";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
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
        $query = "SELECT * FROM `produse` WHERE `id`='".$result['ID']."'";
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
        $query = "SELECT * FROM `produse` WHERE `nume` LIKE '%".$result['query']."%' OR `sub_type` LIKE '%".$result['query']."%' OR `type` LIKE '%".$result['query']."%'";
        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        while($row = mysqli_fetch_array($result)) {
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
        $query = "INSERT INTO `cos` (`u`,`p`) VALUES (".$result['userID'].", ".$result['productID'].")";
        $result = mysqli_query($dbh, $query); 
    }
);


$app->post(
    '/savedListings',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "SELECT * FROM `cos` WHERE `u`='".$result['theID']."'";
        $result = mysqli_query($dbh, $query); 
        $array = [];
         while($row = mysqli_fetch_array($result)) {
            $query = "SELECT * FROM `produse` WHERE `id`='".$row['p']."'";
            $listingResult = mysqli_query($dbh, $query);
            array_push($array, mysqli_fetch_assoc($listingResult));
            
        }
       
        echo json_encode($array);
    }
);

$app->get(
    '/getIDproduct',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `cos`";

        $result = mysqli_query($dbh, $query); 
        $arrayResult = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($result)) {
            if($count != 1000) {
                $count++;
                array_push($arrayResult, $row); 
            }     
        }
        echo json_encode($arrayResult);
    }
);

$app->post(
    '/deleteProduct',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $result = json_decode($json, true);
        $query = "DELETE FROM `cos` WHERE `u` = '".$result['idU']."' AND `p` = '".$result['idP']."' AND `ID` = '".$result['idC']."'";
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