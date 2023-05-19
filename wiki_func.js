

window.addEventListener('scroll',() =>{
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky")
    console.log(window.pageYOffset)
  }
  else {
    navbar.classList.add("sticky");
    console.log('top')
  }
})





