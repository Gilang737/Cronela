function searchVideo() {
    let input = document.getElementById("searchBar").value.toLowerCase().trim();
    let videos = document.getElementsByClassName("video-box");

    for (let i = 0; i < videos.length; i++) {
        let title = videos[i].querySelector("p").innerText.toLowerCase();
        let subject = videos[i].querySelectorAll("p")[1].innerText.toLowerCase();

        if (title.includes(input) || subject.includes(input)) {
            videos[i].style.display = "block";
        } else {
            videos[i].style.display = "none";
        }
    }
}
