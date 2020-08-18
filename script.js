
const contactLink = document.querySelector(".navContact");
const homeLink = document.querySelector(".navHome");
const portfolioLink = document.querySelector(".navPortfolio");
const navButton = document.querySelector('button[aria-expanded]');
const nav = document.querySelector('#main');
// const resume = document.querySelector('.resumeImg');
// const git = document.querySelector('.gitImg');
// const submitButton = document.querySelector('.contactButton');
// const modalOuter = document.querySelector('.modal-outer');
// const modalInner = document.querySelector('.modal-inner');
const sliderImages = document.querySelectorAll('.slide-in');
let topOfNav = nav.offsetTop;


navButton.addEventListener('click', toggleNav);
window.addEventListener('scroll', fixNav);
// ALL MY ONLCICK FUNCTIONS GO HERE

function redirectContact() {
    window.location.href = "contact.html";
}

function redirectHome() {
    window.location.href = "index.html";
}

function redirectPortfolio() {
    window.location.href = "index.html#portfolio";
}

function redirectAboutMe() {
    window.location.href = "portfolio.html";
}

function redirectBlackjack() {
  window.open("https://nelson-blackjack.netlify.com/", "_blank")
}

function redirectCovid() {
  window.open("https://nelsonbui-covid19.netlify.app/", "_blank")
}
function redirectSickFits() {
  window.open("https://sickfits-nbui-react-prod.herokuapp.com/", "_blank")
}

function redirectKaraoke() {
  window.open("https://karaokefun.netlify.com/", "_blank")
}

function redirectDigimon() {
  window.open("https://digimonfinder.netlify.com/", "_blank")
}

function handleResume() {
  window.open("https://www.dropbox.com/s/2kybe8oun5c4lri/Resume.cs%20updated%208.18.20.pdf?dl=0", "_blank");
}

function handleGit() {
  window.open("https://github.com/nelsonbui923", "_blank");
}

function handleInsta() {
  window.open("https://www.instagram.com/the_real_nelsonbui/", "_blank");
}

function handleLinkedin() {
  window.open("https://www.linkedin.com/in/nelson-bui/"), "_blank"
}
// // NAV BAR
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}



// SANDWICH FOR PHONE VIEW

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

// ABOUT ME SCROLLING IMAGES

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };



function checkSlide() {
    sliderImages.forEach(sliderImage => {
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
    }
  });
}

// function handleSubmit() {
//   modalOuter.classList.add('open');
// }

// function closeModal() {
//   modalOuter.classList.remove('open');
// }

// modalOuter.addEventListener('click', function(event) {
//   const isOutside = !event.target.closest('.modal-inner');
//   if (isOutside) {
//     closeModal();
//   }
// });



navButton.addEventListener('click', toggleNav);
window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', debounce(checkSlide));
// submitButton.addEventListener('click', handleSubmit)