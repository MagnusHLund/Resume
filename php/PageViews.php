<?php
$servername = "x";
$username = "x";
$password = "x";
$database = "x";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve the JSON string from $_POST and decode it
$data = json_decode($_POST['data'], true);
// Extract the pageName value
$pageName = $data['pageName'];

// Prepare the SQL statement
$columnToUpdate = $pageName . "_page_clicks";
$sql = "UPDATE visitors SET $columnToUpdate = $columnToUpdate + 1";

// Execute the SQL statement
$result = mysqli_query($conn, $sql);

var_dump($sql);

// Close the database connection
mysqli_close($conn);
?>
