import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Box(props) {
  const ref = useRef();
  //const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  //const geometry = new THREE.BoxGeometry();
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.7)],
    []
  );

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });

  useFrame((_, delta) => {
    ref.current.rotation.x += delta 
    ref.current.rotation.y += 0.5 * delta 
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}
    >
      <meshBasicMaterial color={"lime"} wireframe />
    </mesh>
  );
}

// useFrame((state, delta) => {
//   instanceRef.current.rotation.x += 1 * delta;
//   instanceRef.current.rotation.y += 0.5 * delta;
//   instanceRef.current.position.y =
//     Math.sin(state.clock.getElapsedTime() * 2) / 2;
// });
