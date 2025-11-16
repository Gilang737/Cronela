<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style-form.css">
    <title>Login</title>
</head>
<body>  
    <div class="container">
        <div class="left">
            <div class="logo">
                <a href="index.php"><img src="img/arrow.png" alt="logo" width="50" height="50"></a>
                <a href="index.php"><img src="img/logo.png" alt="logo" width="50" height="50"></a>
            </div>
            <h1>Kirimkan kami pesan</h1>
            <form id="loginForm" action="contact.php" method="post">
                <input type="text" placeholder="Nama Lengkap" id="name" name="namaLengkap">
                <input type="text" placeholder="Nomor Telepon" id="nomor-telepon" name="nomorTelepon">
                <input type="email" placeholder="Email Address" id="email" name="email">
                <textarea id="pesan" placeholder="Sampaikan pesanmu di sini" cols="30" rows="10" name="pesan"></textarea>
                <button class="login-btn" type="submit">Kirim</button>
            </form>
        </div>
    </div>
</body>
</html> 