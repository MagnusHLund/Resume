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

// Get the total number of visitors
$sql = "SELECT COUNT(*) as total_visitors FROM visitors";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$totalVisitors = $row['total_visitors'];

// Close the result set
mysqli_free_result($result);

// Close the connection
mysqli_close($conn);

// Output the total number of visitors
echo $totalVisitors;
?>
