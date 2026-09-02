<?php
/**
 * Hostinger Shared Hosting Database & Environment Configuration
 * 
 * Update these constants with your Hostinger MySQL database details
 * created in Hostinger cPanel / hPanel -> MySQL Databases.
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'mahesh_mokalkar_db'); // Hostinger database name (e.g., u123456_maheshdb)
define('DB_USER', 'root');                // Hostinger database user (e.g., u123456_maheshuser)
define('DB_PASS', '');                    // Hostinger database password

define('ADMIN_EMAIL', 'maheshdg1617@gmail.com');
define('SITE_TITLE', 'Mahesh Mokalkar — Official Website');

/**
 * PDO Database Connection Helper
 */
function getDBConnection() {
    static $pdo = null;
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            // Log error internally in production
            error_log("Database connection failed: " . $e->getMessage());
            return null;
        }
    }
    return $pdo;
}
