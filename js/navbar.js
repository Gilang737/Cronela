document.addEventListener("DOMContentLoaded", function(){
    const navbar = `
    <nav>
        <div class="logo"><a href="index.php"><img src="img/logo.png" alt="Logo" height="90" width="90"></a></div>
        <ul class="menu">
            <li><a href="index.php">Home</a></li>
            <li><a href="semua-video.php">Video</a></li>
            <div class="dropdown">
                <button class="dropbtn">Mata pelajaran</button>
                <div class="dropdown-content">
                    <a href="B-Indonesia.php">Bahasa Indonesia</a>
                    <a href="English.php">English</a>
                    <a href="IPA.php">IPA  </a>
                    <a href="Matematika.php">Matematika</a>
                    <a href="PKN.php">PKN</a>
                    <a href="Seni-Budaya.php">Seni Budaya</a>
                    <a href="Sejarah.php">Sejarah</a>
                </div>
            </div>
        </ul>

        <input type="text" id="searchBar" placeholder="Cari video..." onkeyup="searchVideo()">

        <ul class="button-login">
            <?php
            if (isset($_SESSION['username'])) {
                echo '<a class="login" href="logout.php">Logout</a>';
            } else {
                echo '<a class= "login" href="masuk.php">Login</a>';
                echo '<a class= "signup" href="sign-up.php"">Sign Up</a>';
            }
            ?>
        </ul>
    </nav>
    `;
    document.getElementById("navbarcontainer").innerHTML = navbar;
});