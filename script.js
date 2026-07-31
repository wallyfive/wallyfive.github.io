// Wait for the browser to load all HTML elements before running code
document.addEventListener('DOMContentLoaded', () => {
    // Grab elements from our HTML document
    const actionBtn = document.getElementById('actionBtn');
    const defuseBtn = document.getElementById('defuseBtn');
    const countdownDisplay = document.getElementById('countdown');
    const gameStatus = document.getElementById('game-status');

    let timer;
    let timeLeft = 10;
    let gameActive = false;

    // Step 1: Click to arm the defuser and start the minigame
    actionBtn.addEventListener('click', () => {
        gameActive = true;
        timeLeft = 10;
        countdownDisplay.textContent = timeLeft;
        gameStatus.textContent = "BOMB PLANTED! Defuse before detonation!";
        
        // Switch buttons: hide arm button, show defuse button
        actionBtn.classList.add('hidden');
        defuseBtn.classList.remove('hidden');

        // Start the countdown timer interval (ticks every 1 second)
        timer = setInterval(() => {
            timeLeft--;
            countdownDisplay.textContent = timeLeft;

            // Check if time has run out (Defeat condition)
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame(false);
            }
        }, 1000);
    });

    // Step 2: Click to cut the wire and stop the timer
    defuseBtn.addEventListener('click', () => {
        if (!gameActive) return;

        clearInterval(timer);
        endGame(true);
    });

    // Function to handle win/loss states
    function endGame(isSuccess) {
        gameActive = false;
        defuseBtn.classList.add('hidden');
        actionBtn.classList.remove('hidden');
        actionBtn.textContent = "RE-ENGAGE DRILL";

        if (isSuccess) {
            gameStatus.textContent = "SUCCESS! Defuser disabled. Round Won.";
            countdownDisplay.textContent = "GG";
            alert("Operator, bomb successfully defused! Good job.");
        } else {
            gameStatus.textContent = "DETONATION DETECTED. Round Lost.";
            countdownDisplay.textContent = "BOOM";
            alert("Mission Failed. You ran out of time!");
        }
    }
});
