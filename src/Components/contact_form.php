<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "refilwet97@gmail.com";  // Replace with your recipient's email address
    $subject = "Contact Us Form Submission";
    $headers = "From: $email";
    $message = "Name: $name\nEmail: $email\nMessage: $message";
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array("success" => true, "message" => "Email sent successfully"));
    } else {
        echo json_encode(array("success" => false, "message" => "Email could not be sent"));
    }
}
?>
