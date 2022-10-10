const myslide = document.querySelectorAll('.myslide'),
  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}


// top

window.addEventListener('scroll', btn_topo)

function btn_topo() {

  var btn_home = document.querySelector('.topo');
  if (btn_home.classList.toggle('sticky', window.scrollY > 130)) {
  }
}

const linkInterno = document.querySelector('[data-scroll="suave"] a[href^="#"]')


function scrollTop(event) {
  event.preventDefault()

  const href = event.currentTarget.getAttribute('href')

  const topo = document.querySelector(href)

  topo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

linkInterno.addEventListener('click', scrollTop)