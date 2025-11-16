<!DOCTYPE html>
<html>
    <head>
        <title>Cronela</title>
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
        <main>
            <!-- navbar -->
            <?php include 'navbar.php'; ?>

            <h2>Matematika</h2>

            <div id="videoContainer"></div>
        </main>
        
        <div id="footer-container"></div>

        <!-- Javascript -->
        <script src="../js/videoData.js"></script>
        <script src="../js/script.js"></script>
        <script src="../js/search.js"></script>
        <script src="../js/footer.js"></script>
        <script src="../js/navbar.js"></script>
        <script>
            loadVideosBySubject("Matematika");
        </script>
    </body>
</html>