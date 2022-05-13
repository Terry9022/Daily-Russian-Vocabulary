<?php    

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    include 'pwd.php';
        
    // Create new connection through mysqli using the four pieces of credentials
    $conn = new mysqli($servername, $username, $password, $db);

    // Check connection and quit if it doesn't work
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // insert level and email data into MySQL
    $level = $_GET['level'];
    $email = $_GET['email'];
    $sql = "INSERT INTO finalProject (level, email) VALUES ('$level','$email')";
    
    // Set our query results on the database to a variable
    $result = $conn->query($sql);

    if ($result) {
    // the message
    $msg = "Thank you for subscribing Daily Russian Vocabulary. We'll send you daily vocabulary to your email. Enjoy your learning everyday";

    // use wordwrap() if lines are longer than 70 characters
    $msg = wordwrap($msg,70);

    // send email
    mail($email,"Daily Russian Vocabulary",$msg);
    }

    // Close connection - ALWAYS DO THIS
    $conn->close();

}
?>
