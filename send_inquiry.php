<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Get JSON or POST data
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$category = isset($data['category']) ? trim(strip_tags($data['category'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

if (empty($name) || empty($email) || empty($phone) || empty($category) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill out all required fields."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email address."]);
    exit();
}

$to = "info@jalpexinternational.com";
$subject = "New Import Inquiry ($category) from $name";

// HTML Email Body
$emailBody = "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>New Import Inquiry</title>
</head>
<body style='font-family: Arial, sans-serif; background-color: #FAF6EE; color: #241D12; margin: 0; padding: 20px;'>
  <table width='100%' border='0' cellspacing='0' cellpadding='0' style='max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 12px; overflow: hidden; border: 1px solid #E5DFD3; box-shadow: 0 4px 20px rgba(0,0,0,0.08);'>
    <tr style='background: #182543; color: #FFFFFF;'>
      <td style='padding: 24px; text-align: center;'>
        <h2 style='margin: 0; font-size: 22px; color: #c29652; text-transform: uppercase; letter-spacing: 1px;'>Jalpex International</h2>
        <p style='margin: 6px 0 0 0; font-size: 13px; color: #E0D6C3;'>New Import Trade Inquiry Received</p>
      </td>
    </tr>
    <tr>
      <td style='padding: 28px;'>
        <table width='100%' border='0' cellspacing='0' cellpadding='10' style='font-size: 14px; border-collapse: collapse;'>
          <tr style='border-bottom: 1px solid #F0EAE1;'>
            <td width='35%' style='font-weight: bold; color: #6F6555;'>Full Name / Company:</td>
            <td style='color: #182543; font-weight: bold;'>" . htmlspecialchars($name) . "</td>
          </tr>
          <tr style='border-bottom: 1px solid #F0EAE1;'>
            <td style='font-weight: bold; color: #6F6555;'>Email Address:</td>
            <td><a href='mailto:" . htmlspecialchars($email) . "' style='color: #c29652; text-decoration: none; font-weight: bold;'>" . htmlspecialchars($email) . "</a></td>
          </tr>
          <tr style='border-bottom: 1px solid #F0EAE1;'>
            <td style='font-weight: bold; color: #6F6555;'>Phone Number:</td>
            <td style='color: #182543;'>" . htmlspecialchars($phone) . "</td>
          </tr>
          <tr style='border-bottom: 1px solid #F0EAE1;'>
            <td style='font-weight: bold; color: #6F6555;'>Product Category:</td>
            <td style='color: #c29652; font-weight: bold;'>" . htmlspecialchars(ucwords($category)) . "</td>
          </tr>
        </table>
        
        <div style='margin-top: 24px; padding: 16px; background: #FAF6EE; border-left: 4px solid #c29652; border-radius: 4px;'>
          <p style='margin: 0 0 8px 0; font-weight: bold; color: #182543; font-size: 13px; text-transform: uppercase;'>Requirement Details:</p>
          <p style='margin: 0; font-size: 14px; line-height: 1.6; color: #241D12; white-space: pre-wrap;'>" . nl2br(htmlspecialchars($message)) . "</p>
        </div>

        <div style='margin-top: 28px; text-align: center;'>
          <a href='mailto:" . htmlspecialchars($email) . "?subject=RE:%20Import%20Inquiry%20-%20Jalpex%20International' style='display: inline-block; background: #182543; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: bold;'>Reply to Buyer</a>
        </div>
      </td>
    </tr>
    <tr style='background: #FAF6EE; border-top: 1px solid #E5DFD3; text-align: center; color: #6F6555; font-size: 12px;'>
      <td style='padding: 16px;'>
        Sent via Jalpex International Trade Portal &bull; <a href='https://jalpexinternational.com' style='color: #c29652;'>jalpexinternational.com</a>
      </td>
    </tr>
  </table>
</body>
</html>
";

// Headers
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Jalpex Trade Portal <noreply@jalpexinternational.com>" . "\r\n";
$headers .= "Reply-To: $name <$email>" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $emailBody, $headers)) {
    echo json_encode(["success" => true, "message" => "Your inquiry has been sent directly to info@jalpexinternational.com!"]);
} else {
    // If local mail fails or server requires SMTP fallback
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Unable to send email. Please try again or email us directly at info@jalpexinternational.com"]);
}
