import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import * as THREE from 'three'
import { Stats, OrbitControls } from '@react-three/drei'
 import { Perf } from "r3f-perf";

export default function App() {
  return (
    <Canvas camera={{ position: [-1, 4, 2.5] }}>
      <directionalLight position={[1, 1, 1]} />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial()}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial()}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial()}
      />
      <OrbitControls target-y={1} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Perf position="top-left" />
    </Canvas>
  )
}

// import { Canvas } from "@react-three/fiber";
// import Polyhedron from "./Polyhedron";
// import * as THREE from "three";
// import { useMemo } from 'react'
// import { OrbitControls } from "@react-three/drei";
// import { Perf } from "r3f-perf";
// import { useControls } from 'leva'

// export default function App() {
//   const polyhedron = useMemo(
//     () => [
//       new THREE.BoxGeometry(),
//       new THREE.SphereGeometry(0.7),
//       new THREE.DodecahedronGeometry(0.7),
//     ],
//     []
//   )

//   const options = useMemo(() => {
//     return {
//       x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//       y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//       z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
//       visible: true,
//       color: { value: '#899eff' }
//     }
//   }, [])

//   const pA = useControls('Polyhedron A', options)
//   const pB = useControls('Polyhedron B', options)

//   return (
//     <Canvas camera={{ position: [1, 2, 3] }}>
//       <Polyhedron
//         position={[-1, 1, 0]}
//         rotation={[pA.x, pA.y, pA.z]}
//         visible={pA.visible}
//         color={pA.color}
//         polyhedron={polyhedron}
//       />
//       <Polyhedron
//         position={[1, 1, 0]}
//         rotation={[pB.x, pB.y, pB.z]}
//         visible={pB.visible}
//         color={pB.color}
//         polyhedron={polyhedron}
//       />
//       <OrbitControls target-y={1} />
//       <axesHelper args={[5]} />
//       <gridHelper />
//       <Perf position="top-left" />
//     </Canvas>
//   )
// }

// import { Canvas } from '@react-three/fiber'
// import { Stats, PointerLockControls } from '@react-three/drei'

// export default function App() {
//   return (
//     <>
//       <button id="button" className="button">Activar control</button>
//       <Canvas>
//         <mesh>
//           <boxGeometry args={[100, 10, 100, 100, 10, 100]} />
//           <meshBasicMaterial wireframe color={'lime'} />
//         </mesh>
//         <PointerLockControls selector="#button" />
//         <Stats />
//       </Canvas>
//     </>
//   )
// }
