
$app->get(
    '/getMainProducts',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $query = "SELECT * FROM `produse` ORDER BY `ID`";

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