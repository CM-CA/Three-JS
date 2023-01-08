import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  MeshNormalMaterial,
  OctahedronGeometry,
} from "three";

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  const material = new MeshBasicMaterial();

  const cube = new Mesh(geometry, material);

  return cube;
}

function createCube_2() {
  const geo = new OctahedronGeometry(1, 0);
  const mat = new MeshNormalMaterial();

  const cube2 = new Mesh(geo, mat);

  return cube2;
}

export { createCube, createCube_2 };
