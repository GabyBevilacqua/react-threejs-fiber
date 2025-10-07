/* Custom Hooks ultima leccion

PARTE 1 - useKeyboard Hook

./src/useKeyboard.jsx

import { useEffect, useRef } from 'react'

export default function useKeyboard() {
  const keyMap = useRef({})

  useEffect(() => {
    const onDocumentKey = (e) => {
      keyMap.current[e.code] = e.type === 'keydown'
    }
    document.addEventListener('keydown', onDocumentKey)
    document.addEventListener('keyup', onDocumentKey)
    return () => {
      document.removeEventListener('keydown', onDocumentKey)
      document.removeEventListener('keyup', onDocumentKey)
    }
  }, [])

  return keyMap.current
}

./src/Box.jsx

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import useKeyboard from './useKeyboard'

export default function Box(props) {
  const ref = useRef()
  const keyMap = useKeyboard()

  useFrame((_, delta) => {
    keyMap['KeyA'] && (ref.current.position.x -= 1 * delta)
    keyMap['KeyD'] && (ref.current.position.x += 1 * delta)
    keyMap['KeyW'] && (ref.current.position.z -= 1 * delta)
    keyMap['KeyS'] && (ref.current.position.z += 1 * delta)
  })

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}

./src/App.jsx

import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { Stats, OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      <Box position={[0, 0.5, 0]} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}

PARTE 2

./src/Box.jsx

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()
  const keyMap = props.keyMap
  const [selected, setSelected] = useState(props.selected)

  useFrame((_, delta) => {
    keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta)
    keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta)
    keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta)
    keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta)
  })

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  )
}


./src/App.jsx

import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { Stats, OrbitControls } from '@react-three/drei'
import useKeyboard from './useKeyboard'

export default function App() {
  const keyMap = useKeyboard()

  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      <Box position={[-1.5, 0.5, 0]} keyMap={keyMap} />
      <Box position={[0, 0.5, 0]} keyMap={keyMap} selected />
      <Box position={[1.5, 0.5, 0]} keyMap={keyMap} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}


*/