<?php


if (isset($_POST['send']))){
    $name = $_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    
    $mailTo = "mail@lazycoders.email";
    $headers = "From: ".$email;
    $txt = "You have recieved an e-mail from ".$name.".\n\n".$message; 
    

    mail($mailTo,$subject,$txt, $headers);
    header("Location: index.php?mailsend");
}