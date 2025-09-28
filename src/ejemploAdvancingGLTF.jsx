import {
  Stats,
  OrbitControls,
  Circle,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Perf } from 'r3f-perf'
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

function EnvironmentScene() {
  const { height, radius, scale } = useControls("Ground", {
    height: { value: 10, min: 0, max: 100, step: 1 },
    radius: { value: 115, min: 0, max: 1000, step: 1 },
    scale: { value: 100, min: 0, max: 1000, step: 1 },
  });

  return (
    <Environment
      preset="forest" // en vez de usar un HDRI, usamos un preset
      // pero tambien podemos usar files="/img/venice_sunset_1k.hdr"
      background
      //backgroundBlurriness={0.1}
      ground={{
        height: height,
        radius: radius,
        scale: scale,
      }}
    />
  );
}

function Model() {
  const { scene } = useLoader(GLTFLoader, "/models/scene.glb");
  console.log(scene);

  const {
    x,
    y,
    z,
    visible,
    color,
    metalness,
    roughness,
    clearcoat,
    clearcoatRoughness,
    transmission,
    ior,
    thickness,
  } = useControls("Suzanne", {
    x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    visible: true,
    color: { value: "#ff85a4ff" },
    metalness: { value: 0, min: 0, max: 1.0, step: 0.01 },
    roughness: { value: 0, min: 0, max: 1.0, step: 0.01 },
    clearcoat: { value: 1, min: 0, max: 1.0, step: 0.01 },
    clearcoatRoughness: { value: 0, min: 0, max: 1.0, step: 0.01 },
    transmission: { value: 1.0, min: 0, max: 1.0, step: 0.01 },
    ior: { value: 1.74, min: 1, max: 5, step: 0.01 },
    thickness: { value: 3.12, min: 0, max: 5, step: 0.01 },
  });

  return (
    <primitive
      object={scene}
      children-0-rotation={[x, y, z]}
      children-0-visible={visible}
      children-0-material-color={color}
      children-0-material-metalness={metalness}
      children-0-material-roughness={roughness}
      children-0-material-clearcoat={clearcoat}
      children-0-material-clearcoatRoughness={clearcoatRoughness}
      children-0-material-transmission={transmission}
      children-0-material-ior={ior}
      children-0-material-thickness={thickness}
    />
  );
}

export default function AdvancingGLTF() {
  return (
    <>
      <Canvas camera={{ position: [-8, 5, 8] }} shadows>
        <EnvironmentScene />
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={5}
        />
        <Model />
        <ContactShadows
          scale={150}
          position={[0.33, -0.33, 0.33]}
          opacity={1.5}
        />

        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
        <OrbitControls
          target={[0, 1, 0]}
          maxPolarAngle={Math.PI / 2}
          autoRotate
        />
        {/* <axesHelper args={[5]} maxPolarAngle={Math.PI / 2} /> */}
        <Perf position="top-left" />
      </Canvas>
      <Leva collapsed />
    </>
  );
}