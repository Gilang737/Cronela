<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: masuk.php");
    exit;
}

$conn = new mysqli('localhost', 'root', '', 'cronela');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

$oldUsername = $_SESSION['username'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("UPDATE users SET username = ?, email = ?, password = ?, original_password = ? WHERE username = ?");
$stmt->bind_param("sssss", $username, $email, $hashed_password, $password, $oldUsername);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    $_SESSION['username'] = $username;
    $_SESSION['original_password'] = $password;
    echo "<script>alert('Profil berhasil diperbarui!'); window.location.href = 'settings.php';</script>";
} else {
    echo "<script>alert('Gagal memperbarui profil!'); window.location.href = 'settings-edit.php';</script>";
}

$stmt->close();
$conn->close();
?>