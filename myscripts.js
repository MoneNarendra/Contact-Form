const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  
  console.log('Form data:', {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value
  });

  
  successMessage.style.display = 'block';
});