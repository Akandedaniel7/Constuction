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
// const contactForm = document.getElementById("contact-form"),
// contactName = document.getElementById("contact-name"),
// contactEmail = document.getElementById("contact-email"),
// Message = document.getElementById("message"),
// contactMessage = document.getElementById("contact-message");

function sendMail(){
    let contactValue = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        Message: document.getElementById("message").value,  
    }
}

    const servicesID = 'service_60veax9';
    const emailTemplate = 'template_msnt08u';
    
    emailjs
    .send(servicesID, emailTemplate, contactValue)
    .then((res) => {
            document.getElementById("contact-name").value = "";
            document.getElementById("contact-email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent succefully");
    })
    .catch((err) => console.log(err));