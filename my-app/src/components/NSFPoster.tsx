import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

function NSFPosterModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const planeRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    // Create texture from the REU-CTT poster image
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load('/images/REUCTTPoster.jpg', (texture) => {
      texture.wrapS = THREE.ClampToEdgeWrapping
      texture.wrapT = THREE.ClampToEdgeWrapping
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      texture.needsUpdate = true

      if (planeRef.current) {
        planeRef.current.material = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: false,
          side: THREE.DoubleSide,
        })
        planeRef.current.material.needsUpdate = true
      }
    }, undefined, (error) => {
      console.error('Error loading NSF poster texture:', error)
    })
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      // Animate horizontal position based on scroll (opposite of iPhone)
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
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={planeRef} position={[0, 0, 0]}>
        <planeGeometry args={[8, 11]} />
        <meshStandardMaterial />
      </mesh>
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

export default function NSFPoster() {
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
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />

        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <pointLight position={[0, 5, 3]} intensity={1} />
        <spotLight position={[0, 0, 10]} intensity={0.8} angle={0.4} />

        <NSFPosterModel scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
