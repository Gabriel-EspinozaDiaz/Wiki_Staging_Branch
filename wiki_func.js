
//Sticky navbar
window.addEventListener('scroll',() =>{
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  if (window.scrollY > 0) {
    navbar.classList.add("sticky")
    console.log(window.scrollY)
  }
  else {
    navbar.classList.add("sticky");
    console.log('top')
  }
})


//Frame Effect

const gifContainer = document.querySelector('.gif-container');
const forwardGif = document.querySelector('.forward-gif');
const backwardGif = document.querySelector('.backward-gif');

gifContainer.addEventListener('mouseenter', () => {
  forwardGif.style.opacity = 0;
  backwardGif.style.opacity = 1;
});

gifContainer.addEventListener('mouseleave', () => {
  forwardGif.style.opacity = 1;
  backwardGif.style.opacity = 0;
});







