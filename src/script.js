import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

// line
const count = 5000;
const positions = new Float32Array(count * 3);
const lineGeometry = new THREE.BufferGeometry();

for (let i = 0; i < count * 3; i++) {
  positions[i + 0] = (Math.random() - 0.5) * 100;
  positions[i + 1] = (Math.random() - 0.5) * 100;
  positions[i + 2] = (Math.random() - 0.5) * 100;
}
lineGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const lineMaterial = new THREE.PointsMaterial({
  size: 0.01,
});
const lines = new THREE.Points(lineGeometry, lineMaterial);
scene.add(lines);

// rope
const radius = 20;
const ropeGeometry = new THREE.BufferGeometry();
const ropePositions = new Float32Array(count * 3);
for (let i = 0; i < count; i++) {
  ropePositions[i] = radius;
}
ropeGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(ropePositions, 1)
);
const ropeMaterial = new THREE.LineBasicMaterial({ color: "#0000ff" });
const gruop = new THREE.Group();
const rope1 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope2 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope3 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope4 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope5 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope6 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope7 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope8 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope9 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope10 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope11 = new THREE.Line(ropeGeometry, ropeMaterial);
const rope12 = new THREE.Line(ropeGeometry, ropeMaterial);

rope1.position.x = 10;
rope1.position.y = 2;
rope1.position.z = 10;
rope1.rotation.y = Math.PI * 0.5;

rope2.rotation.y = Math.PI * 0.5;
rope2.position.x = 10;
rope2.position.y = 1.33;
rope2.position.z = 10;

rope3.rotation.y = Math.PI * 0.5;
rope3.position.x = 10;
rope3.position.y = 0.66;
rope3.position.z = 10;

rope4.rotation.y = Math.PI * 0.5;
rope4.position.x = -10;
rope4.position.y = 0.66;
rope4.position.z = 10;

rope5.rotation.y = Math.PI * 0.5;
rope5.position.x = -10;
rope5.position.y = 1.33;
rope5.position.z = 10;

rope6.rotation.y = Math.PI * 0.5;
rope6.position.x = -10;
rope6.position.y = 2;
rope6.position.z = 10;

rope7.rotation.y = Math.PI;
rope7.position.x = 10;
rope7.position.y = 2;
rope7.position.z = 10;

rope8.rotation.y = Math.PI;
rope8.position.x = 10;
rope8.position.y = 1.33;
rope8.position.z = 10;

rope9.rotation.y = Math.PI;
rope9.position.x = 10;
rope9.position.y = 0.66;
rope9.position.z = 10;

rope10.rotation.y = Math.PI;
rope10.position.x = 10;
rope10.position.y = 0.66;
rope10.position.z = -10;

rope11.rotation.y = Math.PI;
rope11.position.x = 10;
rope11.position.y = 1.33;
rope11.position.z = -10;

rope12.rotation.y = Math.PI;
rope12.position.x = 10;
rope12.position.y = 2;
rope12.position.z = -10;

scene.add(
  rope1,
  rope2,
  rope3,
  rope4,
  rope5,
  rope6,
  rope7,
  rope8,
  rope9,
  rope10,
  rope11,
  rope12
);
// circles
const circleGeometry = new THREE.SphereGeometry(1, 32);
const circleMaterial = new THREE.MeshStandardMaterial({ color: "#ffff00" });

for (let i = 0; i <= 10; i++) {
  const circles = new THREE.Mesh(circleGeometry, circleMaterial);

  circles.position.x = (Math.random() - 0.5) * 20;
  circles.position.y = 5 + Math.random() * 4;
  circles.position.z = (Math.random() - 0.5) * 10;

  scene.add(circles);
  console.log(circles);
}

const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial();
const floor = new THREE.Mesh(floorGeometry, floorMaterial);

floor.rotation.x = -Math.PI * 0.5;

scene.add(floor);

// house
const pole1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 2, 0.5),
  new THREE.MeshStandardMaterial({ color: "red" })
);
pole1.position.y = 1;
pole1.position.x = 10 - 0.25;
pole1.position.z = 10 - 0.25;
scene.add(pole1);

const pole2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 2, 0.5),
  new THREE.MeshStandardMaterial({ color: "red" })
);
pole2.position.y = 1;
pole2.position.x = -10 + 0.25;
pole2.position.z = 10 - 0.25;
scene.add(pole2);

const pole3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 2, 0.5),
  new THREE.MeshStandardMaterial({ color: "red" })
);
pole3.position.y = 1;
pole3.position.x = 10 - 0.25;
pole3.position.z = -10 + 0.25;
scene.add(pole3);

const pole4 = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 2, 0.5),
  new THREE.MeshStandardMaterial({ color: "red" })
);
pole4.position.y = 1;
pole4.position.x = -10 + 0.25;
pole4.position.z = -10 + 0.25;
scene.add(pole4);

const ambientLight = new THREE.AmbientLight("#ffffff", 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("#ffffff", 0.5);
directionalLight.position.set(1, 1, 0);
scene.add(directionalLight);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

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
  0.1,
  100
);
camera.position.x = 5;
camera.position.y = 8;
camera.position.z = 18;
scene.add(camera);

// lights

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const tick = () => {
  window.requestAnimationFrame(tick);
  renderer.render(scene, camera);
  controls.update();
};
tick();
