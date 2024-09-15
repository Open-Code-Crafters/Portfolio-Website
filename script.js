// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Form submission handler
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent successfully!');
});
