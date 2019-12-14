const contactLink = document.querySelector(".navContact");
const homeLink = document.querySelector(".navHome");
const portfolioLink = document.querySelector(".navPortfolio");



contactLink.onclick = function redirectContact() {
  console.log("Redirecting to contact page..");
  window.location.href = "contact.html";
}

homeLink.onclick = function redirectHome() {
  console.log("Redirecting to home page..");
  window.location.href = "index.html";
}

portfolioLink.onclick = function redirectPortfolio() {
  console.log("Redirecting to portfolio page..");
  window.location.href = "portfolio.html";
}

const myImage = document.querySelector("#selfie");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/s960x960/79263664_2550614018309492_7361371308786974720_o.jpg?_nc_cat=111&_nc_ohc=uoUiwQ8J0wEAQlq2KH8P_v_CsldwNJHRBOe9LSel3wERHFsYiXUZbQLgA&_nc_ht=scontent-lax3-2.xx&oh=9a763ed890b252e4d61396495900fe55&oe=5E6E4CB2") {
    myImage.setAttribute('src', "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/882702_3812400807521_199069633_o.jpg?_nc_cat=107&_nc_ohc=5ylVXgLXhyUAQkL7I0fghtSLz6ulHQq5gkY5mDLym7IK43ApO1ZJT5Z9Q&_nc_ht=scontent-lax3-2.xx&oh=60f77a7abdc6707dbb25b9f24aa415ea&oe=5E6ABC71")
  } else {
    myImage.setAttribute('src', "https://steamuserimages-a.akamaihd.net/ugc/951848487721743577/E7448773225D209DA33857EFD72B668EF6435918/")
  };
  console.log("Picture switch!")
};

// const instagramLink = document.getElementById('instagram');
// const linkedinLink = document.getElementById('linkedin');
// instagramLink.onclick = function redirectInsta() {
//   window.open('https://www.instagram.com/the_real_nelsonbui/')
// }
function instaLink() {
  window.open('https://www.instagram.com/the_real_nelsonbui/')
}

function linkedinLink () {
  window.open('https://www.linkedin.com/in/nelson-bui/')
}


function submitMe() {
  console.log( 'Sending data' );
  const form = document.forms["contactForm"];
  let nameInput = form["name"].value;
  let emailInput = form["email"].value;
  let messageInput = form["message"].value;
console.log(`Name: ${nameInput}, Email: ${emailInput}, Message: ${messageInput}`);
  if (typeof nameInput === "string" && typeof emailInput === "string" && typeof messageInput === "string") {
    alert(`Thank you for visiting, ${nameInput}!`)
  } else {
    alert("Please enter your name, email, and message.")
  }
  window.open('./thankyou.html')
}

// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
