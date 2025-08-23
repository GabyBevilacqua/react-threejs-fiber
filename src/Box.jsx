import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";

export default function Box(props) {
  const instanceRef = useRef();
  const materialRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    if (instanceRef.current) {
      // Do something with the instance
    }
  }, []);

  useFrame((_, delta) => {
    if(rotate) {
        instanceRef.current.rotation.x += 1 * delta;
        instanceRef.current.rotation.y += 0.5 * delta;

    }

  });

  return (
    <mesh 
    {...props} 
    ref={instanceRef}
    scale={hovered ? 1.2 : 1}
    onPointerDown={() => setRotate(!rotate)}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshBasicMaterial 
      color={hovered ? 0xff0000 : 0x00ff00} 
      wireframe ref={materialRef} />
    </mesh>
  );
}

// useFrame((state, delta) => {
//   instanceRef.current.rotation.x += 1 * delta;
//   instanceRef.current.rotation.y += 0.5 * delta;
//   instanceRef.current.position.y =
//     Math.sin(state.clock.getElapsedTime() * 2) / 2;
// });
