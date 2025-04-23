import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, OrbitControls } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

const ShapesGroup = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });
  
  const primaryColor = theme === 'dark' ? '#3B82F6' : '#3B82F6';
  const accentColor = theme === 'dark' ? '#8B5CF6' : '#8B5CF6';

  return (
    <group ref={groupRef}>
      {/* Sphere */}
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={primaryColor} 
          roughness={0.3} 
          metalness={0.7} 
          wireframe={true}
        />
      </Sphere>
      
      {/* Box */}
      <Box args={[1.5, 1.5, 1.5]} position={[-3, 2, -2]} rotation={[0.5, 0.5, 0]}>
        <meshStandardMaterial 
          color={accentColor} 
          roughness={0.3} 
          metalness={0.7}
          wireframe={true}
        />
      </Box>
      
      {/* Torus */}
      <Torus args={[1, 0.3, 16, 100]} position={[3, -2, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color={primaryColor} 
          roughness={0.3} 
          metalness={0.7} 
          wireframe={true}
        />
      </Torus>
      
      {/* Small Spheres */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const radius = 4;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 5;
        
        return (
          <Sphere key={i} args={[0.2, 16, 16]} position={[x, y, z]}>
            <meshStandardMaterial 
              color={i % 2 === 0 ? primaryColor : accentColor} 
              roughness={0.5} 
              metalness={0.5} 
            />
          </Sphere>
        );
      })}
    </group>
  );
};

const AboutScene = () => {
  const { theme } = useTheme();
  
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <ShapesGroup />
      <OrbitControls enableZoom={false} enablePan={false} />
      
      {/* Responsive background */}
      <color 
        attach="background" 
        args={[theme === 'dark' ? '#0F172A' : '#EFF6FF']} 
      />
    </Canvas>
  );
};

export default AboutScene;