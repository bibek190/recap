import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(1, 16, 16);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// resize
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;

  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  1000
);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const cursor = {
  x: 0,
  y: 0,
};

//
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  // camera.position.y = cursor.y * 3;
  // camera.lookAt(mesh.position);
  controls.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
tick();
