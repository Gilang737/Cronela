<?php
    session_start();

    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $_SESSION['original_password'] = $password;
    
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    $_SESSION['username'] = $username;

    $conn = new mysqli('localhost', 'root', '', 'cronela');

    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into users(username, email, password, original_password) values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $username, $email, $hashed_password, $password);
        $stmt->execute();
        echo "<script>alert('Kamu berhasil sign up'); window.location.href = 'index.php';</script>";
        $stmt->close();
        $conn->close();
    }

    if (isset($_SESSION['username'])) {
        echo "Halo, " . $_SESSION['username'];
    } else {
        echo "Belum login.";
    }
?>