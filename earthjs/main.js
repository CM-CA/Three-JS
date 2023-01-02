import * as THREE from "three";
import "./style.css";
function init() {
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  let scene = new THREE.Scene();
  // create a camera, which defines where we're looking at
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );

  // tell the camera where to look
  camera.position.set(0, 0, 10);
  // create a render and set the size
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  let canvas = document.querySelector("canvas.webgl");
  let renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  // add the output of the render function to the HTML
  document.body.appendChild(renderer.domElement);

  // Creating Sphere (our planet)
  // Objects
  const geometry_one = new THREE.SphereGeometry(1, 36, 16);
  const geometry_two = new THREE.SphereGeometry(0.99, 36, 16);
  const geometry_three = new THREE.SphereGeometry(1, 36, 16);

  // Materials
  var texture = new THREE.TextureLoader().load(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg"
  );

  //set the texture as map parameter of the material
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var cube = new THREE.Mesh(geometry_one, material);

  scene.add(cube);

  let background = new THREE.TextureLoader().load("textures/17494.jpg");
  scene.background = background;
  // Lights
  const sun = new THREE.DirectionalLight(0xffffff, 3);
  sun.position.set(4, 3, 2);
  scene.add(sun);
  // add the output of the render function to the HTML
  document.body.appendChild(renderer.domElement);
  // var clock = new THREE.Clock();
  // function for re-rendering/animating the scene
  function tick() {
    requestAnimationFrame(tick);
    renderer.render(scene, camera, canvas);
  }
  tick();
}
init();
