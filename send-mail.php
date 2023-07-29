<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'salomigandra234@gmail.com'; 
    $subject = 'New message from your website';
    $headers = "From: $email";

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if(mail($to, $subject, $body, $headers)) {
        echo 'Thank You! Your message has been sent.';
    } else {
        echo 'Sorry, there was a problem sending your message. Please try again later.';
    }
}
?>

