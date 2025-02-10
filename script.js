document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {question: "What is the capital of France?", answer: "Paris"},
        {question: "What is 2 + 3?", answer: "5" },
        {question: "What is the capital of Japan?", answer: "Tokyo"},  
        { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
        { question: "What is the square root of 64?", answer: "8" },
        { question: "How many continents are there?", answer: "7" },
        { question: "What is the capital of Canada?", answer: "Ottawa" },
        { question: "What is the smallest country in the world?", answer: "Vatican City" },
        { question: "Who discovered gravity?", answer: "Isaac Newton" },
        { question: "How many legs does a spider have?", answer: "8" },
        { question: "What is the chemical symbol for gold?", answer: "AU"},
        { question: "Who was the first president of the United States?", answer: "George Washington" },
        { question: "What is the speed of light in vacuum (approx in m/s)?", answer: "299,792,458 m/s" },
        { question: "Which planet is known as the Red Planet?", answer: "Mars" },
        { question: "How many bones are in the human body?", answer: "206" },
        { question: "What is the capital of Germany?", answer: "Berlin" },
        { question: "Which ocean is the largest?", answer: "Pacific Ocean" },
        { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
        { question: "What is the longest river in the world?", answer: "Nile River" },
        { question: "What is the main gas found in Earth's atmosphere?", answer: "Nitrogen" },
        { question: "Which is the tallest mountain in the world?", answer: "Mount Everest" },
        { question: "Who wrote 'Pride and Prejudice'?", answer: "Jane Austen" },
        { question: "What is the capital of Italy?", answer: "Rome" },
        { question: "What is the boiling point of water in Celsius?", answer: "100°C" },
        { question: "Which animal is known as the King of the Jungle?", answer: "Lion" },
        { question: "How many sides does a hexagon have?", answer: "6" },
        { question: "What is the national flower of Japan?", answer: "Cherry Blossom" },
        { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
        { question: "Who was the first man to walk on the moon?", answer: "Neil Armstrong" },
        { question: "How many players are on a soccer team on the field?", answer: "11" },
        { question: "Which country invented the pizza?", answer: "Italy" },
        { question: "What is the capital of Australia?", answer: "Canberra" },
        { question: "What is the largest organ in the human body?", answer: "Skin" },
        { question: "Who invented the telephone?", answer: "Alexander Graham Bell" }, 
    ];

    let currentCard = 0;
    const flashcardElement = document.getElementById('flashcard'); 
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');    

    function displayCard() {
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer;
        flashcardElement.classList.remove('is-flipped');

        answerElement.style.display = 'none';
        questionElement.style.display = 'block';
        questionElement.style.visibility = "visible"
    }

    document.getElementById('flip-card').addEventListener('click', function() {
        console.log(questionElement.style.display)
        console.log('the button was clicked.')

        if (answerElement.style.display === 'none') {
            answerElement.style.display = 'block';
        } else {
            answerElement.style.display = 'none';
            questionElement.style.display = 'block';
        }
        questionElement.style.display = 'block';
});

    document.getElementById('next-card').addEventListener('click', () => {
        currentCard = (currentCard + 1) % flashcards.length;

        questionElement.style.display = 'block';
        answerElement.style.display = 'none';   
        displayCard();
    })
    displayCard();

    if (flashcardElement.classList.contains('is-flipped')) {
        questionElement.innerHTML = ""
    }

    else {
        answerElement.innerHTML = ""
    }
});
const display = document.getElementById("display");
const studyMinutes = 25;
const breakMinutes = 5;
const longBreakMinutes = 15;
let time = studyMinutes * 60;
let isRunning = false;
let intervalId;
let cycleCount = 0;

function start() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(update, 1000);
    }
}

function pause() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
}

function reset() {
    clearInterval(intervalId);
    isRunning = false;
    time = studyMinutes * 60;
    display.innerHTML = formatTime(time);
    cycleCount = 0;
}

function update() {
    if (time > 0) {
        time--;
        display.innerHTML = formatTime(time);
    } else {
        cycleCount++;
        if (cycleCount % 4 === 0) {
            startLongBreak();
        } else {
            startBreak();
        }
    }
}

function startBreak() {
    time = breakMinutes * 60;
    display.innerHTML = formatTime(time);
    clearInterval(intervalId); 
    intervalId = setInterval(update, 1000);
}

function startLongBreak() {
    time = longBreakMinutes * 60;
    display.innerHTML = formatTime(time);
    clearInterval(intervalId); 
    intervalId = setInterval(update, 1000); 
}

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds; 
    return `${minutes}:${seconds}`;
}
const todaysDate = new Date().toISOString().split('T')[0];
let streakCount = parseInt(localStorage.getItem('streak')) || 0;
let lastStudyDate = localStorage.getItem('lastStudyDate') || "";

function updateStreakDisplay() {
    document.getElementById('streak-display').innerText = `🔥 Study Streak: ${streakCount} Days 🔥`;
}

function studyStreakButton() {
    if (lastStudyDate === todaysDate) {
        alert("You already clicked the button today, come back tomorrow!");
        return;
    }

    streakCount++;
    lastStudyDate = todaysDate;

    localStorage.setItem('streak', streakCount);
    localStorage.setItem('lastStudyDate', todaysDate);

    updateStreakDisplay();
    alert(`Your study streak has increased! Current streak: ${streakCount} day(s).`);
}
updateStreakDisplay();

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    console.log("Current Page:", currentPage);

    const tabs = document.querySelectorAll(".tabs a");

    tabs.forEach(tab => {
        console.log("Checking tab:", tab.getAttribute("href")); 
        if (tab.getAttribute("href") === currentPage) {
            tab.classList.add("active");
            console.log("Added active class to:", tab);
        }
    });
});
