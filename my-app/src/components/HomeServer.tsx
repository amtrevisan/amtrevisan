import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

// Preload the home server model
useGLTF.preload('/models/HomeServer.glb')

function HomeServerModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const gltf = useGLTF('/models/HomeServer.glb')

  useFrame(() => {
    if (groupRef.current) {
      // Animate horizontal position based on scroll (right to right, like MacBook)
      let xPosition = 0
      if (scrollProgress < 0.5) {
        xPosition = 10 - (scrollProgress / 0.5) * 10
      } else {
        xPosition = ((scrollProgress - 0.5) / 0.5) * 10
      }
      groupRef.current.position.x = xPosition

      // Animate rotation based on scroll
      const rotationProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.6))
      groupRef.current.rotation.y = (1 - rotationProgress) * Math.PI - Math.PI / 2

      // Add slight tilt for 3D effect
      groupRef.current.rotation.x = 0.1

      // Add fan rotation animation if present
      gltf.scene.traverse((child: any) => {
        if (child.name && (child.name.toLowerCase().includes('fan') ||
                           child.name.toLowerCase().includes('rotor'))) {
          child.rotation.z += 0.05
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      <primitive
        object={gltf.scene}
        scale={2}
        position={[0, -2, 0]}
      />
    </group>
  )
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[2, 0.1, 1.5]} />
      <meshStandardMaterial color="#C2A84A" wireframe />
    </mesh>
  )
}

export default function HomeServer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = rect.height

      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (windowHeight + sectionHeight)
      ))

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <Canvas
        style={{ height: '100%', width: '100%' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 25]} fov={45} />

        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} />

        <Suspense fallback={<Loader />}>
          <HomeServerModel scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
