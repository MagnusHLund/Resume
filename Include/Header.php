<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header Example</title>
  <link rel="stylesheet" href="../css/Header.css">
  <script src="../js/Highlight.js"></script>
  <script src="../js/Database.js"></script>
  <script src="../js/Language.js"></script>
</head>
<body>
  <header class="header">
    <div class="container">
      <h1 class="logo display-4">Magnus Herringe Lund</h1>
      <nav class="navigation">
        <ul class="menu">
          <li><a href="index.html" id="HomeId" class="headerText">Hjem</a></li>
          <li><a href="about.html" id="AboutId" class="headerText">Om</a></li>
          <li><a href="education.html" id="EducationId" class="headerText">Uddannelse</a></li>
          <li><a href="projects.html" id="ProjectId" class="headerText">Projekter</a></li>
        </ul>
      </nav>
      <div id="google_translate_element"></div>
      <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
      </div>
    </header>
    <footer>
    <?php
    require "../php/Database.php";

    
    // Create a connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    
    
    // Get the visitor's IP address
    $ip_address = $_SERVER['REMOTE_ADDR'];
    
    // Check if the IP exists in the table
    $sql = "SELECT * FROM visitors WHERE ip = '$ip_address'";
    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {
      // IP exists, update the row with the actions performed on the website
      $sql = "UPDATE visitors SET Latest_visit = NOW(), Home_page_clicks = Home_page_clicks + 1 WHERE ip = '$ip_address'";
      
    } else {
      // IP doesn't exist, insert a new row with the IP and initial values
      $sql = "INSERT INTO visitors (ip, First_visit, Latest_visit, Home_page_clicks, About_page_clicks, Education_page_clicks, Projects_page_clicks, Contact_page_clicks, Projects_clicks, Submit_message_clicks, Mail_clicks, Facebook_clicks, Linkedin_clicks, Github_clicks) 
              VALUES ('$ip_address', NOW(), NOW(), 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)";
    }
    
    // Close the connection
    mysqli_close($conn);
    ?>
  </footer>
</body>
</html>
