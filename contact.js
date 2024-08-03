document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Initialize EmailJS
    emailjs.init("tNJ1716vVd9rPzdJY");

    // Prepare the email parameters
    const templateParams = {
        name: name,
        email: email,
        phonenumber: phonenumber,
        subject: subject,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send('service_l8zdly4', 'template_yd8ibzm', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again.');
    });
});
