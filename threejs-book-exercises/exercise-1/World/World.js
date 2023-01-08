import { createCamera } from "../components/camera.js";
import { createCube, createCube_2 } from "../components/cube.js";
import { createScene } from "../components/scene.js";

import { createRenderer } from "../systems/renderer.js";
import { Resizer } from "../systems/Resizer.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    const cube2 = createCube_2();
    cube.position.set(0, 0, 0);
    cube2.position.set(5, 0, 0);
    scene.add(cube);
    scene.add(cube2);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
