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

/* ================================ Contact Validation ================================= */
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const message = document.getElementById("message"),
  contactMessage = document.getElementById("contactMessage");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" &&
    contactEmail.value === "" &&
    contactMessage.value === ""
  ) {
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");

    contactMessage.textContent = "Write all the input fields";
  } else {
    emailjs
      .sendForm(
        "service_2zpsd8i",
        "template_dx4ccww",
        "contact-form",
        "PzQEiD2iWAjgdnbjt"
      )
      .then(
        () => {
          contactMessage.classList.add("color-light");
          contactMessage.textContent = "Message sent";

          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("OOPs! SOMETHING WENT WRONG...", error);
        }
      );
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
