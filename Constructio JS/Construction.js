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

function SendMail(){
  var params = {
    from_name : document.getElementById("contact-name").value,
    email_id : document.getElementById("contact-email").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_2zpsd8i", "template_dx4ccww", params).then(function (res) {
    alert("sucess!" + res.status);
  })
}

/* ============================================ Gallery Section ============================= */
let FullImgBox = document.getElementById("fullImgBox");
let FullImg = document.getElementById("FullImg");

function openFullImg(pic){
  FullImgBox.style.display = 'flex';
  FullImg.src = pic;
  
}

function closeFullImg(){
  FullImgBox.style.display = 'none';
}