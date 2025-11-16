class Quiz {
    constructor(title) {
        this.title = title;
        this.questions = quizData[title];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    checkAnswer(answer) {
        const current = this.getCurrentQuestion();
        if (answer === current.correct) {
            this.score++;
        }
    
        this.userAnswers.push({
            question: current.question,
            userAnswer: answer,
            correctAnswer: current.correct,
            isCorrect: answer === current.correct
        });
    
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    }
    
    getScore() {
        return `Skor Anda: ${this.score} / ${this.questions.length}`;
    }
}

let currentQuiz = null;

function startQuiz(title) {
    // Gunakan hanya satu objek Quiz
    currentQuiz = new Quiz(title);
    const container = document.getElementById("quizContainer");
    const scoreDisplay = document.getElementById("score");

    function renderQuestion() {
        if (currentQuiz.currentQuestionIndex >= currentQuiz.questions.length) {
            container.innerHTML = "";
            scoreDisplay.innerText = currentQuiz.getScore();
            scoreDisplay.style.display = "block";
        
            // Panggil simpan skor dengan title yang benar
            saveScoreToDatabase(currentQuiz.title, currentQuiz.score);
        
            // tampilkan review jawaban
            currentQuiz.userAnswers.forEach((entry, index) => {
                const review = document.createElement("div");
                review.classList.add("review-item");
                review.innerHTML = `
                    <p><strong>Soal ${index + 1}:</strong> ${entry.question}</p>
                    <p>Jawaban Kamu: <span style="color:${entry.isCorrect ? 'green' : 'red'}">${entry.userAnswer}</span></p>
                    ${!entry.isCorrect ? `<p>Jawaban yang benar: <strong>${entry.correctAnswer}</strong></p>` : ''}
                    <hr>
                `;
                container.appendChild(review);
            });
            return;
        }
        
        container.innerHTML = "";
    
        const questionData = currentQuiz.getCurrentQuestion();
    
        const questionElement = document.createElement("p");
        questionElement.innerText = questionData.question;
        questionElement.classList.add("quiz-question");
        container.appendChild(questionElement);
    
        questionData.options.forEach(option => {
            const button = document.createElement("button");
            button.innerText = option;
            button.classList.add("quiz-option");
            button.onclick = function () {
                if (currentQuiz.checkAnswer(option)) {
                    renderQuestion();
                } else {
                    renderQuestion();
                }
            };
            container.appendChild(button);
        });
    }

    renderQuestion();
}

function saveScoreToDatabase(quizTitle, score) {
    const data = {
        quizTitle: quizTitle,
        score: score
    };

    console.log('Mengirim data ke server:', data);

    fetch('../simpan-skor.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(result => {
        console.log('Result:', result);
        if (result.status === 'success') {
            const message = document.createElement("div");
            message.classList.add("notification-message", "success-message", "notification-large");
            message.innerText = "✅ Skor berhasil disimpan!";
            document.getElementById("quizContainer").appendChild(message);
        } else {
            console.error('Error:', result.message);
            // Tambahkan notifikasi error visual
            const errorMsg = document.createElement("div");
            errorMsg.classList.add("notification-message", "error-message");
            errorMsg.innerText = "❌ Gagal menyimpan skor: " + result.message;
            document.getElementById("quizContainer").appendChild(errorMsg);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const errorMsg = document.createElement("div");
        errorMsg.classList.add("notification-message", "error-message");
        errorMsg.innerText = "❌ Terjadi kesalahan saat menyimpan skor. Cek console untuk detail.";
        document.getElementById("quizContainer").appendChild(errorMsg);
    });
}