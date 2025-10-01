import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  useGLTF,
  OrbitControls,
  Environment,
  Stats,
  Html,
} from '@react-three/drei'
import { useControls } from 'leva'
import Models from './models.json'

function Model({ url }) {
  const { scene } = useGLTF(url)
  const [cache, setCache] = useState({})

  if (!cache[url]) {
    const annotations = []

    scene.traverse((o) => {
      if (o.userData.prop) {
        annotations.push(
          <Html
            key={o.uuid}
            position={[o.position.x, o.position.y, o.position.z]}
            distanceFactor={0.25}
          >
            <div className="annotation">{o.userData.prop}</div>
          </Html>
        )
      }
    })

    console.log('Caching JSX for url ' + url)
    setCache({
      ...cache,
      [url]: <primitive object={scene}>{annotations}</primitive>,
    })
  }
  console.log(cache)
  return cache[url]
}

export default function App() {
  const { model } = useControls({
    model: {
      value: 'hammer',
      options: Object.keys(Models),
    },
  })

  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Environment files="/img/workshop_1k.hdr" background />
        <group>
          <Model url={Models[model]} />
        </group>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
      <span id="info">
        The {model.replace(/([A-Z])/g, ' $1').toLowerCase()} is selected.
      </span>
    </>
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
