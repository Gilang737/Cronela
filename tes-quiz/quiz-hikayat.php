<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kuis Hikayat</title>
    <link rel="stylesheet" href="../css/style-quiz.css">
</head>
<body>

    <div class="home"><a href="../index.php"><img src="../img/logo.png" alt="Logo" height="90" width="90"></a></div>
    <h1>Kuis Hikayat</h1>
    <div id="quizContainer"></div>
    <p id="score" style="display: none;"></p>

    <script src="../js/quiz-data.js"></script>
    <script src="../js/quiz.js"></script>
    <script src="../js/search.js"></script>
    <script>
        startQuiz("hikayat");
    </script>
</body>
</html>
