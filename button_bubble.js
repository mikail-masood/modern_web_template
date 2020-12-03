const button = document.querySelector('.button_wrapper');
const btn = document.querySelector('.landing_section-button');
const walk = 10;

function bubble(e) {
  const {offsetWidth: width, offsetHeight: height} = button;
  let {offsetX: x, offsetY: y} = e;

  if (this !== e.target) {
    x = e.offsetX;
    y = e.offsetY;
  }
  
  const xWalk = Math.round((x/width * walk) - (walk/2));
  const yWalk = Math.round((y/height * walk) - (walk/2));

  btn.style.left= `${xWalk}px`;
  btn.style.top= `${yWalk}px`;

  console.log('complete animation');
  console.log(e)
}

button.addEventListener('mousemove', bubble);