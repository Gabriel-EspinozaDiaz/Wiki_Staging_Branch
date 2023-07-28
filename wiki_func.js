
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
let isHovered = false;

function playGifForward() {
  forwardGif.style.opacity = 1;
  backwardGif.style.opacity = 0;
  forwardGif.style.animationPlayState = 'running';
  backwardGif.style.animationPlayState = 'paused';
}

function playGifBackward() {
  forwardGif.style.opacity = 0;
  backwardGif.style.opacity = 1;
  forwardGif.style.animationPlayState = 'paused';
  backwardGif.style.animationPlayState = 'running';
}

gifContainer.addEventListener('mouseenter', () => {
  isHovered = true;
  playGifForward();
});

gifContainer.addEventListener('mouseleave', () => {
  isHovered = false;
  playGifBackward();
});

// Check the GIF's state and play backward when not hovered
function checkGifState() {
  if (!isHovered) {
    playGifBackward();
  }
  requestAnimationFrame(checkGifState);
}

requestAnimationFrame(checkGifState);






