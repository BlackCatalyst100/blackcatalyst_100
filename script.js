document.addEventListenerDOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.prevent(); // Prevent form submission
        alert('Thank you for reaching out! We will get back to you soon!');
    });
});
