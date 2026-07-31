// Wait for the HTML document to fully load before running our script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab our button element from the HTML using its ID
    const magicButton = document.getElementById('magicBtn');

    // Add a 'click' event listener to the button
    magicButton.addEventListener('click', () => {
        // Change the button text when clicked
        magicButton.textContent = "You clicked it! 🎉";
        
        // Log a message to the browser console (Press F12 to see this!)
        console.log("The magic button was successfully clicked!");
    });

});
