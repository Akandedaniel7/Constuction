/* =========== CONTACT FORM  ========= */
// const contactMe = document.getElementById('contact-form'),
// nameMe = document.getElementById('contact-name'),
//  emailMe = document.getElementById('contact-email'),
// messageMe = document.getElementById('message'),
// contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) => {
// 	e.preventDefault();

// 	if (contactMe.value === "" || emailMe.value === ""|| messageMe.value === "" ) {
// 		 contactMessage.classList.remove('color-light');
// 		 contactMessage.classList.add('color-dark');

// 		contactMessage.textContent = 'Write all the input fields';
// 		 }else{
// 		emailjs
// 		 .sendForm('service_jagc8l2', 
// 			'template_xvw1iuv',
// 			 '#contact-form', 
// 			 'EOqB9s-ao-VmHaGia')
// 		.then(
// 			() =>{
// 			contactMessage.classList.add('color-light');
// 			contactMessage.textContent = 'Message sent';

// 			setTimeout(() =>{
// 				contactMessage.textContent = '';
// 			}, 5000);
// 		},
// 		 (error) => {
// 			alert('OOPs! SOMETHING WENT WRONG...', error);
// 		}
// 		);
// 		nameMe.value = '';
// 		emailMe.value = '';
// 		messageMe.value = '';
// 	}
// };

// contactMe.addEventListener('submit', sendEmail);





 

 


/* ================================ Contact Validation ================================= */

// const contactForm = document.getElementById('contact-form'),
// contactName = document.getElementById('contact-name'),
// contactEmail = document.getElementById('contact-email'),
// Message = document.getElementById('message'),
// contactMessage = document.getElementById('contact-message');

// const sendEmail = (e) => {
//   e.preventDefault();

//   if(
//     contactName.value === '' ||
//     contactEmail.value === '' ||
//     Message.value === ''
//     ){
//       contactMessage.classList.remove('color-light');
//       contactMessage.classList.add('color-dark');

//       contactMessage.textContent = 'Wrote all the input fields';
//     }else{
//       emailjs.sendForm(
//         'service_jagc8l2',
//         'template_xvw1iuv',
//         'contact-form', 
//         'EOqB9s-ao-VmHaGia'
//         )
//         .then(() =>{
//           contactMessage.classList.add('color-light');
//           contactMessage.textContent = 'Message sent ✔';
//           setTimeout(() => {
//             contactMessage.textContent = '';
//           }, 5000);
//         });
//     }
// }

// contactForm.addEventListener('submit', sendEmail);