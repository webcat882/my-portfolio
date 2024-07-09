document.addEventListener('DOMContentLoaded', function() {

    emailjs.init("tNJ1716vVd9rPzdJY");

    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phonenumber');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        let errorMessage = '';

        if (!name) {
            errorMessage += 'Name is required.\n';
        }

        if (!email) {
            errorMessage += 'Email is required.\n';
        } else if (!validateEmail(email)) {
            errorMessage += 'Email is not valid.\n';
        }

        if (!phone) {
            errorMessage += 'Phone number is required.\n';
        }

        if (!subject) {
            errorMessage += 'Subject is required.\n';
        }

        if (!message) {
            errorMessage += 'Message is required.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            sendEmail(name, email, phone, subject, message);
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function sendEmail(name, email, phone, subject, message) {
        emailjs.send("service_l8zdly4", "template_yd8ibzm", {
            from_name: name,
            from_email: email,
            phone: phone,
            subject: subject,
            message: message
        })
        .then(function(response) {
            alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
            form.reset();
        }, function(error) {
            alert('Failed to send message. Please try again later.');
        });
    }
});
