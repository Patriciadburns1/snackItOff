<?php
//http://localhost:8000/public/api/snackapi.php?action=getauto&search=kettle
$search = $_GET['search'];
if( strlen($search) < 125){

    $query = "SELECT `ID`,`name` FROM `products` WHERE `name` LIKE '%$search%' LIMIT 12";

    $result = mysqli_query($conn, $query);

    if ($result){
        //the query successfully ran
        if(mysqli_num_rows($result)>0 ){
            //there was data
            while( $row = mysqli_fetch_assoc($result) ) {
                //get all the data
                $output['data'][] = $row;
            }
            $output['success'] = true;
            }
            else{
                //there was no data
                $output['error'][] = 'no data avail';
            }


    }else{
        //the query failed
        $output['error'][] = mysqli_error($conn);
    }
}else{
    $output['error'] = 'unreasonable query length';
}

