import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Stats, Environment, Center } from '@react-three/drei'
import Button from './Button'

const vec = new Vector3()

function Rig() {
  return useFrame(({ camera, pointer }) => {
    vec.set(pointer.x * 2, pointer.y * 2, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Environment  files="/img/ballawley_park_1k.hdr" background />
      <Center>  {/* centra los objetos hijos */}
        {[...Array(5).keys()].map((x) =>
          [...Array(3).keys()].map((y) => (
            <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
          ))
        )}
      </Center>
      <Rig />
      <Stats />
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
