import { useFrame } from "@react-three/fiber";
import { useRef, useEffect  } from "react"


export default function Box(props) {
    const instanceRef = useRef();
    const materialRef = useRef();

    useEffect(() => {
        if (instanceRef.current) {
            // Do something with the instance
        }
    }, []);

    useFrame((state, delta) => {
        instanceRef.current.rotation.x += 1 * delta
        instanceRef.current.rotation.y += 0.5 * delta
        instanceRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) / 2
    })

  return (
    <mesh {...props} ref={instanceRef}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe ref={materialRef} />
    </mesh>
  )
}