document.addEventListener("DOMContentLoaded", function () {
    const footer = `
    <footer>
        <div class="footer-info">
                <div>
                    <h2><a href="./form.php">Contact Us</a></h2>
                </div>
                <div>
                    <h5>Send Email</h5>
                    <p><a href="mailto:gs7832583@gmail.com">cronela@gmail.com</a></p>
                </div>
                <div>
                    <h5>Find Us</h5>
                    <a href="https://www.instagram.com/itscronela/"><img alt="instagram" src="../img/instagram-logo.png"/></a>
                </div>
            </div>
            <hr />
            <div class="footer-bottom">
                <div class="footer-logo">
                </div>
                <p>Copyright &copy; Cronela 2025</p>
            </div>
    </footer>
    `;
    document.getElementById("footer-container").innerHTML = footer;
});