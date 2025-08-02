document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      formMessage.textContent = "Please fill out all fields correctly.";
      formMessage.style.color = 'red';
      return;
    }

    // Simulate sending
    formMessage.textContent = "Sending message...";
    formMessage.style.color = '#f47c57';

    setTimeout(() => {
      formMessage.textContent = "Message sent successfully! Thank you.";
      formMessage.style.color = 'green';
      form.reset();
    }, 1500);
  });
});
