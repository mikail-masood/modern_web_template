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
}

const slideInBtns = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  slideInBtns.forEach(slideInBtn => {
    const slideInAt = (window.scrollY + window.innerHeight) - slideInBtn.height/2;
    const imageBottom = slideInBtn.offsetTop + slideInBtn.height;
    const isHalfShown = slideInAt > slideInBtn.offsetTop;
    const isNotScrolledPast =  window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slideInBtn.classList.add('active');
    } else {
      slideInBtn.classList.remove('active');
    }
  });
} 

window.addEventListener('scroll', debounce(checkSlide));
