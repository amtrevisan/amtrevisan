import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

useGLTF.preload('/apple-iphone-17-pro-max/source/iphone17promax.glb')

function IPhoneModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const gltf = useGLTF('/apple-iphone-17-pro-max/source/iphone17promax.glb')
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const videoTextureRef = useRef<THREE.VideoTexture | null>(null)

  useEffect(() => {
    const video = document.createElement('video')
    video.src = '/PronunciationMockup.mp4'
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
    
    // Fix orientation and mirroring
    videoTexture.flipY = true  // Flip vertically to fix upside down
    videoTexture.wrapS = THREE.ClampToEdgeWrapping  // No mirroring
    videoTexture.wrapT = THREE.ClampToEdgeWrapping  // No mirroring
    videoTexture.repeat.set(1, 1)  // No zoom - show full video
    videoTexture.offset.set(0, 0)  // Center position
    
    videoTextureRef.current = videoTexture

    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        console.log('Mesh:', child.name, 'Material:', child.material.name)

        const materialName = child.material.name || ''
        const meshName = child.name || ''

        // More aggressive screen detection
        if (materialName.toLowerCase().includes('screen') ||
            materialName.toLowerCase().includes('display') ||
            materialName.toLowerCase().includes('glass') ||
            meshName.toLowerCase().includes('screen') ||
            meshName.toLowerCase().includes('display') ||
            meshName.toLowerCase().includes('glass') ||
            materialName === 'gdQFWHoaObPzopH_8' || // Force replace this specific texture
            materialName.includes('gdQFWHoaObPzopH_8')) {

          console.log('REPLACING screen material:', child.material.name, 'on mesh:', child.name)

          // Force clone and replace all texture maps
          child.material = child.material.clone()

          // Clear all existing textures
          child.material.map = null
          child.material.emissiveMap = null
          child.material.normalMap = null
          child.material.roughnessMap = null
          child.material.metalnessMap = null
          child.material.aoMap = null

          // Apply video texture
          child.material.map = videoTexture
          child.material.emissiveMap = videoTexture
          child.material.emissive = new THREE.Color(0xffffff)
          child.material.emissiveIntensity = 3.0  // Even brighter

          // Override material properties
          child.material.roughness = 0.1
          child.material.metalness = 0.0
          child.material.transparent = false
          child.material.aoMapIntensity = 0
          child.material.envMapIntensity = 0

          child.material.needsUpdate = true
          console.log('Video texture applied to:', child.material.name)
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
        xPosition = -10 + (scrollProgress / 0.5) * 10
      } else {
        xPosition = -((scrollProgress - 0.5) / 0.5) * 10
      }
      groupRef.current.position.x = xPosition

      const rotationProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.6))
      groupRef.current.rotation.y = (1 - rotationProgress) * Math.PI - Math.PI / 2

      groupRef.current.rotation.x = 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <primitive
        object={gltf.scene}
        scale={15}
        position={[0, 0.5, 0]}
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

export default function IPhone() {
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

        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />
        <pointLight position={[0, 5, 3]} intensity={1} />
        <spotLight position={[0, 0, 10]} intensity={0.8} angle={0.4} />

        <Suspense fallback={<Loader />}>
          <IPhoneModel scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
