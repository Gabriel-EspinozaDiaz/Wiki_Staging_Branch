
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

const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseenter', () => {
  imageContainer.classList.add('hovered');
});

imageContainer.addEventListener('mouseleave', () => {
  imageContainer.classList.remove('hovered');
});
