// DOM Elements
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const lapButton = document.getElementById('lap-btn');
const lapsList = document.getElementById('laps-list');

// Stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let lapCount = 0;
let lastLapTime = 0;

// Event listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);

// Format time to display with leading zeros
function formatTime(time, digits = 2) {
    return time.toString().padStart(digits, '0');
}

// Update the display with current time
function updateDisplay() {
    const currentTime = Date.now() - startTime + elapsedTime;
    
    const milliseconds = Math.floor((currentTime % 1000) / 10);
    const seconds = Math.floor((currentTime / 1000) % 60);
    const minutes = Math.floor((currentTime / (1000 * 60)) % 60);
    
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatTime(milliseconds);
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        startTime = Date.now();
        timerInterval = setInterval(updateDisplay, 10);
        isRunning = true;
        
        // Update button states
        startButton.disabled = true;
        pauseButton.disabled = false;
        resetButton.disabled = false;
        lapButton.disabled = false;
    }
}

// Pause the timer
function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime += Date.now() - startTime;
        isRunning = false;
        
        // Update button states
        startButton.disabled = false;
        pauseButton.disabled = true;
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    lapCount = 0;
    lastLapTime = 0;
    
    // Reset display
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
    
    // Clear laps
    lapsList.innerHTML = '';
    
    // Update button states
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    lapButton.disabled = true;
}

// Format time for lap display
function formatLapTime(timeInMs) {
    const milliseconds = Math.floor((timeInMs % 1000) / 10);
    const seconds = Math.floor((timeInMs / 1000) % 60);
    const minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
    
    return `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

// Record a lap
function recordLap() {
    if (isRunning) {
        lapCount++;
        const currentTime = Date.now() - startTime + elapsedTime;
        const lapTime = currentTime - lastLapTime;
        lastLapTime = currentTime;
        
        // Create lap item
        const lapItem = document.createElement('div');
        lapItem.classList.add('lap-item');
        
        // Add lap number
        const lapNumber = document.createElement('span');
        lapNumber.classList.add('lap-number');
        lapNumber.textContent = `Lap ${lapCount}`;
        
        // Add lap time
        const lapTimeElement = document.createElement('span');
        lapTimeElement.classList.add('lap-time');
        lapTimeElement.textContent = formatLapTime(lapTime);
        
        // Add elements to lap item
        lapItem.appendChild(lapNumber);
        lapItem.appendChild(lapTimeElement);
        
        // Add lap item to list (at the top)
        lapsList.insertBefore(lapItem, lapsList.firstChild);
        
        // Add animation effect
        lapItem.style.animation = 'fadeIn 0.3s';
    }
}

// Add CSS animation for lap items
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
