<?php
header("Content-Type: plain/text; charset=utf-8");

if(true){ // Отправляем форму если нет ошибок
    $message = "<b>Имя отправителя</b>: ".$name."<br>";
    $message .= "<b>E-mail</b>: ".$_GET['name']."<br><br>";
    $message .= "<b>Текст письма</b>: " . $_GET['phone'];
    $message .= "<b>Сумма</b>: " . $_GET['sum'];
    send_form($message);
    $msg_result = "Сообщение успешно отправлено!"; // Сообщение об успешной отправке
} else { // Выводим ошибки
    $msg_result = "";
    foreach($errors as $all_error) {
        $msg_result .= $all_error."<br>";
    }
}

echo('Письмо отправлено');

function send_form($message) {
	
	
	
	//$mail_to = "pushkarskispb@gmail.com"; // Адрес, куда отправляем письма
    $mail_to = 'vkn017@gmail.com';
    $subject = "Письмо с обратной связи"; // Тема письма
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: ".$subject." <no-reply@".$_SERVER['HTTP_HOST'].">\r\n";
    mail($mail_to, $subject, $message, $headers);
}
?>