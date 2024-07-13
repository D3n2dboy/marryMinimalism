<?php
/**
 * This example shows sending a message using PHP's mail() function.
 */

//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('from@example.com', 'First Last'); // Указать нужный E-mail

// Кому будут писать ответ 
$mail->addReplyTo('replyto@example.com', 'First Last');

//Кому отправить
$mail->addAddress('whoto@example.com', 'John Doe');

//Тема письма
$mail->Subject = 'Привет! Это проверка письма';

//Тело письма
$body = '<h1>Встречайте супер письмо!</h1>';
    
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';


//send the message, check for errors
if (!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent!';
}