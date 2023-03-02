/* ================================= Navbar Active =========================== */

 const list = document.querySelector(' nav .nav-container ul');
 const links = list.querySelectorAll('a');


 list.addEventListener('click', handleClick);


 function handleClick(e) {
   if (e.target.matches('a')) {
     links.forEach(link => link.classList.remove('active'));
     e.target.classList.add('active');
   };
 };

/* ================================ Typed JS ============================== */
 const typed = new Typed('.auto-type', {
   strings: ['International Limited', 'The New Generation', 'A Place For You'],
   typeSpeed: 150,
  backSpeed: 150,
  loop: true
 });

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
  sidemenu.style.right = '-200px';
};

/* =========== CONTACT FORM  ========= */

const contactMe = document.getElementById('contact-form'),
 nameMe = document.getElementById('contact-name'),
  emailMe = document.getElementById('contact-email'),
 messageMe = document.getElementById('message'),
 contactMessage = document.getElementById('contact-message');

 const sendEmail = (e) => {
 	e.preventDefault();

 	if (contactMe.value === "" || emailMe.value === ""|| messageMe.value === "" ) {
  		contactMessage.classList.remove('color-light');
  		contactMessage.classList.add('color-dark');

 		contactMessage.textContent = 'Write all the input fields';
	  	}else{
 		emailjs
  		.sendForm('service_jagc8l2', 
 			'template_xvw1iuv',
 			 '#contact-form', 
 			 'EOqB9s-ao-VmHaGia')
 		.then(
 			() =>{
 			contactMessage.classList.add('color-light');
 			contactMessage.textContent = 'Message sent';

 			setTimeout(() =>{
 				contactMessage.textContent = '';
 			}, 5000);
 		},
 		 (error) => {
 			alert('OOPs! SOMETHING WENT WRONG...', error);
 		}
 		);
 		nameMe.value = '';
 		emailMe.value = '';
 		messageMe.value = '';
 	}
 };

 contactMe.addEventListener('submit', sendEmail);