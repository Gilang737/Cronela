<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="css/navbar.css">
    </head>

    <body>
        <div class="nav-bar">
            <nav>
            <div class="logo"><a href="index.php"><img src="img/logo-datar-white.png" alt="Logo" height="45" width="222"></a></div>
            <ul class="menu">
                <li><a href="index.php">Home</a></li>
                <li><a href="semua-video.php">Video</a></li>
                <div class="dropdown">
                    <button class="dropbtn">Mata pelajaran</button>
                    <div class="dropdown-content">
                        <a href="B-Indonesia.php">Bahasa Indonesia</a>
                        <a href="English.php">English</a>
                        <a href="Matematika.php">Matematika</a>
                        <a href="PKN.php">PKN</a>
                        <a href="Seni-Budaya.php">Seni Budaya</a>
                        <a href="Sejarah.php">Sejarah</a>
                        <a href="Biologi.php">Biologi</a>
                        <a href="Fisika.php">Fisika</a>
                        <a href="Kimia.php">Kimia</a>
                        <a href="Ekonomi.php">Ekonomi</a>
                        <a href="Sosiologi.php">Sosiologi</a>
                        <a href="Geografi.php">Geografi</a>
                        <a href="Informatika.php">Informatika</a>
                        <a href="PJOK.php">PJOK</a>
                    </div>
                </div>
            </ul>

                <div class="user">
                    <?php
                    session_start();
                    if (isset($_SESSION['username'])) {
                        echo '<a href="logout.php" class="login">Logout</a>';
                        echo '<a href="settings.php" class="signup">Settings</a>';
                    } else {
                        echo '<a href="masuk.php" class="login">Login</a>';
                        echo '<a href="sign-up.php" class="signup">Sign Up</a>';
                    }
                    ?>
                </div>
            </nav>


            <div class="search"><input type="text" id="searchBar" placeholder="Cari video..." onkeyup="searchVideo()"></div>
        </div>
    </body>
</html>
