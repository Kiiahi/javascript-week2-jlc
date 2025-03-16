document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Check if the current page is index.html
    if (window.location.pathname.endsWith('index.html')) {
        // Welcome prompt
        let userName = prompt("Welcome to Cafe Sizzle! What's your name?");
        if (userName) {
            document.getElementById('welcome-message').innerText = `Hello, ${userName}! Enjoy your stay at Cafe Sizzle.`;
        }
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const randomNumber = Math.floor(Math.random() * 10000);
            const subject = `Contact Form Submission #${randomNumber}`;
            
            const mailtoLink = `mailto:yourbusiness@example.com?cc=youremail@example.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            
            window.location.href = mailtoLink;
            
            document.getElementById('form-response').innerHTML = '<p>Thank you for your message! You will be redirected to the homepage shortly.</p>';
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 5000);
        });
    }
});