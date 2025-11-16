<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);    

    $namaLengkap = $_POST['namaLengkap'];
    $nomorTelepon = $_POST['nomorTelepon'];
    $email = $_POST['email'];
    $pesan = $_POST['pesan'];

    //Database connection
    $conn = new mysqli('localhost', 'root', '', 'cronela');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into message(namaLengkap, nomorTelepon, email, pesan) values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $namaLengkap, $nomorTelepon, $email, $pesan);
        $stmt->execute();
        echo "<script>alert('Pesan berhasil dikirim!'); window.location.href = 'index.php';</script>";
        $stmt->close();
        $conn->close();
    }
?>