import { DirectionalLight, PointLight } from "three";

function createLights() {
  const light = new DirectionalLight("white", 300);

  light.position.set(10, 10, 10);
  return light;
}

export { createLights };
