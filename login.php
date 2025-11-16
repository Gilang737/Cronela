<?php
session_start();

$conn = new mysqli('localhost', 'root', '', 'cronela');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT username, email, password, original_password FROM users WHERE username = ? AND email = ?");
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    
    if (password_verify($password, $user['password'])) {
        $_SESSION['username'] = $username;
        $_SESSION['original_password'] = $user['original_password'];
        echo "<script>alert('Login berhasil!'); window.location.href = 'index.php';</script>";
    } else {
        echo "<script>alert('Username atau password salah!'); window.location.href = 'masuk.php';</script>";
    }
} else {
    echo "<script>alert('Username atau password salah!'); window.location.href = 'masuk.php';</script>";
}

$stmt->close();
$conn->close();
?>