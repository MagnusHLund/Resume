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

// Get the visitor's IP address
$ip_address = $_SERVER['REMOTE_ADDR'];

if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $forwardedIps = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
    $ip_address = trim(end($forwardedIps));
}

// Use $clientIp in your code to track the visitor's IP address


// Prepare the SQL statement
$sql = "SELECT * FROM visitors WHERE ip = '$ip_address'";

// Execute the SQL statement
$result = mysqli_query($conn, $sql);

// Check if the query was successful
if ($result) {
    // Check if the IP address exists in the table
    if (mysqli_num_rows($result) > 0) {
        // IP address exists, update the latest_visit column
        $sql = "UPDATE visitors SET latest_visit = NOW() WHERE ip = '$ip_address'";
        if (mysqli_query($conn, $sql)) {
            // Latest visit updated successfully
        } 
    } else {
        // IP address doesn't exist, insert a new row
        $sql = "INSERT INTO visitors (ip, first_visit, latest_visit) VALUES ('$ip_address', NOW(), NOW())";
        if (mysqli_query($conn, $sql)) {
            // New visitor added successfully
        } 
    }
}

// Close the connection
mysqli_close($conn);
?>
