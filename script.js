// JavaScript for Random Funny Quote API Integration
function fetchFunnyQuote() {
    const quoteDiv = document.getElementById('quote');

    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            // Display the quote in the designated div
            quoteDiv.textContent = data.value;
            quoteDiv.style.fontStyle = "italic";
            quoteDiv.style.color = "#555";
            quoteDiv.style.marginTop = "20px";
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteDiv.textContent = 'Oops! Unable to fetch a quote at the moment.';
        });
}

// Add an event listener to load the quote on page load
window.addEventListener('load', fetchFunnyQuote);

// Function to embed local Rick Roll video in the page
function rickRoll() {
    const contentDiv = document.getElementById('dynamicContent');
    contentDiv.innerHTML = `
        <video width="560" controls autoplay>
            <source src="rickroll.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>`;
    startTrollRain();
}

// Function to start troll face rain effect
function startTrollRain() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const trollFace = document.createElement('img');
        trollFace.src = 'troll-face.png'; // Update path if needed
        trollFace.style.position = 'fixed';
        trollFace.style.left = Math.random() * window.innerWidth + 'px';
        trollFace.style.top = '-50px';
        trollFace.style.width = '50px';
        trollFace.style.height = '50px';
        trollFace.style.transition = 'top 3s linear';
        body.appendChild(trollFace);

        setTimeout(() => {
            trollFace.style.top = window.innerHeight + 'px';
        }, 100);

        setTimeout(() => {
            trollFace.remove();
        }, 3000);
    }
}

// Add event listener to the button
const dynamicBtn = document.getElementById('dynamicBtn');
dynamicBtn.addEventListener('click', rickRoll);