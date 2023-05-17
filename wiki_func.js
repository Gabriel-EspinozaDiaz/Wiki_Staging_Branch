


window.addEventListener('scroll',() =>{
  var dist = window.scrollY
  var navPad = 0
  if (dist > 0) {
    navPad = dist
    console.log(navPad)
  }
  else {
    navPad = 0
    console.log('top')
  
    document.getElementById('.navbar').style.padding = navPad
  }
  
})





