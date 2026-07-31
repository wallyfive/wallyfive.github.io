// Wait for the browser to load completely before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the button and text elements from the HTML
    const colorButton = document.getElementById('colorButton');
    const elementText = document.getElementById('elementText');
    
    // Array of element themes: [Button Color, Element Name]
    const elements = [
        { color: '#f77f00', name: '🔥 Fire! Powered by the Sun Warriors.' },
        { color: '#0077b6', name: '🌊 Water! Flow like the tides of the Northern Tribe.' },
        { color: '#2b8a3e', name: '🌍 Earth! Strong and enduring like Omashu.' },
        { color: '#e9d8a6', name: '💨 Air! Be as free as the Air Nomads.' }
    ];
    
    let currentIndex = 0;

    // Listen for a 'click' event on the button to bend elements
    colorButton.addEventListener('click', () => {
        // Move to the next element in our list, looping back to 0 at the end
        currentIndex = (currentIndex + 1) % elements.length;
        
        // Apply the new element's color and text
        colorButton.style.backgroundColor = elements[currentIndex].color;
        elementText.textContent = elements[currentIndex].name;
        
        console.log(`Bending switched to: ${elements[currentIndex].name}`);
    });
});
