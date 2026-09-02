<?php
/**
 * Contact Form API Handler for Hostinger Shared Hosting
 * Processes form submissions from /contact page, stores message in MySQL,
 * and sends an email notification to maheshdg1617@gmail.com.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Only POST requests are allowed.']);
    exit();
}

// Get JSON input or Form POST
$input = json_decode(file_get_contents('php://input'), true) ?? $_POST;

$name    = filter_var(trim($input['name'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email   = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$subject = filter_var(trim($input['subject'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$message = filter_var(trim($input['message'] ?? ''), FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if (empty($name) || !$email || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields with a valid email address.']);
    exit();
}

$ip_address = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';

$db = getDBConnection();

$savedToDB = false;
if ($db) {
    try {
        $stmt = $db->prepare("INSERT INTO contact_messages (name, email, subject, message, ip_address, user_agent) VALUES (:name, :email, :subject, :message, :ip, :ua)");
        $savedToDB = $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':subject' => $subject,
            ':message' => $message,
            ':ip' => $ip_address,
            ':ua' => substr($user_agent, 0, 250)
        ]);
    } catch (Exception $e) {
        error_log("DB Insert error: " . $e->getMessage());
    }
}

// Send Email Notification
$to = ADMIN_EMAIL;
$mailSubject = "Website Inquiry: " . $subject;
$mailBody = "New message received from maheshmokalkar.in contact form:\n\n";
$mailBody .= "Name: " . $name . "\n";
$mailBody .= "Email: " . $email . "\n";
$mailBody .= "Subject: " . $subject . "\n\n";
$mailBody .= "Message:\n" . $message . "\n\n";
$mailBody .= "---\nReceived at " . date('Y-m-d H:i:s') . " from IP: " . $ip_address;

$headers = "From: noreply@maheshmokalkar.in\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

@mail($to, $mailSubject, $mailBody, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your message has been received successfully. We will get back to you shortly.',
    'db_saved' => $savedToDB
]);
