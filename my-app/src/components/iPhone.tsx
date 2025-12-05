import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

useGLTF.preload('/models/iPhone.glb')

function IPhoneModel({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const gltf = useGLTF('/models/iPhone.glb')
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = document.createElement('video')
    video.src = '/videos/iPhone-video.mp4'
    video.crossOrigin = 'anonymous'
    video.loop = true
    video.muted = true
    video.playsInline = true
    video.autoplay = true

    video.addEventListener('loadeddata', () => {
      video.play().catch(() => {})
    })

    videoRef.current = video

    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.magFilter = THREE.LinearFilter
    videoTexture.format = THREE.RGBAFormat
    videoTexture.colorSpace = THREE.SRGBColorSpace
    videoTexture.center.set(0.5, 0.5)
    videoTexture.repeat.set(-1, -1)
    videoTexture.wrapS = THREE.RepeatWrapping
    videoTexture.wrapT = THREE.RepeatWrapping

    let screenFound = false

    gltf.scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        const meshName = child.name
        const materialName = child.material.name
        
        if (meshName === 'HkNSnYzBPABcqwM001' || materialName === 'BsXHDwLKqtDOfrW') {
          screenFound = true
          if (child.material.map) child.material.map.dispose()
          if (child.material.emissiveMap) child.material.emissiveMap.dispose()

          child.material.map = videoTexture
          child.material.emissiveMap = videoTexture
          child.material.emissive = new THREE.Color(0xffffff)
          child.material.emissiveIntensity = 1.0
          child.material.roughness = 1.0
          child.material.metalness = 0.0
          child.material.envMapIntensity = 0
          child.material.clearcoat = 0
          child.material.clearcoatRoughness = 1.0
          child.material.toneMapped = false
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
      // Animate horizontal position based on scroll
      let xPosition = 0
      if (scrollProgress < 0.5) {
        xPosition = -10 + (scrollProgress / 0.5) * 10
      } else {
        xPosition = -((scrollProgress - 0.5) / 0.5) * 10
      }
      groupRef.current.position.x = xPosition

      // Animate rotation based on scroll
      const rotationProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.6))
      groupRef.current.rotation.y = (1 - rotationProgress) * Math.PI - Math.PI / 2
      groupRef.current.rotation.x = -0.05
    }
  })

  return (
    <group ref={groupRef}>
      <primitive
        object={gltf.scene}
        scale={30}
        position={[0, 0.2, 0]}
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
