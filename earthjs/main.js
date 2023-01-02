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
  const geometry_one = new THREE.SphereGeometry(2, 40, 36);

  // Materials
  let texture = new THREE.TextureLoader().load("textures/2k_earth_daymap.jpg");
  let cloud_texture = new THREE.TextureLoader().load(
    "textures/2k_earth_clouds.jpg"
  );
  //set the texture as map parameter of the material
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let cloud_material = new THREE.MeshPhysicalMaterial({ map: cloud_texture });
  let earth = new THREE.Mesh(geometry_one, material);

  scene.add(earth);

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
    earth.rotation.y += 0.01;
    requestAnimationFrame(tick);
    renderer.render(scene, camera, canvas);
    renderer.setPixelRatio(5);
  }
  tick();
}
init();
