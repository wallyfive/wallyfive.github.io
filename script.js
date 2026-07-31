// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button element from the HTML using its ID (if present on the page)
    const colorButton = document.getElementById('colorButton');
    
    // List of Marvel-inspired dynamic colors to cycle through
    const colors = ['#c0392b', '#2980b9', '#f39c12', '#8e44ad', '#27ae60'];
    
    // Only run this logic if the colorButton exists on the current page
    if (colorButton) {
        // Add a 'click' event listener to the button
        colorButton.addEventListener('click', () => {
            // Generate a random index number based on the colors array length
            const randomIndex = Math.floor(Math.random() * colors.length);
            
            // Change the header background color dynamically
            const header = document.querySelector('header');
            header.style.backgroundColor = colors[randomIndex];
            
            // Log a friendly message to the browser console
            console.log('Button clicked! Header color changed to: ' + colors[randomIndex]);
        });
    }
});
