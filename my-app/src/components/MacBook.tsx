import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

// Preload the model
useGLTF.preload('/LaLiga3d.glb')

function MacBookModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const gltf = useGLTF('/LaLiga3d.glb')
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const videoTextureRef = useRef<THREE.VideoTexture | null>(null)
  
  useEffect(() => {
    const video = document.createElement('video')
    video.src = '/LaLigaDemo.mp4'
    video.crossOrigin = 'anonymous'
    video.loop = true
    video.muted = true
    video.playsInline = true
    video.autoplay = true

    video.addEventListener('loadeddata', () => {
      video.play().catch(err => console.log('Video autoplay failed:', err))
    })

    videoRef.current = video

    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.magFilter = THREE.LinearFilter
    videoTexture.format = THREE.RGBAFormat
    videoTexture.colorSpace = THREE.SRGBColorSpace
    videoTexture.flipY = false
    videoTexture.wrapS = THREE.MirroredRepeatWrapping
    videoTexture.repeat.x = -1
    videoTexture.center.x = 0.5
    videoTextureRef.current = videoTexture

    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        console.log('Mesh:', child.name, 'Material:', child.material.name)

        const materialName = child.material.name || ''
        if (materialName.toLowerCase().includes('screen') ||
            materialName.toLowerCase().includes('display') ||
            child.name.toLowerCase().includes('screen') ||
            child.name.toLowerCase().includes('display')) {
          console.log('Found screen material:', child.material.name, 'on mesh:', child.name)

          child.material = child.material.clone()

          child.material.map = videoTexture
          child.material.emissiveMap = videoTexture
          child.material.emissive = new THREE.Color(0xffffff)
          child.material.emissiveIntensity = 0.3

          child.material.roughness = 1.0
          child.material.metalness = 0.0
          child.material.aoMapIntensity = 0

          child.material.envMapIntensity = 0

          child.material.needsUpdate = true
        }
      }
    })

    return () => {
      video.pause()
      videoTexture.dispose()
    }
  }, [gltf])
  
  useFrame(() => {
    if (groupRef.current) {
      let xPosition = 0
      if (scrollProgress < 0.5) {
        xPosition = 10 - (scrollProgress / 0.5) * 10
      } else {
        xPosition = ((scrollProgress - 0.5) / 0.5) * 10
      }
      groupRef.current.position.x = xPosition

      const rotationProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.6))
      groupRef.current.rotation.y = (1 - rotationProgress) * Math.PI - Math.PI / 2

      groupRef.current.rotation.x = 0.3
    }
  })
  
  return (
    <group ref={groupRef}>
      <primitive 
        object={gltf.scene} 
        scale={12} 
        position={[0, -1, 0]}
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

export default function MacBook() {
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
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        {/* Lighting setup - brighter for video visibility */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <pointLight position={[0, 5, 3]} intensity={1} />
        <spotLight position={[0, 0, 10]} intensity={0.8} angle={0.4} />
        
        <Suspense fallback={<Loader />}>
          <MacBookModel scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
