// Shoe2.jsx
import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useSnapshot } from "valtio"
import { state } from "./state" // 👈 importamos el mismo proxy

export function Shoe2() {
  const ref = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF("/models/shoe-draco.glb") // 👈 asegúrate de la ruta correcta
  const [hovered, set] = useState(null)

  // Animación flotante
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -0.2 - (1 + Math.sin(t / 1.5)) / 20
    )
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  // Cursor personalizado al pasar sobre las partes
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
      return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
    }
  }, [hovered])

  return (
    <group
      ref={ref}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />
    </group>
  )
}

useGLTF.preload("/models/shoe-draco.glb")


/* 
esto va en App.jsx

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Model } from "./Shoe";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio"
import { state } from "./state"
import { Shoe2 } from "./Shoe2"

function Picker() {
  const snap = useSnapshot(state)
  return (
    <div style={{ display: snap.current ? "block" : "none", position: "absolute", top: 40, left: 110 }}>
      <HexColorPicker color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h3 style={{ color: "#070707ff", marginTop: "10px", fontSize: "46px" }}>{snap.current}</h3>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
        <Shoe2 />
        <Environment preset="city" />
        <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} />
      </Canvas>
      <Picker />
    </>
  );
}


*/
