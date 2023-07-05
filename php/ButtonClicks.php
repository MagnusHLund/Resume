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
$data = json_decode(file_get_contents('php://input'), true);
// Extract the buttonName value
$buttonName = $data['buttonName'];

// Prepare the SQL statement
$sql = "UPDATE visitors SET $buttonName = $buttonName + 1";

// Execute the SQL statement
$result = mysqli_query($conn, $sql);

// Close the database connection
mysqli_close($conn);
?>
