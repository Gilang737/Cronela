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

$username = $_SESSION['username'];
$stmt = $conn->prepare("SELECT username, email, original_password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
} else {
    echo "Data tidak ditemukan";
    exit;
}

$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pengaturan Akun - Cronela</title>
    <link rel="stylesheet" href="css/settings.css">
</head>
<body>
    <div class="container">
        <h1>Pengaturan Akun</h1>
        
        <div class="profile-info">
            <div>
                <label>Username:</label>
                <div class="value"><?php echo htmlspecialchars($user['username']); ?></div>
            </div>
            
            <div>
                <label>Email:</label>
                <div class="value"><?php echo htmlspecialchars($user['email']); ?></div>
            </div>
            
            <div>
                <label>Password:</label>
                <div class="value" style="position: relative;">
                    <span id="passwordDisplay">••••••••</span>
                    <span id="actualPassword" style="display: none;"><?php echo htmlspecialchars($user['original_password']); ?></span>
                    <button type="button" id="togglePassword" style="position: absolute; right: 0; top: 0; background: none; border: none; cursor: pointer; font-size: 18px;">👁️</button>
                </div>
            </div>
            
            <script>
                document.getElementById('togglePassword').addEventListener('click', function() {
                    var passwordDisplay = document.getElementById('passwordDisplay');
                    var actualPassword = document.getElementById('actualPassword');
                    var toggleBtn = document.getElementById('togglePassword');
                    
                    if (passwordDisplay.style.display === 'none') {
                        passwordDisplay.style.display = 'inline';
                        actualPassword.style.display = 'none';
                        toggleBtn.innerHTML = '👁️';
                    } else {
                        passwordDisplay.style.display = 'none';
                        actualPassword.style.display = 'inline';
                        toggleBtn.innerHTML = '🔒';
                    }
                });
            </script>
        </div>
        
        <div class="buttons">
            <a href="settings-edit.php">Edit Profil</a>
            <a href="index.php" class="back-button">Kembali ke Beranda</a>
        </div>
    </div>
</body>
</html>