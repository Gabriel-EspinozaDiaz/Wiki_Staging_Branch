
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


// 3D Model 

const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load your CAD model (replace 'model.gltf' with your model file)
const loader = new THREE.GLTFLoader();
loader.load('model.gltf', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
});

// Create orbit and pan controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Render the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update the controls
    renderer.render(scene, camera);
}
animate();