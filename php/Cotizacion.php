<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                           // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';      // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                  // Enable SMTP authentication
    $mail->Username   = 'rickx213@gmail.com'; // SMTP username
    $mail->Password   = 'ilqdcoxbkynxiecg';   // SMTP password
    $mail->SMTPSecure = 'tls';                 // Enable TLS encryption
    $mail->Port       = 587;                   // TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    // Recipients
    $mail->setFrom("rickx213@gmail.com", "Asegurate Aqui");
    $mail->addAddress('rickx213@gmail.com'); // Add a recipient

    // Content
    $mail->isHTML(true);                 // Set email format to HTML
    $mail->Subject = $_POST['Tema'];
    
    // Construye el cuerpo del mensaje usando los campos del formulario
    $mensaje = "Nombre: " . $_POST['Nombre'] . "<br>";
    $mensaje .= "Número Telefónico: " . $_POST['Telefono'] . "<br>";
    $mensaje .= "Correo Electrónico: " . $_POST['Correo'] . "<br><br>";
    $mensaje .= "Mensaje: " . $_POST['Mensaje'];

    $mail->Body = $mensaje;

    // Agregar adjunto si se ha subido un archivo
    if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
        $archivoNombre = $_FILES['archivo']['name'];
        $archivoTemp = $_FILES['archivo']['tmp_name'];
        $mail->addAttachment($archivoTemp, $archivoNombre);
    }

    // Enviar el correo
    $mail->send();
    header("Location: ../index.html");
    exit();
  
} catch (Exception $e) {
    echo "El mensaje no pudo ser enviado. Error del remitente: {$mail->ErrorInfo}";
}
?>