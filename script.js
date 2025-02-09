document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {question: "What is the capital of France?", answer: "Paris"},
        {question: "What is 2 + 3?", answer: "5" },
        {question: "What is the capital of Japan?", answer: "Tokyo"},   
    ];

    let currentCard = 0;
    const flashcardElement = document.getElementbyId('flashcard');
    const questionElement = document.getElementbyId('question');
    const answerElement = document.getElementbyId('answer');

    function displayCard() {
        questionElement.textContent = flashcards[currentCard].question;
        answerElement.textContent = flashcards[currentCard].answer;
        flashcardElement.classlist.remove('is-flipped');
    }

    document.getElementbyId('flip-card').addEventListener('click', () => {
        flashcardElement.classlist.toggle('is-flipped');
    });

    document.getElementbyId('next-card').addEventListener('click', () =>{
        currentCard = (currentCard = 1) % flashcards.length;
        displayCard();
    })
    displayCard();

    if (flashcardElement.classlist.contains('is-flipped')) {
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
