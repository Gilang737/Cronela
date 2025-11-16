class VideoPlayer {
    constructor(videoId, title, subject) {
      this.videoId = videoId;
      this.title = title;
      this.subject = subject;
    }
  
    getEmbedCode() {
      return `<iframe width="460" height="250" src="https://www.youtube.com/embed/${this.videoId}" frameborder="0" allowfullscreen></iframe>`;
    }
  
    render(containerId) {
        const container = document.getElementById(containerId);

        const videoElement = document.createElement("div");
        videoElement.style.textAlign = "center";
        videoElement.classList.add("video-box");

        videoElement.innerHTML = this.getEmbedCode();

        //mapel
        const subject = document.createElement("p");
        subject.innerHTML = `<a href="${this.subject.toLowerCase()}.php">${this.subject}</a>`;
        // subject.innerText = this.subject;
        subject.style.fontSize = "14px";
        subject.style.fontWeight = "bold";
        subject.style.marginTop = "5px";
        subject.style.cursor = "pointer";
        
        const titleElement = document.createElement("p");
        titleElement.innerText = this.title;
        titleElement.style.fontSize = "18px";
        titleElement.style.fontWeight = "bold";
        titleElement.style.marginTop = "10px";
        titleElement.style.marginBottom = "10px";

        //kuis
        const quizButton = document.createElement("a");
        // quizButton.href = `kuis-${this.subject.toLowerCase()}.php`;
        quizButton.href = `tes-quiz/quiz-${this.title.toLowerCase()}.php`;
        quizButton.innerText = "Kerjakan Kuis";
        quizButton.classList.add("quiz-btn");

        
        videoElement.appendChild(subject);
        videoElement.appendChild(titleElement);
        videoElement.appendChild(quizButton);
        container.appendChild(videoElement);
    }
  }
  
// Untuk menampilkan video sesuai mapel
function loadVideosBySubject(subject) {
    const container = document.getElementById("videoContainer");
    container.innerHTML = "";

    videoList.forEach(video => {
        if (video.subject === subject) {
            const player = new VideoPlayer(video.id, video.title, video.subject);
            player.render("videoContainer");
        }
    });
}

//untuk menampilkan video unggulan di beranda
function loadFeaturedVideos() {
  const container = document.getElementById("featuredContainer");
  container.innerHTML = "";

  const featuredVideos = [
      videoList[0],
      videoList[6],
      videoList[10],
      videoList[14],
      videoList[19]
  ];

  featuredVideos.forEach(video => {
      const player = new VideoPlayer(video.id, video.title, video.subject);
      player.render("featuredContainer");
  });
}

// untuk menampilkan video di semua
function loadAllVideos() {
  const container = document.getElementById("allVideosContainer");
  container.innerHTML = ""; // Bersihin container sebelum ditambahin video

  videoList.forEach(video => {
      const player = new VideoPlayer(video.id, video.title, video.subject);
      player.render("allVideosContainer");
  });
}
