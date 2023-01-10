import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  // this method will be called once per frame

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
