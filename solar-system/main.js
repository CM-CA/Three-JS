import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PlanetsGeometry } from "./planets.js";

function init() {
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  let scene = new THREE.Scene();
  // create a camera, which defines where we're looking at
  let camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // tell the camera where to look
  camera.position.set(0, 0, 10);
  // create a render and set the size
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(sizes.width, sizes.height);
  // add the output of the render function to the HTML
  document.body.appendChild(renderer.domElement);
  const orbit = new OrbitControls(camera, renderer.domElement);
  camera.position.set(-90, 140, 140);
  orbit.update();

  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);

  // Cube texture
  //create sphere
  let cubeTextureLoader = new THREE.CubeTextureLoader();
  scene.background = cubeTextureLoader
    .setPath("./textures/galaxy/")
    .load([
      "right.png",
      "left.png",
      "front.png",
      "back.png",
      "bottom.png",
      "top.png",
    ]);

  const suntexTureLoader = new THREE.TextureLoader();

  let sunGeo = new THREE.SphereGeometry(20, 30, 30);
  let sunTexture = suntexTureLoader
    .setPath("./textures/stars/")
    .load("2k_sun.jpg");
  let sunMat = new THREE.MeshBasicMaterial({
    map: sunTexture,
  });

  const sun = new THREE.Mesh(sunGeo, sunMat);

  scene.add(sun);
  //Mercury
  const planet_1 = new PlanetsGeometry(
    3.2,
    30,
    30,
    "./textures/planets/",
    "2k_mercury.jpg"
  );

  const drawPlanetMercury = new THREE.Mesh(
    planet_1.planetGeometry(),
    planet_1.planetTexture()
  );

  const mercuryObj = new THREE.Object3D();

  mercuryObj.add(drawPlanetMercury);
  scene.add(mercuryObj);
  drawPlanetMercury.position.x = 40;

  //Venus
  const planet_2 = new PlanetsGeometry(
    3.2,
    30,
    30,
    "./textures/planets/",
    "2k_venus_surface.jpg"
  );

  const drawPlanetVenus = new THREE.Mesh(
    planet_2.planetGeometry(),
    planet_2.planetTexture()
  );

  const venusObj = new THREE.Object3D();

  venusObj.add(drawPlanetVenus);
  scene.add(venusObj);
  drawPlanetVenus.position.x = 60;
  // Earth
  const planet_3 = new PlanetsGeometry(
    4,
    30,
    30,
    "./textures/planets/",
    "2k_earth_daymap.jpg"
  );

  const drawPlanetEarth = new THREE.Mesh(
    planet_3.planetGeometry(),
    planet_3.planetTexture()
  );

  const earthObj = new THREE.Object3D();

  earthObj.add(drawPlanetEarth);
  scene.add(earthObj);
  drawPlanetEarth.position.x = 70;

  // Mars
  const planet_4 = new PlanetsGeometry(
    3.8,
    30,
    30,
    "./textures/planets/",
    "2k_mars.jpg"
  );

  const drawPlanetMars = new THREE.Mesh(
    planet_4.planetGeometry(),
    planet_4.planetTexture()
  );

  const marsObj = new THREE.Object3D();

  marsObj.add(drawPlanetMars);
  scene.add(marsObj);
  drawPlanetMars.position.x = 100;
  // Jupiter
  const planet_5 = new PlanetsGeometry(
    7,
    30,
    30,
    "./textures/planets/",
    "2k_jupiter.jpg"
  );

  const drawPlanetJupiter = new THREE.Mesh(
    planet_5.planetGeometry(),
    planet_5.planetTexture()
  );

  const jupiterObj = new THREE.Object3D();

  jupiterObj.add(drawPlanetJupiter);
  scene.add(jupiterObj);
  drawPlanetJupiter.position.x = 130;
  //Saturn
  const planet_6 = new PlanetsGeometry(
    6.2,
    30,
    30,
    "./textures/planets/",
    "2k_saturn.jpg"
  );

  const drawPlanetSaturn = new THREE.Mesh(
    planet_6.planetGeometry(),
    planet_6.planetTexture()
  );

  const saturnObj = new THREE.Object3D();

  saturnObj.add(drawPlanetSaturn);
  scene.add(saturnObj);
  drawPlanetSaturn.position.x = 180;

  // Saturn Ring
  /* For the rings, we must use the same tecnique as we did for the Sun and Mercury. Planet Jupiter 
    is the parent and the ring is the child object. First we need to create the ring geometry and load
    the texture to draw the ring. After it, we add the object to planet object and for finish it
    we set the position and rotation from the parent object (Saturn planet, in this case).
  */
  const saturnRinGeometry = new THREE.RingGeometry(10, 15, 15);
  const ringTexTureLoader = new THREE.TextureLoader();
  const saturnRingMat = new THREE.MeshBasicMaterial({
    map: ringTexTureLoader.load("./textures/planets/2k_saturn_ring_alpha.png"),
    side: THREE.DoubleSide,
  });
  const drawRing = new THREE.Mesh(saturnRinGeometry, saturnRingMat);

  saturnObj.add(drawRing);
  drawRing.position.x = 180;
  drawRing.rotation.x = -0.75 * Math.PI;

  //Uranus
  const planet_7 = new PlanetsGeometry(
    3,
    30,
    30,
    "./textures/planets/",
    "2k_uranus.jpg"
  );

  const drawPlanetUranus = new THREE.Mesh(
    planet_7.planetGeometry(),
    planet_7.planetTexture()
  );

  const uranusObj = new THREE.Object3D();

  uranusObj.add(drawPlanetUranus);
  scene.add(uranusObj);
  drawPlanetUranus.position.x = 225;
  //Neptune
  const planet_8 = new PlanetsGeometry(
    3,
    30,
    30,
    "./textures/planets/",
    "2k_neptune.jpg"
  );

  const drawPlanetNeptune = new THREE.Mesh(
    planet_8.planetGeometry(),
    planet_8.planetTexture()
  );

  const neptuneObj = new THREE.Object3D();

  neptuneObj.add(drawPlanetNeptune);
  scene.add(neptuneObj);
  drawPlanetNeptune.position.x = 250;
  //Point light on the Sun, all planets will receive the light from the sun.

  const pointSunLight = new THREE.PointLight(0xffffff, 2, 1000, 10);
  scene.add(pointSunLight);

  // function for re-rendering/animating the scene
  function tick() {
    sun.rotateY(0.05);
    drawPlanetMercury.rotateY(0.0025);
    drawPlanetVenus.rotateY(0.0025);
    drawPlanetEarth.rotateY(0.002);
    drawPlanetJupiter.rotateY(0.0018);
    drawPlanetSaturn.rotateY(0.0001);
    drawPlanetUranus.rotateY(0.00009);
    drawPlanetNeptune.rotateY(0.00009);
    mercuryObj.rotateY(0.008);
    venusObj.rotateY(0.006);
    earthObj.rotateY(0.004);
    marsObj.rotateY(0.0035);
    jupiterObj.rotateY(0.003);
    saturnObj.rotateY(0.003);
    uranusObj.rotateY(0.0025);
    neptuneObj.rotateY(0.002);
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
  }
  tick();
}
init();
