
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
const hoverItem = document.querySelector('.testingIMG2');
const otherDiv = document.querySelector('.testingIMG1');

hoverItem.addEventListener('mouseover', function() {
  otherDiv.classList.add('transformed');
});

hoverItem.addEventListener('mouseout', function() {
  otherDiv.classList.remove('transformed');
});










