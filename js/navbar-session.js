document.addEventListener("DOMContentLoaded", function(){
    const navbar = `
    <nav>
        <div class="logo"><a href="index.html"><img src="img/logo.png" alt="Logo" height="90" width="90"></a></div>
        <ul class="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="semua-video.html">Video</a></li>
            <div class="dropdown">
                <button class="dropbtn">Mata pelajaran</button>
                <div class="dropdown-content">
                    <a href="B-Indonesia.html">Bahasa Indonesia</a>
                    <a href="English.html">English</a>
                    <a href="IPA.html">IPA  </a>
                    <a href="Matematika.html">Matematika</a>
                    <a href="PKN.html">PKN</a>
                    <a href="Seni-Budaya.html">Seni Budaya</a>
                    <a href="Sejarah.html">Sejarah</a>
                </div>
            </div>
        </ul>

        <input type="text" id="searchBar" placeholder="Cari video..." onkeyup="searchVideo()">

        <ul class="button-login">
            <button class="login"><a href="logout.php" style="color: inherit; text-decoration: none;">Log out</a></button>
        </ul>
    </nav>
    `;
    document.getElementById("navbarcontainer").innerHTML = navbar;
});