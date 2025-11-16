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
        <title>Edit Profil - Cronela</title>
        <link rel="stylesheet" href="css/settings.css">
    </head>
    <body>
        <div class="container">
            <h1>Edit Profil</h1>
            
            <form action="update-settings.php" method="post">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($user['username']); ?>" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($user['email']); ?>" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Password:</label>
                    <div style="position: relative;">
                        <input type="password" id="password" name="password" value="<?php echo htmlspecialchars($user['original_password']); ?>" required>
                        <button type="button" id="togglePassword" style="position: absolute; right: 10px; top: 10px; background: none; border: none; cursor: pointer; font-size: 18px;">👁️</button>
                    </div>
                </div>
                
                <script>
                    document.getElementById('togglePassword').addEventListener('click', function() {
                        var passwordInput = document.getElementById('password');
                        var toggleBtn = document.getElementById('togglePassword');
                        
                        if (passwordInput.type === 'password') {
                            passwordInput.type = 'text';
                            toggleBtn.innerHTML = '🔒';
                        } else {
                            passwordInput.type = 'password';
                            toggleBtn.innerHTML = '👁️';
                        }
                    });
                </script>
                
                <div class="buttons">
                    <button type="submit">Simpan Perubahan</button>
                    <button type="button" class="back-button" onclick="window.location.href='settings.php'">Kembali</button>
                </div>
            </form>
        </div>
    </body>
</html>