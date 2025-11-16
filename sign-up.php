<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style-sign-up.css">
    <title>Login</title>
</head>
<body>
    <div class="container">
        
        <div class="left">
        <img src="img/banner-portrait.png" alt="Banner" class="banner-portrait">
        </div>
            <div class="logo"><a href="index.php"><img src="img/home.png" alt="logo" width="50" height="45"></a></div>
            <div class="right">
            <div class="logodatar"><img src="img/logo-datar.png" alt="" height="30px"></div>
            <h1>Create Your Account</h1>
            <form id="loginForm" action="connect.php" method="post">
                <input type="text" placeholder="username" id="username" name="username">
                <input type="email" placeholder="email" id="email" name="email">
                <input type="password" placeholder="Password" id="password" name="password">
                <button class="login-btn" type="submit">Sign Up</button>
            </form>
            <div class="login"><a href="masuk.php" style="text-decoration: none; color: inherit;">I have account</a></div>
        </div>
    </div>
</body>
</html>