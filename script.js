
const contactLink = document.querySelector(".navContact");
const homeLink = document.querySelector(".navHome");
const portfolioLink = document.querySelector(".navPortfolio");
const navButton = document.querySelector('button[aria-expanded]');
const nav = document.querySelector('#main');
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
  window.location.href = "https://nelson-blackjack.netlify.com/"
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