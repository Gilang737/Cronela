<!DOCTYPE html>
<html>
    <head>
        <title>Cronela</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <main>
            <!-- navbar -->
            <?php include 'navbar.php'; ?>

            <div class="banner">
                <img src="img/banner.png" alt="Banner belajar">
                <a href="semua-video.html" class="banner-btn">Jelajahi video</a>
            </div>

            <h2>Video Unggulan</h2>
            <div id="featuredContainer"></div>

            <div id="videoContainer"></div>
        </main>

        <!-- Footer Section -->
        <div id="footer-container"></div>

        <!-- Javascript -->
        <script src="js/videoData.js"></script>
        <script src="js/script.js"></script>
        <script src="js/search.js"></script>
        <!-- <script src="js/navbar.js"></script> -->
        <script src="js/footer.js"></script>
        <script>
            loadFeaturedVideos();
        </script>
    </body>
</html>