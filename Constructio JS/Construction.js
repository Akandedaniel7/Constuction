/* ================================= Section Background-image Changing =========================== */
let images = [
    'url('
]

/* ================================ Back-to-top ============================== */
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if ( window.pageYOffset > 100) {
        backToTop.classList.add("active");
    }
    else{
        backToTop.classList.remove("active");
    }
})

/* ================================ Contact Validation ================================= */
const contactForm = document.getElementById("contact-form"),
contactName = document.getElementById("contact-name"),
contactEmail = document.getElementById("contact-email"),
Message = document.getElementById("message"),
contactMessage = document.getElementById("contact-message");

e.preventDefault()

 if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
    ) {
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    contactMessage.textContent = 'Write all the input fields'

    else{
      emailjs.sendForm('service_2zpsd8i',
       'template_dx4ccww',
        '#contact-form',
         'PzQEiD2iWAjgdnbjt'
         );
         .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message Sent ✔';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
         })
    }
}


contactForm.addEventListener('submit', sendEmail);