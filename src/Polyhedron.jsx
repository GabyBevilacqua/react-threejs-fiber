import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Polyhedron(props) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.2 * delta
    ref.current.rotation.y += 0.05 * delta
  })

  return (
    <mesh {...props} ref={ref} castShadow receiveShadow>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  )
}

// import { useRef, useState } from 'react'

// export default function Polyhedron({ polyhedron, color, ...props }) {
//   const ref = useRef()
//   const [count, setCount] = useState(2)

//   console.log(polyhedron[count].uuid)

//   return (
//     <mesh
//       {...props}
//       ref={ref}
//       onPointerDown={() => {
//         setCount((count + 1) % 3)
//       }}
//       geometry={polyhedron[count]}
//     >
//       <meshBasicMaterial color={color} wireframe />
//     </mesh>
//   )
// }