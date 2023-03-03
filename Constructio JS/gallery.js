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