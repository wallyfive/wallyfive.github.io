// Wait for the HTML document to fully load before running our script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab our button and trophy display elements from the HTML
    const magicButton = document.getElementById('magicBtn');
    const trophyCountDisplay = document.getElementById('trophyCount');

    // Keep track of the user's trophy count
    let trophies = 0;

    // Add a 'click' event listener to simulate playing a match
    magicButton.addEventListener('click', () => {
        // Add random trophies between 8 and 12 per win
        const earnedTrophies = Math.floor(Math.random() * 5) + 8;
        trophies += earnedTrophies;

        // Update the screen with the new trophy count
        trophyCountDisplay.textContent = trophies;
        
        // Give some victory feedback on the button temporarily
        magicButton.textContent = `Victory! +${earnedTrophies} 🏆`;
        
        setTimeout(() => {
            magicButton.textContent = "Play Again!";
        }, 1500);

        // Log the win to the browser console
        console.log(`Match won! Total trophies: ${trophies}`);
    });

});
