
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
const testingIMG2 = document.querySelector('.testingIMG2');
const otherDiv = document.querySelector('.testingIMG1');

testingIMG2.addEventListener('mouseover', function() {
  testingIMG1.classList.add('transformed');
});

testingIMG2.addEventListener('mouseout', function() {
  testingIMG1.classList.remove('transformed');
});










