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
   strings: [' intl limited', 'The New Generation', 'A Place For You'],
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
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = '0';
}

function closemenu() {
  sidemenu.style.right = '-100%';
};



const navLink  = document.querySelectorAll('.nav-link');

function linkAction(){
	const sidemenu = document.getElementById('sidemenu');
     sidemenu.style.right = '-100%';
}

navLink.forEach((n) => n.addEventListener('click', linkAction));