

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











