import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const { theme } = useTheme();
  const particlesRef = useRef<THREE.Group>(null);
  
  // Create particles
  const particleCount = 100;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const r = 10;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    return {
      position: [x, y, z],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    };
  });
  
  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });
  
  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <Sphere key={i} args={[1, 8, 8]} scale={particle.scale} position={particle.position as any}>
          <meshBasicMaterial 
            color={theme === 'dark' ? '#3B82F6' : '#60A5FA'} 
            transparent 
            opacity={0.7} 
          />
        </Sphere>
      ))}
    </group>
  );
};

const ConnectionLines = () => {
  const { theme } = useTheme();
  const linesRef = useRef<THREE.Group>(null);
  
  // Create random points for line connections
  const pointCount = 15;
  const points = Array.from({ length: pointCount }).map(() => {
    const r = 8;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    return new THREE.Vector3(x, y, z);
  });
  
  // Create connections between points
  const connections: [THREE.Vector3, THREE.Vector3][] = [];
  points.forEach((point, i) => {
    // Connect each point to 2 closest points
    const distances = points
      .map((p, j) => ({ index: j, distance: point.distanceTo(p) }))
      .filter(d => d.index !== i)
      .sort((a, b) => a.distance - b.distance);
    
    for (let j = 0; j < Math.min(2, distances.length); j++) {
      connections.push([point, points[distances[j].index]]);
    }
  });
  
  useFrame(() => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.001;
      linesRef.current.rotation.x += 0.0005;
    }
  });
  
  return (
    <group ref={linesRef}>
      {connections.map((connection, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array([
                connection[0].x, connection[0].y, connection[0].z,
                connection[1].x, connection[1].y, connection[1].z,
              ])}
              count={2}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            attach="material" 
            color={theme === 'dark' ? '#6366F1' : '#818CF8'} 
            opacity={0.4} 
            transparent 
            linewidth={1} 
          />
        </line>
      ))}
    </group>
  );
};

const HeroCanvas = () => {
  const { theme } = useTheme();
  
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 60 }}
      dpr={[1, 2]}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: theme === 'dark' 
          ? 'radial-gradient(circle at center, #1E1E25 0%, #111827 100%)' 
          : 'radial-gradient(circle at center, #F9FAFB 0%, #EFF6FF 100%)',
      }}
    >
      <ambientLight intensity={0.5} />
      <ParticleField />
      <ConnectionLines />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default HeroCanvas;