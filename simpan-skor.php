<?php
session_start();
header('Content-Type: application/json'); // Pastikan header JSON

// Log untuk debugging
error_log("Received request for simpan-skor.php");

// Ambil data JSON dari request
$input = file_get_contents('php://input');
error_log("Raw input: " . $input);
$data = json_decode($input, true);

// Validasi data yang diterima
if (!isset($data['quizTitle']) || !isset($data['score'])) {
    error_log("Data tidak lengkap");
    echo json_encode(['status' => 'error', 'message' => 'Data tidak lengkap']);
    exit;
}

$quizTitle = $data['quizTitle'];
$score = $data['score'];
$username = isset($_SESSION['username']) ? $_SESSION['username'] : 'guest';

error_log("Processing: Quiz=$quizTitle, Score=$score, Username=$username");

$host = 'localhost';
$db_username = 'root';
$db_password = '';
$database = 'cronela';

try {
    $conn = new mysqli($host, $db_username, $db_password, $database);

    // Cek koneksi
    if ($conn->connect_error) {
        error_log("Database connection error: " . $conn->connect_error);
        echo json_encode(['status' => 'error', 'message' => 'Koneksi database gagal: ' . $conn->connect_error]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO skor_soal (username, nama_kuis, skor) VALUES (?, ?, ?)");
    if (!$stmt) {
        error_log("Prepare statement error: " . $conn->error);
        echo json_encode(['status' => 'error', 'message' => 'Prepare statement gagal: ' . $conn->error]);
        exit;
    }

    $stmt->bind_param("ssi", $username, $quizTitle, $score);
    
    if ($stmt->execute()) {
        error_log("Score saved successfully");
        echo json_encode(['status' => 'success']);
    } else {
        error_log("Execute error: " . $stmt->error);
        echo json_encode(['status' => 'error', 'message' => 'Gagal menyimpan skor: ' . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
} catch (Exception $e) {
    error_log("Exception: " . $e->getMessage());
    echo json_encode(['status' => 'error', 'message' => 'Exception: ' . $e->getMessage()]);
}
?>