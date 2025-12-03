import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, MeshTransmissionMaterial } from '@react-three/drei';

interface GlassBarProps {
  className?: string;
  scale?: number;
  position?: [number, number, number];
}

function BarModel({ scale = 0.1 }: { scale?: number }) {
  const { nodes } = useGLTF('/bar.glb');

  return (
    <mesh
      scale={scale}
      rotation-x={Math.PI / 2}
      geometry={(nodes.Cube as any)?.geometry}
    >
      <MeshTransmissionMaterial
        transmission={1}
        roughness={0}
        thickness={10}
        ior={1.15}
        color="#ffffff"
        attenuationColor="#ffffff"
        attenuationDistance={0.25}
        chromaticAberration={0.1}
      />
    </mesh>
  );
}

const GlassBar: React.FC<GlassBarProps> = ({
  className = '',
  scale = 0.1,
  position = [0, 0, 0]
}) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 15 }}
        gl={{ alpha: true }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        <BarModel scale={scale} />
      </Canvas>
    </div>
  );
};

export default GlassBar;
