'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Molecule() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * 0.1
    meshRef.current.rotation.y = time * 0.15
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 32, 32]} scale={1.5}>
        <MeshDistortMaterial
          color="#00f2ff"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.6}
        />
      </Sphere>
    </Float>
  )
}

export default function PharmaScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
      <Canvas
        shadows={false}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
        gl={{ 
          antialias: false,
          powerPreference: "high-performance",
          alpha: true 
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#00f2ff" />
        <Molecule />
      </Canvas>
    </div>
  )
}
