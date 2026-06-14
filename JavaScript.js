// javascript.js
// Contact Form
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const formMessage = document.getElementById('form-message');

    if(name && email && message){
        formMessage.style.color = 'blue';
        formMessage.innerText = 'Message sent! Thank you.';
        form.reset();
    } else {
        formMessage.style.color = 'red';
        formMessage.innerText = 'Please fill all fields.';
    }
});