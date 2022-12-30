import * as THREE from 'three';
import './styles.css';
function init() {
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  let scene = new THREE.Scene();
  // create a camera, which defines where we're looking at
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  // tell the camera where to look
  camera.position.set(0, 0, 10);
  // create a render and set the size
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  // create Sphere

  let geometry = new THREE.SphereGeometry(3,64,64);
  let material = new THREE.MeshStandardMaterial({
    color: '#fff069',
  })

  let mesh= new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // lights
  let lights= new THREE.PointLight(0xffffff, 1, 100)
  lights.position.set(0,10,10)
  scene.add(lights)

  // render sphere
  let canvas = document.querySelector(".webgl")
  let renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize(sizes.width, sizes.height);
  // add the output of the render function to the HTML
  document.body.appendChild(renderer.domElement);

  // function for re-rendering/animating the scene
  function tick() {
    requestAnimationFrame(tick);
    renderer.render(scene, camera, canvas);
  }
  tick();
}
init();