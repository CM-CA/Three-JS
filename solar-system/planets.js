import * as THREE from "three";

/*
const texTureLoader = new THREE.TextureLoader();

let sunGeo = new THREE.SphereGeometry(75, 130, 130);
let sunTexture = texTureLoader.setPath("./textures/stars/").load("2k_sun.jpg");
let sunMat = new THREE.MeshBasicMaterial({
  map: sunTexture,
});

const sun = new THREE.Mesh(sunGeo, sunMat);

scene.add(sun);
*/

//Its time to make our new planets and stars for our galaxy.
//Let's create our first constructor.

class PlanetsGeometry {
  constructor(radius, height, width, path, pic) {
    this.radius = radius;
    this.height = height;
    this.width = width;
    this.path = path;
    this.pic = pic;
  }

  planetGeometry() {
    try {
      //Planet geometry
      const geoMetry = new THREE.SphereGeometry(
        this.radius,
        this.height,
        this.width
      );
      return geoMetry;
    } catch (e) {
      return console.log(e);
    }
  }

  planetTexture() {
    try {
      const texTureLoader = new THREE.TextureLoader();

      const planetTexture = texTureLoader.setPath(this.path).load(this.pic);
      const planetMat = new THREE.MeshStandardMaterial({
        map: planetTexture,
      });
      return planetMat;
    } catch (e) {
      console.log(e);
    }
  }
}

export { PlanetsGeometry };
