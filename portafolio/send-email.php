<?php

 
//Make sure that it is a POST request.
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
    throw new Exception('Request method must be POST!');
}
 
//Make sure that the content type of the POST request has been set to application/json
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
/*
if(strcasecmp($contentType, 'application/json') != 0){
    throw new Exception('Content type must be: application/json');
}
*/
 
//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode($content, true);
 
//If json_decode failed, the JSON is invalid.
if(!is_array($decoded)){
    throw new Exception('Received content contained invalid JSON!');
}
 
//Process the JSON.
$to = $decoded['to'];
$from = $decoded['from'];
$cc = $decoded['cc'];
$cco = $decoded['cco'];
$name = $decoded['name'];
$email = $decoded['email'];
$phone = $decoded['phone'];
$comment = $decoded['comment'];
$subject = $decoded['subject'];
$message = $decoded['message'];

/*
$message = "
<!DOCTYPE html>
<html lang='es'>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<meta http-equiv='X-UA-Compatible' content='ie=edge'>
<title>$subject</title>
<body>
<p>$message</p>
<p>
<span>Nombre: $name</span>
<span>E-Mail: $email</span>
<span>Teléfono: $phone</span>
<span>Comentario: $comment</span>
</p>
<p>Atte.</p>
<p>Team MyProfile</p>
</body>
</html>
";
*/

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "From: $from" . "\r\n";
$headers .= "Cc: $cc" . "\r\n";
$headers .= "Cco: $cco" . "\r\n";

if (mail($to,$subject,$message,$headers)) {
    echo 'Your mail has been sent successfully.';
} 
else {
    echo 'Unable to send email. Please try again.';
}
?>