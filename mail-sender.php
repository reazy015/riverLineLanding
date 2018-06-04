<?php
header("Content-Type: plain/text; charset=utf-8");

if(true){ 
    $message = "<b>Имя отправителя</b>: ".$_GET['name']."<br>";    
    $message .= "<b>Телефон</b>: " . $_GET['phone']]."<br>";
    $message .= "<b>Сумма</b>: " . $_GET['sum']]."<br>";
    send_form($message);
    $msg_result = "Сообщение успешно отправлено!"; 
} else { 
    $msg_result = "";
    foreach($errors as $all_error) {
        $msg_result .= $all_error."<br>";
    }
}

echo('Письмо отправлено');

function send_form($message) {
	
    $mail_to = 'vkn017@gmail.com';
    $subject = "Письмо с обратной связи";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: ".$subject." <no-reply@".$_SERVER['HTTP_HOST'].">\r\n";
    mail($mail_to, $subject, $message, $headers);
}
?>