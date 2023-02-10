/* ================================= Section Background-image Changing =========================== */
let images = ["url("];

/* ================================ Back-to-top ============================== */
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

/* ============ SIDE MENU =========== */
let sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = '0';
}

function closemenu() {
  sidemenu.style.right = '-200px'
}

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

// const contactForm = document.getElementById("contact-form");
// const contactName = document.getElementById("contactName");
// const contactEmail = document.getElementById("contactEmail");
// const message = document.getElementById("message"),
//   contactMessage = document.getElementById("contactMessage");

// const sendEmail = (e) => {
//   e.preventDefault();

//   if (
//     contactName.value === "" &&
//     contactEmail.value === "" &&
//     contactMessage.value === ""
//   ) {
//     contactMessage.classList.remove("color-light");
//     contactMessage.classList.add("color-dark");

//     contactMessage.textContent = "Write all the input fields";
//   } else {
//     emailjs
//       .sendForm(
//         "service_2zpsd8i",
//         "template_dx4ccww",
//         "contact-form",
//         "PzQEiD2iWAjgdnbjt"
//       )
//       .then(
//         () => {
//           contactMessage.classList.add("color-light");
//           contactMessage.textContent = "Message sent";

//           setTimeout(() => {
//             contactMessage.textContent = "";
//           }, 5000);
//         },
//         (error) => {
//           alert("OOPs! SOMETHING WENT WRONG...", error);
//         }
//       );
//     contactName.value = "";
//     contactEmail.value = "";
//     contactMessage.value = "";
//   }
// };

// contactForm.addEventListener("submit", sendEmail);
// >>>>>>> 3d7c3f3ec44edd544792751dd7dedf2822dbc88c
