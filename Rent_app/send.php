<?php
	$owner_email = "max197a@yandex.ua"; // емейл на который отправляются письма
	$headers = "Content-type: text/html; charset=utf-8 \r\n";
	$subject = 'Сообщение с сайта ' . $_SERVER['SERVER_NAME'];
	$messageBody = "";

	if($_POST["whatForm"] != ''){
		$messageBody .= '<p><strong>Форма:</strong> ' . $_POST["whatForm"] . '</p>' . "\r\n";
	}

	if($_POST['name'] != ''){
		$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
		$messageBody .= '<p><strong>Имя:</strong> ' . $name . '</p>' . "\r\n";
	}
	if($_POST['link'] != ''){
		$link = substr(htmlspecialchars(trim($_POST['link'])), 0, 100);
		$messageBody .= '<p><strong>Номер телефона:</strong> ' . $link . '</p>' . "\r\n";
	}
	if($_POST['message'] != ''){
		$message = substr(htmlspecialchars(trim($_POST['message'])), 0, 100);
		$messageBody .= '<p><strong>Номер телефона:</strong> ' . $message . '</p>' . "\r\n";
	}
	try{
		if(!mail($owner_email, $subject, $messageBody, $headers)){
			throw new Exception('mail failed');
		} else {
			echo 'mail sent';
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
	}
?>


