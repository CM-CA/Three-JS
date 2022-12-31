import * as THREE from "three";
import "./styles.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

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
  // create Sphere
  let geometry = new THREE.SphereGeometry(3, 64, 64);
  let material = new THREE.MeshStandardMaterial({
    color: "#fff069",
  });

  let mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // lights
  let lights = new THREE.PointLight(0xffffff, 1, 100);
  lights.position.set(0, 10, 10);
  scene.add(lights);

  // render sphere
  let canvas = document.querySelector(".webgl");
  let renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setPixelRatio(2);
  renderer.setSize(sizes.width, sizes.height);
  // add the output of the render function to the HTML
  document.body.appendChild(renderer.domElement);

  // controls
  let controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  // prevents zoom
  controls.enablePan = false;
  controls.enableZoom = false;
  // rotation
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;
  // Resize
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    renderer.setSize(sizes.width, sizes.height);
  });
  // function for re-rendering/animating the scene
  function tick() {
    controls.update();
    renderer.render(scene, camera, canvas);
    requestAnimationFrame(tick);
  }
  tick();
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  tl.fromTo(".nav", { y: "-100%" }, { y: "0%" });
  tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });
}
init();
