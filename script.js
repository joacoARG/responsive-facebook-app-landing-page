const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');
var dotIndex = 0;

function setActive(i) {
  console.log(i);
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[i].classList.add('active');

  for (dot of dots) {
    dot.classList.remove('active');
  }
  dots[i].classList.add('active');
}

for (let j = 0; j < dots.length; j++) {
  dots[j].addEventListener('click', () => setActive(j));
}

document.querySelector('.imgBx').addEventListener('wheel', myFunction);

function myFunction(event) {
  event.preventDefault();
  if (event.deltaY < 0) {
    if (dotIndex > 0) {
      setActive(--dotIndex);
    }
    setActive(dotIndex);
  } else if (event.deltaY > 0) {
    if (dotIndex < dots.length - 1) {
      setActive(++dotIndex);
    }
  }
}
